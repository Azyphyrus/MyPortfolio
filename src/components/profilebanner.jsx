import React from 'react';
import styled from 'styled-components';
import '@/stars.css';
import '@/general.css';

const sharedClasses = {
  zincBackground: 'bg-zinc-800',
  zincText: 'text-zinc-300',
  zincAccent: 'bg-zinc-700',
  zincOverlay: 'bg-zinc-900/40',
};

const ProfileTitle = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: white;
`;

const Banner = () => {
  return (
    <div>
      <div className="min-h-screen overflow-hidden relative border border-black border-opacity-60 bg-black bg-opacity-60">
        <div className="bg-animation absolute inset-0 z-0">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        
  <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-auto min-h-screen lg:h-screen">
      {/* Left: Profile Image */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Profile Circle */}
          <div className="w-80 h-80 overflow-hidden border-transparent border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
            <img
              alt="Azer Sagucio"
              className="w-full h-full object-cover object-top"
              src="/images/Portprofile.png"
            />
          </div>

          {/* Decorative Pulses */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse opacity-20"></div>
        </div>
      </div>
      {/* Right: Text content */}
      <div className="text-center lg:text-left">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          What’s out there?
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Azer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Sagucio
          </span>
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
          <span className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-full text-sm border border-slate-600">
            Full-Stack Developer
          </span>
          <span className="px-3 py-1 bg-slate-700/50 text-purple-300 rounded-full text-sm border border-slate-600">
            Software Engineer
          </span>
        </div>

        {/* Quote */}
        <p className="text-xl text-slate-300 mb-8 italic">
          "Build Solutions, One Line at a Time."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="whitespace-nowrap px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap px-8 py-4 border-2 border-slate-400 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 hover:border-slate-300 transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <svg
            className="w-6 h-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

      </div>
    </div>

      </div>
    </div>
  );
};

export default Banner;
