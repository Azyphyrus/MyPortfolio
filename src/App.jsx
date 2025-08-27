import React from "react";
import "./App.css";
import Banner from "@/components/profilebanner";
import ProfileSection from "@/components/ProfileSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function App() {
  return (
    <div className="text-white">
      {/* Full-screen Banner */}
      <section className="relative min-h-max items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <Banner />
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-slate-800 items-center">
        <div className="max-w-7xl px-1 mx-auto">
          <ProfileSection />
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 items-center justify-center bg-slate-900 min-h-screen">
        <div className="max-w-6xl px-8 mx-auto">
          <Skills />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-800 items-center">
        <div className="max-w-6xl px-8 mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Me */}
      <section id="contact" className="py-20 bg-slate-900 items-center">
        <div className="max-w-6xl px-8 mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
