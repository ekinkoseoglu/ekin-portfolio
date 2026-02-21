import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay for entrance animation
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed z-50 top-6 right-24 md:right-8
        p-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
        rounded-full shadow-xl border border-white/20 dark:border-slate-700 
        text-slate-600 dark:text-slate-300 
        hover:scale-110 hover:text-brand-600 dark:hover:text-brand-400
        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        active:scale-95 group
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
      `}
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
            <Moon size={24} fill="currentColor" className="text-slate-600" />
        </div>
        <div className={`absolute inset-0 transform transition-transform duration-500 ${theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
            <Sun size={24} className="text-brand-400" />
        </div>
      </div>
      
      {/* Tooltip */}
      <span className="absolute top-full right-0 mt-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;