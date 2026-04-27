import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-afkhami", icon: FaLinkedin },
  { name: "Github", url: "https://github.com/danielafkhami", icon: FaGithub },
  { name: "Instagram", url: "https://www.instagram.com/daniel.afkhami", icon: FaInstagram },
  { name: "Email", url: "mailto:dan.afkhami@gmail.com", icon: FaEnvelope },
];

export const Hero = () => {
    return (
      <section className = "h-screen flex flex-col justify-center items-center">
        <div className = "text-center flex flex-col gap-4">

          <h1 className = "text-5xl md:text-7xl font-bold">
            Daniel Afkhami
          </h1>

          <p className = "text-base md:text-lg text-slate-600 font-medium">
            Honors Math + CS @ Rutgers University
          </p>

          <nav className = "text-base md:text-lg text-sky-600 font-medium flex flex-wrap gap-6 md:gap-12 justify-center mt-6 md:mt-10 px-4">
            
            {socialLinks.map((link) => {

              const isExternal = link.url.startsWith("http");
              
              return (
                <a
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