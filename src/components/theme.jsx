import React, { useState, useEffect } from "react";

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
    <label
      htmlFor="darkModeToggle"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id="darkModeToggle"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <div
        className={`w-12 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 transition duration-300 ease-in-out peer-focus:ring-4 peer-focus:ring-blue-100 dark:peer-focus:ring-slate-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 dark:border-gray-600 peer-checked:bg-slate-600`}
      ></div>
    </label>
  );
};

export default Theme;
