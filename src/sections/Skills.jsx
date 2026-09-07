import { SectionHeading } from "@/components/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";

const SKILLS = [
  {
    category: "Programming",
    items: ["Python", "Java", "TypeScript/JavaScript", "HTML/CSS", "SQL", "LaTeX", "Bash"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Tailwind CSS", "Vite", "FastAPI", "NumPy/SciPy", "PyTorch", "PySide6"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Cloud & Tools",
    items: ["Git", "Docker", "Azure", "Vercel", "Railway", "Addepar"],
  },
];

export const Skills = () => {
  return (
    <section className="flex flex-col items-center px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 font-sans">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-7xl mx-auto">

        <SectionHeading label="Technical Skills" />

        <TerminalWindow className="w-fit max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 sm:gap-8">
            
            {SKILLS.map((group) => (
              <div 
                key={group.category} 
                className="flex flex-col gap-2 sm:gap-3 md:gap-4 sm:rounded-lg sm:border sm:border-slate-200 sm:dark:border-slate-800 
                sm:bg-white/80 sm:dark:bg-slate-900/40 p-1 sm:p-5 md:p-6 sm:shadow-sm"
            >
                
                <h3 className="font-mono font-bold text-slate-800 dark:text-slate-200 text-base sm:text-lg md:text-xl">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm md:text-base px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </TerminalWindow>

      </div>
    </section>
  );
};