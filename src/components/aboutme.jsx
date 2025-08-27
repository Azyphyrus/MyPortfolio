import React from 'react';

export default function aboutme() {
    return (
        <div className="h-auto text-white mt-6 flex items-center justify-center">
        <div className="w-full flex bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-2/3 pr-6">
            <h2 className="text-yellow-400 text-sm font-semibold uppercase">My Introduction</h2>
            <h1 className="text-3xl font-bold mt-2">About Me</h1>
            
            <div className="mt-6 space-y-6">
              <Benefit
                title="Designing with Purpose: A Full-Stack Developer’s Approach"
                description="As a Full-Stack Developer, I am dedicated to creating web applications that are both intuitive and efficient. My focus is on developing simple, user-friendly interfaces that provide a seamless experience for all users. I ensure that technology is approachable and easy to navigate, while also prioritizing a robust and optimized back-end for smooth performance."
                description2="By integrating thoughtful design with strong technical foundations, I aim to build solutions that are not only accessible but also high-performing. My goal is to craft digital experiences that balance ease of use with technical excellence, delivering applications that are reliable, engaging, and effective for a wide range of users."
              />
            </div>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <img src="https://cdn.idle-mmo.com/page-backgrounds/default.jpg" alt="Membership Benefits" className="rounded-lg h-full" />
          </div>
        </div>
      </div>
    );
  }
  
  function Benefit({title, description, description2 }) {
    return (
      <div className="flex items-start space-x-4">
        <div>
          <h3 className="text-lg font-semibold flex items-center">
            {title}
          </h3>
          <p className="text-gray-100">{description}</p>
          <br />
          <p className="text-gray-100">{description2}</p>
          <button type="button" class="inline-block rounded px-4 py-2 bg-gradient-to-b font-bold bg-indigo-600 hover:bg-indigo-500 text-sm my-4" x-on:click="$dispatch('open-modal', 'tokens-purchase')">
            Download CV
        </button>
        </div>
      </div>
    );
  }