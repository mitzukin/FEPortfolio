import React, { useState } from "react";
import Navbar from "./navbar";
import Theme from "./theme";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { easeInOut, motion } from "framer-motion";
import Profile from "/KinProfile.png";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-3.5 py-5 transition-colors duration-500 ease-in-out border-b border-slate-300 dark:border-gray-900 md:flex lg:px-20 font-Accent bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-2">
        <Link to="/">
        <img src={Logo} alt="" className="h-[30px]" /></Link>
      </div>
      <div className="text-light-p dark:text-dark-p">
        <Navbar />
      </div>

      <div className="flex flex-row-reverse items-center gap-2 text-light-p dark:text-dark-p">
        {/* Mobile Navbar with Hamburger Button */}
        <div className="flex items-center justify-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-light-p dark:text-dark-p focus:outline-none"
          >
            <HiOutlineMenuAlt3 size={20} />
          </button>
          {isMobileMenuOpen && (
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="absolute left-0 flex flex-col w-full h-screen gap-5 px-3 pt-5 bg-background-light top-16 dark:bg-background-dark"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-5"
              >
                <img src={Profile} alt="" className="h-[50px] w-[50px]" />
                <div>
                  <h1 className="text-Darkblue">Jason Kean Tajor</h1>
                  <p className="text-xs font-light dark:text-dark-s">
                    Aspiring to be a Webdeveloper
                  </p>
                </div>
              </motion.div>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="py-5 border-b dark:border-slate-900"
              >
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="py-5 border-b dark:border-slate-900"
              >
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="py-5 border-b dark:border-slate-900"
              >
                <Link to="/work " onClick={toggleMobileMenu}>
                  Works
                </Link>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="py-5 border-b dark:border-slate-900"
              >
                <Link to="/contact " onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </motion.li>
            
            </motion.ul>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Theme />
          <Link
            to="/contact"
            className="absolute hidden pl-5 text-xs border-l border-gray-500 right-32 lg:flex"
          >
            Contact Me!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
