import React from "react";
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div>
      {/* Header */}
      <h2 className="text-4xl font-bold text-white mb-6">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Azer
        </span>
      </h2>

      {/* About Section */}
      <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
        <p>
          I am a software engineer who aims to become skilled in solving tough
          problems and working on exciting projects.
        </p>
        <p>
          I'm passionate about technology and innovation. I want to use my
          skills to build solutions that make a real difference, like improving
          user experiences, making systems run better, or creating new software
          that changes industries.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-8 space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
          <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg">
            <i className="ri-phone-line text-blue-400 text-xl"></i>
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
            <i className="ri-mail-line text-purple-400 text-xl"></i>
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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaGithub className="text-xl" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaLinkedin className="text-xl" />
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-slate-700 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          <FaInstagram className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
