import Banner from "./profilebanner";
import ProfileSection from "./ProfileSection";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Profile = () => {
  
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
};

export default Profile;