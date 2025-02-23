import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projectCategories } from "./Portfolio"; // ✅ Importing project categories correctly

// Dynamic Stats Data
const stats = [
  { label: "Projects Completed", key: "projects", suffix: "+", dynamic: true },
  { label: "Years of Experience", key: "experience", suffix: "+", value: 2 },
  { label: "Happy Clients", key: "clients", suffix: "+", value: 30 },
];

const Contact = () => {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    setProjectCount(projectCategories["Frontend Projects"].length);
  }, []);

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-16" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center gap-12">
          {/* About Me Section */}
          <div className="text-white">
            <h3 className="text-4xl font-semibold mb-5 text-center md:text-left">
              About <span className="text-purple-400">Me</span>
            </h3>
            <p className="leading-7 text-white md:text-lg text-center md:text-left">
              I am a passionate software engineer with expertise in Frontend Development, UI/UX Design, and Backend Engineering.
              With hands-on experience at **EduSchola, Scholarly, and NIIT Ajah**, I specialize in crafting dynamic web applications and managing digital brand strategies.
              My work bridges technology and user experience, delivering seamless and engaging solutions.
            </p>

            {/* Stats Section with Animated Counting */}
            <div className="flex mt-10 items-center justify-center md:justify-start gap-8 flex-wrap">
              {stats.map((stat, index) => (
                <AnimatedStat key={index} stat={stat} index={index} projectCount={projectCount} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://getform.io/f/bllyynnb"
            method="POST"
            className="w-full p-8 md:p-10 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-black border border-purple-500/50 hover:border-purple-400 transition-all duration-300"
            id="form"
          >
            <p className="text-gray-200 font-bold text-xl text-center mb-4">
              Let’s <span className="text-purple-400">Connect!</span>
            </p>

            <input
              type="text"
              id="name"
              placeholder="Your Name..."
              name="name"
              className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 bg-black text-white focus:ring-2 focus:ring-purple-500"
              required
            />

            <input
              type="email"
              id="email"
              placeholder="Your Email..."
              name="email"
              className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 bg-black text-white focus:ring-2 focus:ring-purple-500"
              required
            />

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message..."
              className="mb-4 w-full rounded-md border border-purple-600 py-3 px-4 bg-black text-white focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">
              <a href="https://www.linkedin.com/in/techyfavour/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={32} className="text-purple-400 hover:text-purple-600 transition-all" />
              </a>
              <a href="https://www.instagram.com/favourcryp.sofwareengineer/" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={32} className="text-purple-400 hover:text-purple-600 transition-all" />
              </a>
            </div>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

// ✅ **Animated Stat Component (Now Handles Dynamic Project Count)**
const AnimatedStat = ({ stat, index, projectCount }) => {
  const [count, setCount] = useState(0);
  const finalValue = stat.dynamic ? projectCount : stat.value; // ✅ Get dynamic project count

  useEffect(() => {
    let start = 0;
    const end = finalValue || 0;
    const duration = 2000; // 2 seconds
    const intervalTime = Math.floor(duration / (end || 1));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [finalValue]);

  return (
    <motion.div
      className="bg-gray-800/40 p-6 rounded-lg text-center w-[160px] md:w-[180px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3 }}
    >
      <h3 className="md:text-4xl text-2xl font-semibold text-white">
        {count}
        <span className="text-purple-400">{stat.suffix}</span>
      </h3>
      <p className="text-xs md:text-base text-gray-300">{stat.label}</p>
    </motion.div>
  );
};

export default Contact;
