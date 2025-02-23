import React, { useState } from "react";
import scholarlyImg from "../assets/images/project-1.jpg";
import eduscholaImg from "../assets/images/project-2.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

export const projectCategories = {
  "Frontend Projects": [
    {
      img: scholarlyImg,
      title: "Scholarly Admin Panel",
      description: "Admin dashboard built with React for Scholarly.",
      links: {
        site: "https://scholarly-admin.vercel.app/",
        github: "#",
      },
    },
    {
      img: eduscholaImg,
      title: "EduSchola Platform",
      description: "Educational platform developed with fullstack technologies.",
      links: {
        site: "https://eduschola.smakktechnologies.com/",
        github: "#",
      },
    },
  ],
  "Social Media & Digital Marketing": [],
  "Data Analytics": [],
  "Freelance Work":[],
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend Projects");

  return (
    <div className="max-w-5xl mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-4xl font-bold text-white text-center mb-8">My Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(projectCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-purple-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      
      <div>
        {projectCategories[activeCategory].length > 0 ? (
          projectCategories[activeCategory].map((project, index) => (
            <Reveal key={index}>
           <div
  key={index}
  className={`flex flex-col md:flex-row ${
    index % 2 !== 0 ? "md:flex-row-reverse" : ""
  } mb-12 bg-purple-900/20 rounded-lg shadow-md p-6 hover-effect`}
>
  <div className="w-full md:w-1/2 p-4">
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-pink-400 mb-4">{project.title}</h3>
    <p className="text-white mb-4">{project.description}</p>
    <div className="flex space-x-4">
      <a
        href={project.links.site}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-pink-500 transition duration-300"
      >
        View Site
      </a>
      <a
        href={project.links.github}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-pink-500 transition duration-300 flex items-center"
      >
        <AiOutlineGithub className="mr-2" /> GitHub
      </a>
    </div>
  </div>
</div>

            </Reveal>
          ))
        ) : (
          <p className="text-center text-gray-400">No projects added yet for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
