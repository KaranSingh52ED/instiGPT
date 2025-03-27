import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About IIT Madras AI Assistant
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your intelligent guide to everything about IIT Madras
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6">
                The IIT Madras AI Assistant is designed to provide instant,
                accurate information about the Indian Institute of Technology
                Madras. Our mission is to make institutional knowledge easily
                accessible to prospective students, current students, faculty,
                and anyone interested in learning about this prestigious
                institution.
              </p>
              <p className="text-gray-600 mb-6">
                Built with advanced AI technology, our assistant can answer
                questions about:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>Academic departments and programs</li>
                <li>Admission processes and requirements</li>
                <li>Campus facilities and hostels</li>
                <li>Research initiatives and achievements</li>
                <li>Student life and activities</li>
              </ul>
              <p className="text-gray-600">
                We're constantly improving our AI to provide more accurate and
                helpful responses to your queries.
              </p>
            </div>

            <div className="bg-gradient-to-r from-iitm-maroon to-red-800 p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">About IIT Madras</h2>
              <p className="mb-6">
                The Indian Institute of Technology Madras (IIT Madras) is a
                public technical university located in Chennai, Tamil Nadu,
                India. Founded in 1959 with technical and financial assistance
                from the former government of West Germany, it has consistently
                ranked as the top engineering institute in India.
              </p>
              <p className="mb-6">
                IIT Madras is recognized as an Institute of National Importance
                and has been awarded the status of Institute of Eminence by the
                Government of India. The institute offers undergraduate,
                postgraduate, and doctoral programs across 18 departments
                spanning engineering, sciences, humanities, and management.
              </p>
              <p>
                The campus is known for its beautiful environment with various
                flora and fauna, including deer, blackbucks, and other wildlife,
                making it a unique educational setting in India.
              </p>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-iitm-maroon rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ask a Question
                </h3>
                <p className="text-gray-600">
                  Type any question about IIT Madras in the chat interface. Be
                  specific or general - our AI can handle both.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-iitm-maroon rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI Processing
                </h3>
                <p className="text-gray-600">
                  Our advanced AI analyzes your query and searches its
                  comprehensive knowledge base about IIT Madras.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-iitm-maroon rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get Answers
                </h3>
                <p className="text-gray-600">
                  Receive accurate, up-to-date information in seconds, presented
                  in a clear and friendly manner.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Your Conversation
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
            Ready to learn more about IIT Madras? Head back to the chat and ask
            anything!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/"
            className="inline-block bg-iitm-maroon text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-red-900 transition-colors"
          >
            Chat with IIT Madras AI
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
