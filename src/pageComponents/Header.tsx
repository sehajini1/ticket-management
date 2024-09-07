import { MoonIcon, SunIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Header(){
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
    return(
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 bg-background shadow-md opacity-100">
        <h1 className="text-[1.3rem]  font-black text-foreground tracking-[.2rem] ">
          Ticket Management System
        </h1>
        <div className="flex items-center space-x-3">
          <span className="text-[0.8rem] font-medium text-gray-700 dark:text-gray-300">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none bg-gray-300 dark:bg-gray-600"
          >
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
            />
            <span className="absolute left-1.5 top-1.4 text-gray-500 dark:text-gray-200">
              {darkMode ? (
                <MoonIcon className="w-4 h-4" />
              ) : (
                <SunIcon className="w-4 h-4" />
              )}
            </span>
          </button>
        </div>
      </header>
    );
}