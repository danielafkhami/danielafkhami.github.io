import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaSun, FaMoon } from "react-icons/fa6";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-afkhami", icon: FaLinkedin },
  { name: "Github", url: "https://github.com/danielafkhami", icon: FaGithub },
  { name: "Instagram", url: "https://www.instagram.com/daniel.afkhami", icon: FaInstagram },
  { name: "Email", url: "mailto:dan.afkhami@gmail.com", icon: FaEnvelope },
];

export const Hero = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }, [isDarkMode])

    return (
      <section className = "h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200 relative">

        <button 
          onClick = {() => setDarkMode(!isDarkMode)}
          className = "absolute top-6 right-6 p-4 rounded-xl bg-slate-200 dark:bg-slate-800 hover:scale-110 transition-transform cursor-pointer"
          >
          { isDarkMode ? <FaSun className="text-slate-200 text-xl" /> : <FaMoon className="text-slate-800 text-xl" /> }
        </button>

        <div className = "text-center flex flex-col gap-4">

          <h1 className = "text-5xl md:text-7xl font-bold">
            Daniel Afkhami
          </h1>

          <p className = "text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Honors Math + CS @ Rutgers University
          </p>

          <nav className = "text-base md:text-lg text-sky-600 dark:text-sky-400 font-medium flex flex-wrap gap-6 md:gap-12 justify-center mt-6 md:mt-10 px-4">
            
            {socialLinks.map((link) => {

              const isExternal = link.url.startsWith("http");
              
              return (
                <a
                  key={link.name}
                  href = {link.url}
                  target = { isExternal ? "_blank" : undefined }
                  rel = { isExternal ? "noopener noreferrer" : undefined }
                  className="flex flex-row gap-2 items-center"
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