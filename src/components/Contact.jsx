import React, { useRef, useState } from "react";
import {
  RiPhoneLine,
  RiMailLine,
  RiMapPinLine,
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";


const Contact = () => {
      const [charCount, setCharCount] = useState(0);
      const form = useRef();
      const [loading, setLoading] = useState(false);
      const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .sendForm(
          "service_80tyes5",
          "template_bmla7yo",
          form.current,
          "tvbA3i1p0z5I_DiMU"
        )
        .then(
          (result) => {
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: "Thanks for reaching out — I’ll get back to you soon.",
              confirmButtonColor: "#3b82f6",
            });
            setLoading(false);
            form.current.reset();
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong. Please try again later.",
              confirmButtonColor: "#ef4444", // Tailwind red-500
            });
            setLoading(false);
          }
        );
    };
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Touch
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Reach out with your questions or ideas—I am here to help and collaborate!
        </p>
      </div>

      {/* Grid container */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question, want to discuss a project, or just want
            to say hello, feel free to reach out!
          </p>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg">
                <RiPhoneLine className="text-blue-400 text-xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-medium">+639455964133</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-lg">
                <RiMailLine className="text-purple-400 text-xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium">azersagucio@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 rounded-lg">
                <RiMapPinLine className="text-green-400 text-xl" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Philippines</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Azyphyrus"
              className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-500 cursor-pointer"
            >
              <RiGithubFill className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/azer-sagucio-747672323"
              className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-500 cursor-pointer"
            >
              <RiLinkedinFill className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/azy.fi"
              className="w-12 h-12 flex items-center justify-center bg-slate-800 text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-500 cursor-pointer"
            >
              <RiInstagramLine className="text-xl" />
            </a>
          </div>
        </div>

      {/* Contact Form */}
      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Project Discussion"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={500}
            rows={5}
            placeholder="Tell me about your project..."
            onChange={(e) => setCharCount(e.target.value.length)}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
          ></textarea>
          <p className="text-slate-400 text-xs mt-1">{charCount}/500 characters</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="whitespace-nowrap w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"} <RiSendPlaneLine />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
