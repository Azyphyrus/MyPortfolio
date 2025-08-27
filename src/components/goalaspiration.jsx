import React from 'react';

const GoalAspiration = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 shadow-2xl">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>

        {/* Subtitle */}
        <h4 className="text-lg font-semibold text-blue-400 mb-4">
          Designing with Purpose: A Full-Stack Developer&apos;s Approach
        </h4>

        {/* Description */}
        <div className="space-y-4 text-slate-300">
          <p>
            As a Full-Stack Developer, I am dedicated to creating web
            applications that are both intuitive and efficient. My focus is on
            developing user-friendly interfaces that provide a seamless
            experience for all users.
          </p>
          <p>
            I ensure that technology is approachable and easy to navigate, while
            also prioritizing a polished, professional back-end for smooth
            performance.
          </p>
          <p>
            By integrating thoughtful design with strong technical foundations,
            I aim to build solutions that are not only accessible but also
            high-performing. My goal is to craft digital experiences that
            balance ease of use with technical excellence, delivering
            applications that are reliable, engaging, and effective for a wide
            range of users.
          </p>
        </div>

        {/* Button */}
        <button className="whitespace-nowrap mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
          Download CV
        </button>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
    </div>
  );
};

export default GoalAspiration;
