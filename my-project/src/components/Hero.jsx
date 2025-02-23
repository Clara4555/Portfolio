import React from "react";
import profilepic from "../assets/Images/clara.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { Link } from "react-scroll";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="  mt-24 max-w-[1200px] mx-auto px-6 sm:px-12 relative overflow-hidden" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-12">
   
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
         
          <TypeAnimation
            sequence={[
              "React Developer",
              1500,
              "Social Media Manager",
              1500,
              "Digital Marketer",
              1500,
              "Data Analyst",
              1500,
            ]}
            wrapper="p"
            speed={50}
            repeat={Infinity}
            className="font-bold text-white text-xl sm:text-3xl md:text-5xl italic mb-4"
          />

     
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white sm:text-5xl text-4xl md:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-pink-500">FAVOUR E. MOMODU</span>
          </motion.p>

  
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white sm:max-w-[450px] mx-auto md:mx-0 sm:text-xl text-base mb-6"
          >
         With 2 years in tech, I specialize in building high-performance web applications using modern front-end technologies like React. Additionally, with 1 year of experience in social media management and digital marketing, I help brands grow their online presence through strategic campaigns and data-driven engagement.
          </motion.p>

        
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 my-4 md:mb-0"
          >
            
            <div className="flex flex-col sm:flex-row items-center gap-6 my-4 md:mb-0">

  <button
  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
  className="z-10 cursor-pointer font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-xl w-full sm:w-auto text-lg hover-effect"
>
  Hire Me 🚀
</button>

<button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1jJjryfNeaJxLDyR7ZaBf1Myo1ZFCA4U0";
    link.setAttribute("download", "Favour_Momodu_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="z-10 cursor-pointer font-bold text-white bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-3 rounded-xl w-full sm:w-auto text-lg hover-effect"
>
  Download CV 📄
</button>

</div>


            
            <div className="flex gap-6 flex-row text-4xl md:text-5xl text-white  z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Clara4555" className="bg-gradient-to-r from-purple-600 to-pink-500">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/techyfavour/" className="bg-gradient-to-r from-purple-600 to-pink-500">
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/favourcryp.sofwareengineer/" className="bg-gradient-to-r from-purple-600 to-pink-500">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
  src={profilepic}
  className="w-[250px] sm:w-[300px] md:w-[400px] border-4 border-pink-500 shadow-lg hover-effect" // ✅ Added "hover-effect"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
/>
      </div>

    
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row  justify-center items-center py-12 md:py-24  md:px-0 gap-4 text-5xl md:text-7xl"
      >
        <p className="text-white text-2xl md:text-4xl">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

     
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
