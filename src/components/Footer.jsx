export const Footer = () => {
    return (
        <footer 
        className="w-full py-6 text-sm sm:text-base md:text-lg font-mono border-t border-slate-200 dark:border-slate-800 
        text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 text-center"
        >
            <p>&copy; {new Date().getFullYear()} Daniel Afkhami. All rights reserved.</p>
        </footer>
    )
}