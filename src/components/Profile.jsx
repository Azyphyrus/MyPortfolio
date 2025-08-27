import React from "react";
import Banner from "./profilebanner";
import GoalAspiration from "./goalaspiration";
import ContactCard from "./ContactCard";

const Profile = () => {
  return (
    <div className="text-white">
      {/* Full-screen Banner */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <Banner />
      </section>

      {/* Full-screen Contact + Goal */}
      <section className="h-screen flex items-center justify-center bg-slate-800 py-20">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl px-8">
          <div className="md:w-1/2">
            <ContactCard />
          </div>
          <div className="md:w-1/2">
            <GoalAspiration />
          </div>
        </div>
      </section>

      {/* Full-screen About Me */}
      <section className="h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-6xl px-8">
        </div>
      </section>
    </div>
  );
};

export default Profile;
