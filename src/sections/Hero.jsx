import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-7xl md:text-8xl font-sans-serif font-bold">
            Daniel Afkhami
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Honors Math + CS @ Rutgers University
          </p>
          <p className="text-lg md:text-xl text-sky-600 font-medium flex flex-row gap-8 md:gap-14 justify-center mt-6 md:mt-10">
            <a href = "https://www.linkedin.com/in/daniel-afkhami" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center">
            <FaLinkedin /> LinkedIn
            </a>
            <a href = "https://github.com/danielafkhami" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center">
            <FaGithub /> Github
            </a>
            <a href = "https://www.instagram.com/daniel.afkhami" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center">
            <FaInstagram /> Instagram
            </a>
            <a href = "mailto:dan.afkhami@gmail.com" className="flex flex-row gap-2 items-center">
            <FaEnvelope /> Email
            </a>
          </p>
        </div>
        
      </section>
    )
}