export const SectionHeading = ({ label }) => {
    return (
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-mono font-bold text-slate-900 dark:text-white pb-2 sm:pb-3 md:pb-4 border-b-2 border-slate-200 dark:border-white/10 tracking-tight">
            {label}
        </h2>
    )
}