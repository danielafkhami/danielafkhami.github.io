export const Footer = () => {
    return (
        <footer 
        className="w-full py-6 text-sm sm:text-base md:text-lg font-mono border border-slate-200 dark:border-slate-800 
        text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-slate-900/40 text-center"
        >
            <p>&copy; {new Date().getFullYear()} Daniel Afkhami. All rights reserved.</p>
        </footer>
    )
}