import React from 'react';

import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ProfileSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – Intro + Contact + Socials */}
        <div>
          {/* Header */}
          <h2 className="text-4xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Azer
            </span>
          </h2>

          {/* Short Bio */}
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a software engineer who aims to become skilled in solving
              tough problems and working on exciting projects.
            </p>
            <p>
              I'm passionate about technology and innovation. I want to use my
              skills to build solutions that make a real difference, like
              improving user experiences, making systems run better, or creating
              new software that changes industries.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg">
                <FaPhone className="text-blue-400 text-xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-medium">+639455964133</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-lg">
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium">azersagucio@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Azyphyrus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/azer-sagucio-747672323"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/azy.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – About Me Card */}
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
                applications that are both intuitive and efficient. My focus is
                on developing user-friendly interfaces that provide an easy
                experience for all users.
              </p>
              <p>
                I ensure that technology is approachable and easy to navigate,
                while also prioritizing a polished, professional back-end for
                smooth performance.
              </p>
              <p>
                By integrating thoughtful design with strong technical
                foundations, I aim to build solutions that are not only
                accessible but also high-performing. My goal is to craft digital
                experiences that balance ease of use with technical excellence,
                delivering applications that are reliable, engaging, and
                effective for a wide range of users.
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
      </div>
    </div>
  );
};

export default ProfileSection;