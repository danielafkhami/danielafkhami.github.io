import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileLines } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { TerminalWindow } from "@/components/TerminalWindow";

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-afkhami", icon: FaLinkedin },
  { name: "GitHub", url: "https://github.com/danielafkhami", icon: FaGithub },
  { name: "Instagram", url: "https://www.instagram.com/daniel.afkhami", icon: FaInstagram },
  { name: "Email", url: "mailto:dan.afkhami@gmail.com", icon: FaEnvelope },
];

export const Hero = () => {
  
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 font-mono">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

        <TerminalWindow 
          className="w-fit max-w-full mx-auto"
          contentClassName="md:p-10"
        >
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">

            <div className="flex flex-wrap items-center gap-1 text-sm sm:text-base md:text-lg">
              <span className="text-emerald-500 dark:text-emerald-400">daniel@rutgers</span>
              <span className="text-slate-500">:</span>
              <span className="text-yellow-500 dark:text-yellow-400">~</span>
              <span className="text-slate-600 dark:text-slate-300">$</span>
              <TypeAnimation
                sequence={[600, "whoami", 300, () => setRevealed(true)]}
                wrapper="span"
                speed={1}
                repeat={0}
                className="text-slate-600 dark:text-slate-300 inline-block pl-1"
              />
            </div>

            <h1
              className={`text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight pt-1 whitespace-nowrap ${
                revealed ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Daniel Afkhami
            </h1>
          </div>

          <p
            className={`mt-4 pt-4 sm:mt-5 sm:pt-5 md:mt-6 md:pt-6 border-t border-slate-200 dark:border-white/10 
              text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-bold [word-spacing:-3px] ${
              revealed ? "animate-fade-in-up [animation-delay:150ms]" : "opacity-0"
            }`}
          >
            Honors Math + CS @{" "}
            <a
              href="https://honorscollege.rutgers.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-sky-600 dark:text-sky-400 hover:opacity-80 transition-opacity"
            >
              Rutgers University
            </a>
          </p>
        </TerminalWindow>

        <nav
          className={`w-full flex flex-wrap items-center justify-between font-bold ${
            revealed ? "animate-fade-in-up [animation-delay:300ms]" : "opacity-0"
          }`}
        >

         <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 items-center text-base sm:text-lg md:text-xl text-sky-600 dark:text-sky-400 
            py-2 px-3 sm:py-2.5 sm:px-3.5 md:py-3 md:px-4 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 shadow-sm rounded-lg 
            hover:scale-105 active:scale-95 transform-gpu hover:opacity-80 transition-opacity transition-transform"
          >
            <FaFileLines /> Resume
          </a>

          <div className="flex flex-wrap items-center text-xl sm:text-2xl md:text-3xl text-slate-500 dark:text-slate-400 gap-5 sm:gap-7 md:gap-9">
            
            {SOCIAL_LINKS.map((link) => {

              const isExternal = link.url.startsWith("http");

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="hover:opacity-80 hover:scale-110 active:scale-90 transform-gpu transition-opacity transition-transform"
                >
                  <link.icon />
                </a>
              );
            })}

          </div>
        </nav>
      </div>
    </section>
  );
};