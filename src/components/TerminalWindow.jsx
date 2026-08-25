export const TerminalWindow = ({ title, children, className = "" }) => (
  <div
    className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/40 shadow-sm overflow-hidden ${className}`}
  >
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
      {title && (
        <span className="ml-2 truncate">
          {title}
        </span>
      )}
    </div>
    <div className="p-6 md:p-8">{children}</div>
  </div>
);
