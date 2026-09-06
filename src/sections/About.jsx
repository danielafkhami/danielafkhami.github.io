import { TerminalWindow } from "@/components/TerminalWindow"
import { SectionHeading } from "@/components/SectionHeading"

const StyledLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-sky-600 dark:text-sky-400 hover:opacity-80 transition-opacity"
        >
        {children}
    </a>
);

export const About = () => {
    return (
        <section className="flex flex-col items-center px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 font-sans">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

                <SectionHeading label="About Me" />

                <TerminalWindow className="w-fit max-w-7xl mx-auto">

                    <div className="space-y-6 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
                        <p>
                            Hey there, I’m Daniel Afkhami. I’m currently pursuing a <span className="font-bold">Bachelor of Science in Computer Science and Mathematics</span> at the {" "}
                            <StyledLink href="https://honorscollege.rutgers.edu/">Rutgers University Honors College</StyledLink>. 
                            I have experience building production full-stack applications, data pipelines, quantitative models, and applied machine learning systems, with an interest in finance.
                        </p>
                        <p>
                            In my free time, I’m an avid skier (part of the{" "}
                            <StyledLink href="https://rutgers.campuslabs.com/engage/organization/skiandsnowboardclub">Rutgers University Ski Team</StyledLink>), 
                            tennis player, motorcycle rider (currently on a ’26 Ninja 500), and Rubik’s Cube speed-solver. I play classical piano recreationally, jazz piano in live settings, and bass clarinet with the{" "}
                            <StyledLink href="https://www.rutgersbands.com/symphonic-winds">Rutgers Symphonic Winds</StyledLink>. 
                            I also love video games; my personal favorites are Sekiro and Red Dead Redemption 2.
                        </p>
                    </div>

                </TerminalWindow>

            </div>
        </section>
    )
}