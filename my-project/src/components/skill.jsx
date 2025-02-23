import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { AiOutlineInstagram, AiOutlineLineChart, AiOutlineBarChart } from "react-icons/ai";
import { FaFacebookSquare, FaGoogle, FaChartPie, FaMobileAlt, FaLaravel } from "react-icons/fa";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <DiBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "React Native", icon: <FaMobileAlt className="text-purple-400" /> },
    ],
  },
  {
    category: "Fullstack & Version Control",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-600" /> }, 
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
  {
    category: "Social Media & Digital Marketing",
    technologies: [
      { name: "Instagram Marketing", icon: <AiOutlineInstagram className="text-pink-500" /> },
      { name: "Facebook Ads", icon: <FaFacebookSquare className="text-blue-600" /> },
      { name: "Google Ads", icon: <FaGoogle className="text-red-500" /> },
    ],
  },
  {
    category: "Data Analysis",
    technologies: [
      { name: "Google Analytics", icon: <AiOutlineBarChart className="text-yellow-500" /> },
      { name: "SEO & Performance", icon: <AiOutlineLineChart className="text-blue-400" /> },
      { name: "Marketing Insights", icon: <FaChartPie className="text-purple-500" /> },
    ],
  },
];

const Skill = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12" id="skill">
      <Reveal>
       
        <h2 className="text-4xl font-bold text-center text-white mb-6">My Skills</h2>
        <p className="text-center text-lg text-pink-400 mb-12">
          I specialize in Frontend Development, Fullstack, Social Media Growth, Digital Marketing, and Data Analysis.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-800 p-6 rounded-2xl bg-purple-900/20 shadow-lg transition transform hover:scale-105 hover-effect shake-effect"
            >
              <h3 className="text-2xl font-semibold text-center text-pink-400 mb-4">{skill.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-2">
                    <span className="text-4xl">{tech.icon}</span>
                    <span className="text-white text-lg">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skill;
