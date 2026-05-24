import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaSun, FaMoon } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-afkhami", icon: FaLinkedin },
  { name: "Github", url: "https://github.com/danielafkhami", icon: FaGithub },
  { name: "Instagram", url: "https://www.instagram.com/daniel.afkhami", icon: FaInstagram },
  { name: "Email", url: "mailto:dan.afkhami@gmail.com", icon: FaEnvelope },
];

export const Hero = () => {

    const [isDarkMode, setDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem("theme")
      return savedTheme ? savedTheme === "dark" : true
    });

    useEffect(() => {
      document.body.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode])

    return (
      <section className = "min-h-screen flex flex-col justify-center items-center relative font-sans">

        <button 
          onClick = {() => setDarkMode(!isDarkMode)}
          className = "absolute top-6 right-6 p-4 rounded-xl bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-transform cursor-pointer"
          >
          { isDarkMode ? <FaSun className="text-amber-400 text-xl" /> : <FaMoon className="text-slate-800 text-xl" /> }
        </button>

        <div className = "text-center flex flex-col gap-4">

          <h1 className = "text-4xl sm:text-6xl md:text-7xl font-bold flex flex-row justify-center gap-2 md:gap-4 font-mono [word-spacing:-10px]">
            <span className="text-green-600 dark:text-green-500 select-none">~$</span>

            <TypeAnimation sequence={[400, "Daniel Afkhami"]}
            wrapper = "span"
            speed = {20}
            repeat={0}
            />

          </h1>

          <p className = "text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
            Honors Math + CS @ Rutgers University
          </p>

          <nav className = "text-small sm:text-base md:text-lg text-sky-600 dark:text-sky-400 font-medium flex flex-wrap gap-6 md:gap-12 justify-center mt-6 md:mt-10 px-4">
            
            {SOCIAL_LINKS.map((link) => {

              const isExternal = link.url.startsWith("http");
              
              return (
                <a
                  key={link.name}
                  href = {link.url}
                  target = { isExternal ? "_blank" : undefined }
                  rel = { isExternal ? "noopener noreferrer" : undefined }
                  className="flex flex-row gap-2 items-center hover:opacity-80"
                >
                <link.icon /> {link.name}
              </a>
              );
              
            })}

          </nav>

        </div>
      </section>
    )
}