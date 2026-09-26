import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SectionHeading } from "@/components/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";

const PROJECTS = [
  {
    name: "Discrete Denoising Diffusion Probabilistic Model (D3PM) Synthesizing 2D Ising System Configurations",
    description: [
      "Built a Numba-compiled Metropolis Monte Carlo sampler to generate a dataset of 32 x 32 Ising model lattice states at the critical temperature.",
      "Designed a 300-step PyTorch Discrete Denoising Diffusion Probabilistic Model (D3PM) using a U-Net architecture, exact binary reverse transitions, and EMA-stabilized refinement.",
      "Evaluated 500 generated configurations against 500 held-out simulations by comparing energy and magnetization distributions with KS and Wasserstein statistics, demonstrating strong overall agreement with the reference data.",
    ],
    stack: ["Python", "PyTorch", "NumPy", "SciPy", "Numba", "Matplotlib"],
    url: "https://github.com/danielafkhami/diffusion-model-ising",
  },
  {
    name: "Physics-Informed Neural Network (PINN) Modeling Field-Induced Motion of Ferrofluid",
    description: [
      "Derived the governing ODE balancing nonlinear magnetic force with Stokes drag to model the movement of a ferrofluid droplet through a viscous medium under a magnetic-field gradient.",
      "Built a TensorFlow Physics-Informed Neural Network (PINN) trained on 4 noisy observations and 1,000 collocation points, combining data loss with an automatically differentiated physics residual.",
      "Compared predicted traversal times with a SciPy quadrature reference over 0-20 mm, achieving accurate extrapolation beyond the 15-20 mm observation interval."
    ],
    stack: ["Python", "TensorFlow", "NumPy", "SciPy", "Matplotlib"],
    url: "https://github.com/danielafkhami/pinn-ferrofluid-motion",
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
