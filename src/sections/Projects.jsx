import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SectionHeading } from "@/components/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";

const PROJECTS = [
  {
    name: "Denoising Diffusion Probabilistic Model (DDPM) Synthesizing 2D Ising System Configurations",
    description: [
      "Implemented a NumPy Monte Carlo engine to generate a dataset of Ising model lattice states at critical temperatures.",
      "Designed a DDPM using PyTorch and a U-Net architecture in Python to predict spin configurations at critical temperatures.",
      "Validated performance by statistically comparing generated energy/magnetization distributions against theoretical baselines.",
    ],
    stack: ["NumPy", "PyTorch", "Matplotlib"],
    url: "https://github.com/danielafkhami",
  },
  {
    name: "Physics-Informed Neural Network (PINN) Modeling Field-Induced Motion of Ferrofluid",
    description: [
      "Derived governing force equations for the movement of ferrofluid droplets through viscous water under the influence of field gradients, and used SciPy to numerically compute traversal times of ferrofluid droplets toward a magnetic field source.",
      "Designed and implemented a PINN using TensorFlow in Python to predict traversal times.",
      "Achieved accurate extrapolation from limited data through enforcing residuals of the governing differential equation."
    ],
    stack: ["NumPy", "SciPy", "TensorFlow", "Matplotlib"],
    url: "https://github.com/danielafkhami",
  },
];

export const Projects = () => {
  return (
    <section className="flex flex-col items-center px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 font-sans">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

        <SectionHeading label="Projects" />

        <div className="w-fit max-w-7xl mx-auto">

          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">

            {PROJECTS.map((project) => (

              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                draggable="false"
                className="group select-text"
              >

                <TerminalWindow
                  className="hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md transition-colors transition-shadow"
                  title={
                    <div className="flex items-center justify-end text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base">
                      <span className="px-2 sm:px-2.5 md:px-3 font-mono">
                        GitHub
                      </span>
                      <FaArrowUpRightFromSquare />
                    </div>
                  }
                >

                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">

                    <h3 className="font-mono font-bold text-base sm:text-lg md:text-xl text-slate-800 dark:text-slate-200">
                      {project.name}
                    </h3>
                    
                    <ul className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">

                      {project.description.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-slate-400 dark:text-slate-600">–</span>
                          <span>{item}</span>
                        </li>
                      ))}

                    </ul>

                  </div>

                  <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-2">

                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm md:text-base font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </TerminalWindow>

              </a>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
