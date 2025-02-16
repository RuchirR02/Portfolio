import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white px-10 pt-6 md:px-20 relative">
      <span className="text-xl font-bold tracking-wide">ЯR</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        <li><a href="#About" className="hover:text-gray-400 transition">About</a></li>
        <li><a href="#Experience" className="hover:text-gray-400 transition">Experience</a></li>
        <li><a href="#Projects" className="hover:text-gray-400 transition">Projects</a></li>
        <li><a href="#Footer" className="hover:text-gray-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer z-50" onClick={() => setMenu(!menu)}>
        <AnimatePresence mode="wait">
          {menu ? (
            <motion.div
              key="close"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RiCloseLine size={30} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RiMenu2Line size={30} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-2/3 h-screen bg-[#465697] bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center gap-8 text-xl font-semibold md:hidden z-40"
          >
            <a href="#About" onClick={() => setMenu(false)}>About</a>
            <a href="#Experience" onClick={() => setMenu(false)}>Experience</a>
            <a href="#Projects" onClick={() => setMenu(false)}>Projects</a>
            <a href="#Footer" onClick={() => setMenu(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
