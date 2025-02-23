import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto bg-gradient-to-r from-purple-600 to-pink-500 text-white flex justify-between items-center px-12 h-20 shadow-lg">
        <a href="/" className="font-bold text-2xl tracking-wide  text-pink-400">FAVOUR E. MOMODU</a>
        
       
        <ul className="hidden md:flex gap-12 cursor-pointer">
          {["about", "skill", "portfolio", "resume"].map((item) => (
            <li key={item} className="hover:text-purple-200 transition-colors duration-300">
              <Link to={item} smooth={true} offset={-70} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

       
        <div onClick={toggleNav} className="md:hidden text-white cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>


        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gradient-to-b from-purple-900 to-pink-800 z-40 flex flex-col items-center justify-center"
        >
          <ul className="font-semibold text-4xl space-y-8 text-center">
            {["about", "skill", "portfolio", "resume"].map((item) => (
              <li key={item}>
                <Link to={item} onClick={closeNav} smooth={true} offset={-70} duration={500} className="hover:text-pink-300 transition-colors duration-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
