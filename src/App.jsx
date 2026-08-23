import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { Hero } from '@/sections/Hero'

function App() {
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <button 
        onClick={() => setDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 z-50 p-4 rounded-xl bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-transform cursor-pointer"
      >
        { isDarkMode ? <FaSun className="text-amber-400 text-xl" /> : <FaMoon className="text-slate-800 text-xl" /> }
      </button>
      
      <Hero />
    </main>
  )
}

export default App
