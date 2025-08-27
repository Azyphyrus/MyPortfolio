import React, { useState } from "react";
import "./App.css";
import Sidenav from "@/components/Sidenav";

// Import your section components
import Profile from "@/components/Profile";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "Profile":
        return <Profile />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidenav setActiveSection={setActiveSection} />
      <main className="flex-1 p-4">{renderSection()}</main>
    </div>
  );
}

export default App;
