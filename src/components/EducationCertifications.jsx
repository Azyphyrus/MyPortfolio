import { useState } from "react";
import { 
  RiGraduationCapLine, 
  RiBookOpenLine,
  RiGoogleFill,
  RiMicrosoftFill,
  RiCheckLine
} from "react-icons/ri";

export default function EducationCertifications() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My academic background and professional certifications that fuel my expertise
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800/50 rounded-full p-1 border border-slate-700">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "education"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 duration-300"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === "certifications"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 duration-300"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Certifications
          </button>
        </div>
      </div>

      {/* Education Section */}
      {activeTab === "education" && (
        <div className="space-y-8">
          {/* Master’s Degree */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div className="flex items-start">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-xl mr-6 flex-shrink-0">
                  <RiGraduationCapLine className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Applied Degree in Software Engineering</h3>
                  <p className="text-blue-400 font-semibold mb-2">Lithan EduClaaS</p>
                  <p className="text-gray-400 text-sm">Singapore</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  2023 - Present
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Comprehensive applied degree program focusing on practical software engineering skills and industry-relevant technologies.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Algorithms", "Data Structures", "Machine Learning", "Database Systems", "Software Engineering", "Computer Networks"].map(skill => (
                <span key={skill} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30">{skill}</span>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">End-to-end SDLC project from design to deployment</p>
              </div>
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Agile teamwork with sprint planning and task tracking</p>
              </div>
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Real-world app solving business workflow challenges</p>
              </div>
            </div>
          </div>

          {/* Bachelor’s Degree */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div className="flex items-start">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 rounded-xl mr-6 flex-shrink-0">
                  <RiBookOpenLine className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Information Technology - Software Engineering</h3>
                  <p className="text-purple-400 font-semibold mb-2">First City Providential College</p>
                  <p className="text-gray-400 text-sm">Philippines</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                  2023 - Present
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bachelor's degree program specializing in software engineering with focus on modern development practices and methodologies.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Programming", "Web Development", "Statistics", "Linear Algebra", "Discrete Mathematics", "Operating Systems"].map(skill => (
                <span key={skill} className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30">{skill}</span>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">End-to-end SDLC project from design to deployment</p>
              </div>
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Agile teamwork with sprint planning and task tracking</p>
              </div>
              <div className="flex items-start">
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Real-world app solving business workflow challenges</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Section */}
      {activeTab === "certifications" && (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: <RiMicrosoftFill className="text-2xl text-blue-400" />, title: "Mastering in Power Apps (v27Nov2024)", org: "Microsoft", color: "blue", valid: "2025", skills: ["Comprehensive instructor-led training focused on mastering Microsoft Power Apps for building business applications."] },
            { icon: <RiMicrosoftFill className="text-2xl text-green-400" />, title: "Power BI - Turning Data into Actionable Insights (v1Dec2024)", org: "Microsoft", color: "green", valid: "2024", skills: ["Instructor-led training on transforming raw data into meaningful insights using Microsoft Power BI."] },
            { icon: <RiMicrosoftFill className="text-2xl text-purple-400" />, title: "Mastering Power Automate (v24Nov2024)", org: "Microsoft", color: "purple", valid: "2024", skills: ["Advanced instructor-led training on automating business processes using Microsoft Power Automate."] },
            { icon: <RiGoogleFill className="text-2xl text-yellow-400" />, title: "GDG Cloud Next Extended Manila 2025", org: "Google Developer Group", color: "blue", valid: "2024", skills: ["Extended event covering Google Cloud innovations, AI/ML technologies, and modern web."] },
          ].map((cert, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 flex items-center justify-center bg-${cert.color}-500/20 rounded-xl mr-6 flex-shrink-0`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className={`text-${cert.color}-400 font-semibold mb-2`}>{cert.org}</p>
                  <span className={`inline-block bg-${cert.color}-500/20 text-${cert.color}-300 px-3 py-1 rounded-full text-sm`}>{cert.valid}</span>
                </div>
              </div>
              <div className="space-y-2">
                {cert.skills.map((skill, j) => (
                  <div key={j} className="flex items-start">
                    <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
