import { RiBuildingLine, RiRocketLine, RiCodeSSlashLine, RiCheckLine } from "react-icons/ri";

export default function WorkExperience() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey building innovative solutions and leading development teams
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800/50 rounded-full p-1 border border-slate-700">
        <button className="px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer 
        bg-gradient-to-r from-blue-500 to-purple-600 text-white 
        hover:from-blue-600 hover:to-purple-700 
        transform hover:scale-105 duration-300">
        Professional
        </button>
          {/*
          <button className="px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer text-gray-400 hover:text-white">
            Freelance
          </button>
          */}
        </div>
      </div>

      {/* Timeline / Experiences */}
      <div className="space-y-8">
        {/* Senior Full Stack Developer */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
            <div className="flex items-start">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-xl mr-6 flex-shrink-0">
                <RiBuildingLine className="text-2xl text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Technology Associate</h3>
                <p className="text-blue-400 font-semibold mb-2">Lithan EduClaaS</p>
                <p className="text-gray-400 text-sm">Singapore</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                2024 - Present
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
            A Pan-Asia edtech platform delivering Competency Learning as a Service (CLaaS®) through work-integrated and industry-aligned training. Lithan bridges education and employment by equipping students, professionals, and enterprises with job-ready digital skills through blended learning, project-based experiences, and mentorship.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "Azure", "PHP", "MySql", "Microsoft Power Platform"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {[
              "Built CLaaS Developer features for curriculum design & AI content generation",
              "Integrated compliance frameworks and validation workflows",
              "Developed analytics dashboards to track course performance",
            ].map((point, i) => (
              <div className="flex items-start" key={i}>
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full Stack Developer 
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
            <div className="flex items-start">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 rounded-xl mr-6 flex-shrink-0">
                <RiRocketLine className="text-2xl text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-purple-400 font-semibold mb-2">StartupHub Inc</p>
                <p className="text-gray-400 text-sm">Remote</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                2020 - 2022
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Developed and maintained multiple SaaS products from concept to production. Collaborated with design and product teams to deliver user-focused solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Vue.js", "Python", "MongoDB", "Express.js", "Firebase", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {[
              "Built 3 successful SaaS products from scratch",
              "Increased user engagement by 85% through UX improvements",
              "Established automated testing reducing bugs by 70%",
            ].map((point, i) => (
              <div className="flex items-start" key={i}>
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Frontend Developer 
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
            <div className="flex items-start">
              <div className="w-16 h-16 flex items-center justify-center bg-green-500/20 rounded-xl mr-6 flex-shrink-0">
                <RiCodeSSlashLine className="text-2xl text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
                <p className="text-green-400 font-semibold mb-2">WebFlow Agency</p>
                <p className="text-gray-400 text-sm">New York, NY</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                2018 - 2020
              </span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Specialized in creating responsive, pixel-perfect websites and web applications. Worked closely with designers to bring creative visions to life.
            </p>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "React", "SASS", "jQuery"].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-slate-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            {[
              "Delivered 50+ high-quality websites for various clients",
              "Improved website performance scores by average 35%",
              "Maintained 98% client satisfaction rate",
            ].map((point, i) => (
              <div className="flex items-start" key={i}>
                <RiCheckLine className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </div>
  );
}