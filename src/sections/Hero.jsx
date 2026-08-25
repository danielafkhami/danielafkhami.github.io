import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
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
    <section className="min-h-screen flex flex-col justify-center items-center px-4 font-mono">
      <div className="flex flex-col gap-6">

        <TerminalWindow className="w-fit max-w-full mx-auto">
          <div className="flex flex-col gap-2">

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
              className={`text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight pt-1 whitespace-nowrap transition-all duration-500 ease-out ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              Daniel Afkhami
            </h1>
          </div>

          <p
            className={`mt-6 pt-6 border-t border-slate-200 dark:border-white/10 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-bold [word-spacing:-3px] transition-all duration-500 ease-out delay-150 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
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
          className={`w-full flex flex-wrap items-center justify-center text-sm sm:text-base text-sky-600 dark:text-sky-400 font-bold gap-6 md:gap-12 p-2 transition-all duration-500 ease-out delay-300 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {SOCIAL_LINKS.map((link) => {

            const isExternal = link.url.startsWith("http");

            return (
              <a
                key={link.name}
                href={link.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex flex-row gap-2 items-center hover:opacity-80 transition-opacity"
              >
                <link.icon /> {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};