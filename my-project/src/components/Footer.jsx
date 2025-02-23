import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-400">FAVOUR E. MOMODU</h2>
          <p className="text-white mt-2 max-w-md">
            React Developer | Social Media Manager | Digital Marketer | Data Analyst
          </p>
        </div>

     
        <nav className="mt-6 md:mt-0">
          <ul className="flex flex-wrap gap-6 text-lg text-white">
            {["about", "portfolio", "skill", "resume", "contact"].map((item) => (
              <li key={item} className="hover:text-pink-400 transition-all">
                <Link to={item} smooth={true} offset={-70} duration={500}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        
        <div className="flex gap-6 mt-6 md:mt-0 text-3xl">
          <a href="https://github.com/Clara4555" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/techyfavour/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/favourcryp.sofwareengineer/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>

     
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-white text-sm">
        <p className="text-white"> © {new Date().getFullYear()} Favour E. Momodu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
