import React from "react";
import { motion } from "framer-motion";
import ChatBox from "../components/Chat/ChatBox";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4"
    >
      <ChatBox />
    </motion.div>
  );
};

export default Home;
