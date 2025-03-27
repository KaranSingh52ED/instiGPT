import React from "react";
import { motion } from "framer-motion";

const ChatMessage = ({ message }) => {
  const { text, sender, timestamp, isError } = message;
  const isAi = sender === "ai";

  const formattedTime = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAi ? "justify-start" : "justify-end"} mb-6`}
    >
      <div
        className={`flex max-w-[80%] ${isAi ? "flex-row" : "flex-row-reverse"}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isAi ? "bg-iitm-maroon text-white" : "bg-blue-600 text-white"
            }`}
          >
            {isAi ? "AI" : "You"}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`mx-3 ${
            isError ? "bg-red-100" : isAi ? "bg-white" : "bg-blue-100"
          } rounded-lg p-4 shadow-md`}
        >
          <p className="text-gray-800 text-lg">{text}</p>
          <span className="text-xs text-gray-500 block text-right mt-2">
            {formattedTime}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
