import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    document.body.classList.toggle("dark", newMode);
    console.log("Dark mode toggled:", newMode);
  };

  return (
    <div
      className="relative inline-flex items-center cursor-pointer"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <MdLightMode className="text-gray-300 dark:text-gray-700" size={25} />
      ) : (
        <CiLight className="text-light-primary" size={25}></CiLight>
      )}
    </div>
  );
};

export default Theme;
