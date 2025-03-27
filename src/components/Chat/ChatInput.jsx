import React, { useState } from "react";
import { motion } from "framer-motion";

const ChatInput = ({ onSendMessage, isTyping }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isTyping) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="border-t border-gray-200 p-6 bg-white"
    >
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about IIT Madras..."
          className="flex-1 border-2 border-gray-300 rounded-full px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-iitm-maroon focus:border-transparent transition-all"
          disabled={isTyping}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!message.trim() || isTyping}
          className={`bg-iitm-maroon text-white rounded-full p-3 w-14 h-14 flex items-center justify-center text-2xl ${
            !message.trim() || isTyping
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-red-900"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6"
      >
        <p className="text-sm text-gray-500 mb-3">Try asking:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "What departments does IIT Madras have?",
            "How can I get admission to B.Tech?",
            "Tell me about hostels",
            "What research areas does IIT Madras focus on?",
          ].map((question, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => !isTyping && onSendMessage(question)}
              disabled={isTyping}
              className="text-sm bg-white hover:bg-gray-100 rounded-full px-4 py-2 text-gray-700 transition-colors border border-gray-300"
            >
              {question}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatInput;
