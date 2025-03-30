import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md z-10 sticky top-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.img
                whileHover={{ scale: 1.1 }}
                className="h-10 w-auto"
                src="https://doe.iitm.ac.in/wp-content/uploads/2021/06/245-2451831_iit-madras-logo.png"
                alt="IIT Madras Logo"
              />
              <motion.span
                className="ml-3 text-xl font-bold text-iitm-maroon hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                InstiGPT
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:ml-6 space-x-8">
            {["Chat", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1, color: "#800000" }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-iitm-maroon px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-iitm-maroon hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-iitm-maroon"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Chat", "About", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 0.9, color: "#800000" }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-iitm-maroon block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
