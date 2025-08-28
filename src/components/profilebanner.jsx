import React, { useEffect, useState } from 'react';
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
  const [copies, setCopies] = useState(1);
  const [offsets, setOffsets] = useState([]);

useEffect(() => {
  const updateCopies = () => {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    if (vw <= 1440) {
      // Small screens: only 1 copy, no offset
      setCopies(1);
      setOffsets([{ top: 0, left: 0 }]);
      return;
    }

    // For large screens: calculate duplicates
    const baseHeight = 800;
    const baseWidth = 1440;

    const verticalCopies = Math.ceil(vh / baseHeight);
    const horizontalCopies = Math.ceil(vw / baseWidth);
    const totalCopies = verticalCopies * horizontalCopies;

    setCopies(totalCopies);

    // Generate random offsets for large screens
    const newOffsets = Array.from({ length: totalCopies }).map(() => ({
      top: Math.floor(Math.random() * vh) - vh / 5,
      left: Math.floor(Math.random() * vw) - vw / 5,
    }));
    setOffsets(newOffsets);
  };

  window.addEventListener('resize', updateCopies);
  updateCopies(); // initial calculation

  return () => window.removeEventListener('resize', updateCopies);
}, []);

  return (
    <div>
      <div className="min-h-screen overflow-hidden relative border border-black border-opacity-60 bg-black bg-opacity-60">
        {/* Dynamic Star Layers with offsets */}
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            className="bg-animation absolute z-0"
            style={{
              top: offsets[i]?.top ?? 0,
              left: offsets[i]?.left ?? 0,
              width: '100%',
              height: '100%',
            }}
          >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
          </div>
        ))}

  <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 items-center h-auto min-h-screen lg:h-screen">
          {/* Left: Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 overflow-hidden border-transparent border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
                <img
                  alt="Azer Sagucio"
                  className="w-full h-full object-cover object-top"
                  src="/images/Portprofile.png"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse opacity-20"></div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="text-center lg:text-left">
            <div className=" hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 ">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              What’s out there?
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Azer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Sagucio
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <span className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-full text-sm border border-slate-600">
                Full-Stack Developer
              </span>
              <span className="px-3 py-1 bg-slate-700/50 text-purple-300 rounded-full text-sm border border-slate-600">
                Software Engineer
              </span>
            </div>

            <p className="text-xl text-slate-300 mb-8 italic">
              "Build Solutions, One Line at a Time."
            </p>

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


          <button
            type="button"
            onClick={() =>
              document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block cursor-pointer bg-transparent border-none"
            aria-label="Scroll to profile section"
          >
            <svg
              className="w-6 h-6 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;