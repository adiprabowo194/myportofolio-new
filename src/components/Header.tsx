import { useState } from "react";
import Hero from "./Hero";
import Work from "./Work";
import { motion } from "framer-motion";
import About from "./About";
import Footer from "./Footer";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <motion.header
        className="sticky top-0 w-full bg-white z-50 flex items-center md:divide-y-0"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        <div className="flex justify-between items-center h-[60px] container mx-auto py-2 px-4 relative z-[60]">
          <a
            href="/"
            className={`text-4xl font-bold hover:text-blue-400 ${
              isMenuOpen ? "text-white" : "text-gray-800"
            } md:text-gray-800`}
          >
            Adi'Prab
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-end w-2/4 text-lg font-medium">
            <ul className="flex space-x-2 text-black">
              <li className="px-3 text-blue-400 font-bold h-[30px]">
                <a href="/">Home</a>
              </li>
              <li className="px-3 hover:text-blue-400 h-[30px]">
                <a href="/#work">Work</a>
              </li>
              <li className="px-3 hover:text-blue-400 h-[30px]">
                <a href="/#about">About</a>
              </li>
              <li className="px-3 hover:text-blue-400 h-[30px]">
                <a href="/#resume">Resume</a>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className={`hamburger-menu text-2xl md:hidden relative z-[70] ${
              isMenuOpen ? "text-white" : "text-gray-600"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-0 left-0 w-full h-screen bg-slate-800 text-white divide-y divide-gray-700 md:hidden overflow-y-auto z-[55]">
            <ul className="flex flex-col text-lg font-medium pt-[60px]">
              <li className="px-4 py-3 hover:bg-slate-700">
                <a href="/" onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-slate-700">
                <a href="/#work" onClick={toggleMenu}>
                  Work
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-slate-700">
                <a href="/#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li className="px-4 py-3 hover:bg-slate-700">
                <a href="/#resume" onClick={toggleMenu}>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </motion.header>
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default Header;
