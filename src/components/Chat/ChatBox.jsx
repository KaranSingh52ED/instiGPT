import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useIITMadrasContext } from "../../context/IITMadrasContext";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the IIT Madras AI Assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { generateResponse } = useIITMadrasContext();

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      const response = await generateResponse(text);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: response,
            sender: "ai",
            timestamp: new Date(),
          },
        ]);
      }, 500 + Math.random() * 1000);
    } catch (error) {
      console.error("Error generating response:", error);

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Sorry, I couldn't process your request. Please try again.",
          sender: "ai",
          timestamp: new Date(),
          isError: true,
        },
      ]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[calc(100vh-8rem)] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="bg-gradient-to-r from-iitm-maroon to-red-800 text-white p-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold"
        >
          IIT Madras AI Assistant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg opacity-80"
        >
          Ask me anything about IIT Madras
        </motion.p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChatMessage message={message} />
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center space-x-2 p-4 max-w-[80%] rounded-lg bg-gray-200 text-gray-700 mb-4"
          >
            <div className="flex space-x-1">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-2 rounded-full bg-gray-500"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="w-2 h-2 rounded-full bg-gray-500"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className="w-2 h-2 rounded-full bg-gray-500"
              />
            </div>
            <span className="text-sm font-medium">
              IIT Madras AI is typing...
            </span>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} isTyping={isTyping} />
    </motion.div>
  );
};

export default ChatBox;
