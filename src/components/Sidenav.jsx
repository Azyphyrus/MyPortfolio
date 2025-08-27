import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, Mail } from "lucide-react";

const Sidenav = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidenavRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Profile", id: "profile", icon: <User size={18} /> },
    { name: "Skills", id: "skills", icon: <Code size={18} /> },
    { name: "Projects", id: "projects", icon: <Briefcase size={18} /> },
    { name: "Contact", id: "contact", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <>
<Button
  className="fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 transition-all duration-300"
  onClick={toggleMenu}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu} ></div>
      )}
<nav
  ref={sidenavRef}
  className={`
    fixed top-0 h-screen w-64 bg-[rgb(28,36,52)] text-white
    transform transition-transform duration-300 ease-in-out z-50
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-5 text-center">AzyFi</h2>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="mb-4">
                <button
                  className="flex items-center w-full p-2 rounded transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  onClick={() => handleSectionChange(item.id)}
                >
                  <span className="w-6">{item.icon}</span>
                  <span className="flex-grow text-center">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidenav;
