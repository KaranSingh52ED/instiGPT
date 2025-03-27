import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { IITMadrasProvider } from "./context/IITMadrasContext";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <IITMadrasProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </IITMadrasProvider>
  );
}

export default App;
