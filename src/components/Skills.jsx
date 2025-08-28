import React, { useState } from "react";
import { 
  RiWindowLine, RiReactjsLine, RiCodeSSlashLine, RiPagesLine, RiCss3Line, RiJavascriptLine, 
  RiServerLine, RiNodejsLine, RiTerminalLine, RiDatabase2Line, RiDatabaseLine, RiToolsLine, 
  RiGitBranchLine, RiShipLine, RiCloudLine, RiPencilRuler2Line, RiCodeBoxLine, RiRocket2Line, RiJavaFill, RiPhpLine
} from "react-icons/ri";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  const frontendSkills = [
    { icon: <RiReactjsLine className="text-blue-400" />, label: "React" },
    { icon: <RiCodeSSlashLine className="text-blue-400" />, label: "TypeScript" },
    { icon: <RiPagesLine className="text-blue-400" />, label: "Next.js" },
    { icon: <RiCss3Line className="text-blue-400" />, label: "Tailwind CSS" },
    { icon: <RiJavascriptLine className="text-blue-400" />, label: "JavaScript" },
  ];

  const backendSkills = [
    { icon: <RiNodejsLine className="text-purple-400" />, label: "Node.js" },
    { icon: <RiTerminalLine className="text-purple-400" />, label: "Python" },
    { icon: <RiJavaFill className="text-purple-400" />, label: "Java" },
    { icon: <RiPhpLine className="text-purple-400" />, label: "PHP" },
    { icon: <RiDatabase2Line className="text-purple-400" />, label: "PostgreSQL" },
    { icon: <RiDatabaseLine className="text-purple-400" />, label: "MongoDB" },
    { icon: <RiServerLine className="text-purple-400" />, label: "Express.js" },
  ];

  const tools = [
    { icon: <RiGitBranchLine className="text-2xl text-green-400" />, label: "Git" },
    { icon: <RiShipLine className="text-2xl text-green-400" />, label: "Docker" },
    { icon: <RiCloudLine className="text-2xl text-green-400" />, label: "AWS" },
    { icon: <RiPencilRuler2Line className="text-2xl text-green-400" />, label: "Figma" },
    { icon: <RiCodeBoxLine className="text-2xl text-green-400" />, label: "VS Code" },
    { icon: <RiRocket2Line className="text-2xl text-green-400" />, label: "Postman" },
  ];

  const personalSkills = [
    {
      icon: "https://icons.veryicon.com/png/o/object/warning-icon/leadership.png",
      label: "Leadership",
      description: "I have experience leading cross-functional teams and coordinating project tasks to ensure successful delivery."
    },
    {
      icon: "https://www.svgrepo.com/show/228293/teamwork.svg",
      label: "Collaborator",
      description: "I excel at collaborating with colleagues, fostering a positive team dynamic, and contributing to a shared goal-oriented mindset."
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-512/free-communication-icon-download-in-svg-png-gif-file-formats--consulting-conversation-deliberation-discussion-hr-management-pack-business-icons-1669591.png?f=webp&w=256",
      label: "Communication",
      description: "I can clearly convey ideas, collaborate effectively, and provide constructive feedback."
    },
    {
      icon: "/images/solveproblem.png",
      label: "Problem-Solving",
      description: "I am good at identifying challenges and coming up with effective solutions. I stay calm under pressure and think through different options to solve problems efficiently."
    },
    {
      icon: "/images/logic.png",
      label: "Logical Thinking",
      description: "I can analyze situations clearly and make decisions based on facts and reasoning. I like to break problems into smaller steps to understand them better and find the best approach."
    },
        {
      icon: "/images/adaptation.png",
      label: "Adaptability",
      description: "I can adjust quickly to new situations, tasks, or changes in the workplace. I stay flexible, learn fast, and can handle unexpected challenges without losing focus."
    }
  ];

  const SkillBadge = ({ icon, label }) => (
    <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-full hover:bg-slate-700 transition-all duration-300 cursor-pointer">
      {icon}
      <span className="text-white text-sm font-medium">{label}</span>
    </div>
  );

  const PersonalSkillCard = ({ icon, label, description }) => (
    <div className="p-4 border border-slate-600 rounded-lg text-center bg-slate-800 text-white">
      <div className="mb-2">
        <img src={icon} alt={`${label}-icon`} className="w-11 h-11 mx-auto" />
      </div>
      <h3 className="font-semibold text-lg">{label}</h3>
      <p className="text-sm text-slate-400 mt-1">{description}</p>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-6 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          I'm proficient in a wide range of skills that help me build amazing digital experiences
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded-full font-medium border border-white ${activeTab === "technical" ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300" 
      : "bg-slate-700 text-slate-300"}`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Skills
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium border border-white ${activeTab === "personal" ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300" 
      : "bg-slate-700 text-slate-300"}`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Skills
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "technical" ? (
        <>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Frontend */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-lg">
                  <RiWindowLine className="text-blue-400" />
                </div>
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, idx) => (
                  <SkillBadge key={idx} icon={skill.icon} label={skill.label} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded-lg">
                  <RiServerLine className="text-purple-400" />
                </div>
                Backend Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, idx) => (
                  <SkillBadge key={idx} icon={skill.icon} label={skill.label} />
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 rounded-lg">
                <RiToolsLine className="text-green-400" />
              </div>
              Tools &amp; Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700 transition-all duration-300 border border-slate-600 hover:border-slate-500 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    {tool.icon}
                  </div>
                  <p className="text-white text-sm font-medium">{tool.label}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Personal Skills
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalSkills.map((skill, idx) => (
            <PersonalSkillCard 
              key={idx} 
              icon={skill.icon} 
              label={skill.label} 
              description={skill.description} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;
