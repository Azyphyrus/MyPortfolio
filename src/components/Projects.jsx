import React from "react";
import { RiGithubLine, RiExternalLinkLine, RiArrowRightLine } from "react-icons/ri";

const projects = [
  {
    title: "Meals on Wheels",
    description: "Created a web application to assist elderly individuals with ordering and managing meal deliveries. The platform features an intuitive interface for browsing meals, placing orders, and tracking deliveries, while providing administrators with tools to manage meals, orders, and delivery staff effectively.",
    image: "/images/dea.jpg",
    tags: ["JSP", "CSS", "Bootstrap", "Javascript", "MySql", "Spring Framework (Java)"],
    github: "#",
    live: "#"
  },
  {
    title: "DoBu Martial Arts",
    description: "This project is a comprehensive platform designed for managing and promoting martial arts classes. It features a user-friendly interface for students and instructors, and class scheduling.",
    image: "/images/dobu.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
    title: "ABC Cars Used Car Sales Portal",
    description: "Created a web platform for ABC Cars to streamline used car sales with features for listing, searching, and booking test drives, using Spring Framework and MySQL for a robust, scalable solution.",
    image: "/images/abc.jpg",
    tags: ["JSP", "CSS", "JavaScript", "Spring Framework (Java)"],
    github: "#",
    live: "#"
  },
  {
    title: "Enomy-Finances Modernization",
    description: "Upgraded Enomy-Finances' system from centralized servers to a web-based application, improving tools for currency conversion, savings, and investment planning while enhancing data management and security.",
    image: "/images/enomy.jpg",
    tags: ["JSP", "CSS", "JavaScript", "Spring Framework (Java)"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-[1.02]">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-4 right-4 flex gap-2">
                <a href={project.github} className="w-10 h-10 flex items-center justify-center bg-slate-900/80 text-white rounded-full hover:bg-slate-800 transition-colors duration-300">
                  <RiGithubLine />
                </a>
                <a href={project.live} className="w-10 h-10 flex items-center justify-center bg-slate-900/80 text-white rounded-full hover:bg-slate-800 transition-colors duration-300">
                  <RiExternalLinkLine />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800 text-blue-300 rounded-full text-sm border border-slate-700">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          View All Projects <RiArrowRightLine />
        </a>
      </div>
    </div>
  );
};

export default Projects;