import { SectionHeading } from "@/components/SectionHeading";
import { TerminalWindow } from "@/components/TerminalWindow";
import STPLogo from "@/assets/logos/stp.jpeg";

const EXPERIENCES = [
  {
    org: "Stone Temple Partners LLC",
    logo: STPLogo,
    title: "Software Engineer Intern",
    duration: "May 2026 - August 2026",
    role: "Full-stack engineer on a wealth-management platform for RIAs serving UHNW households.",
    description: [
      "Implemented CRM functionality in use by 8 advisors overseeing $750M+ AUM, designing RESTful endpoints using FastAPI against a React/TypeScript frontend and a Supabase/PostgreSQL schema.",
      "Shipped a portfolio analysis and tax-aware rebalancing engine that scores a prospective client’s portfolio against a Monte Carlo optimizer and generates executable transition plans with capital-gains netting, loss harvesting, and wash-sale constraints.",
      "Delivered a Windows desktop application (PySide6) that records advisor calls, transcribes them via Azure AI Speech, and files LLM-generated summaries to five CRM record types, cutting transcription costs ~95% by retiring a third-party service.",
      "Built automated ETL pipelines (Supabase Edge Functions on pg_cron) that reconcile position-level data via the Addepar API, giving advisors direct access to household AUM, cash balances, and per-fund performance for pooled vehicles.",
      "Replaced password authentication with Microsoft OAuth 2.0 SSO and built an in-app mail client via the Microsoft Graph API with automated email filing, eliminating stored credentials and provisioning every Microsoft integration from one sign-in.",
    ]
  }
]

const CompanyBadge = ({ org, logo }) => (
    <img
      src={logo}
      alt={`${org} logo`}
      className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover border border-slate-200 dark:border-slate-800 shrink-0"
    />
  );

export const Experience = () => {
  return (
    <section className="flex flex-col items-center px-6 sm:px-10 md:px-14 py-20 sm:py-28 md:py-36 font-sans">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">

        <SectionHeading label="Experience" />

        <TerminalWindow className="w-fit max-w-7xl mx-auto">

            {EXPERIENCES.map((experience, index) => (

              <div key={index} className="flex gap-4">
                
                <div className="hidden sm:flex flex-col items-center shrink-0">
                  <CompanyBadge org={experience.org} logo={experience.logo} />
                  <span className="w-px flex-1 bg-slate-200 dark:bg-slate-800 mt-2" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-mono font-bold text-base sm:text-lg md:text-xl">

                    <span>{experience.title}</span>{" "}
                    <span className="text-slate-500 dark:text-slate-400">
                      @ {experience.org}
                    </span>

                  </h3>

                  <p className="font-mono text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400">
                    {experience.duration}
                  </p>

                  <p className="font-semibold text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
                    {experience.role}
                  </p>

                  <ul className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">

                    {experience.description.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-slate-400 dark:text-slate-600">–</span>
                        <span>{item}</span>
                      </li>
                    ))}

                  </ul>
                </div>

              </div>

            ))}

        </TerminalWindow>
            
      </div>
    </section>
  );
}