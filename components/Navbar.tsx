import { Code2, Menu, Moon, Sun, X } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className='sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <NavLink to='/' className='flex-shrink-0 flex items-center gap-2'>
              <div className='bg-brand-600 text-white p-1.5 rounded-lg'>
                <Code2 size={24} />
              </div>
              <span className='font-bold text-xl tracking-tight text-slate-900 dark:text-white'>
                Ekinnnnn.dev
              </span>
            </NavLink>
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
              aria-label='Toggle Dark Mode'
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href='https://github.com/ekinkoseoglu'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-slate-900 dark:bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-brand-700 transition-colors'
            >
              GitHub
            </a>
          </div>

          <div className='flex items-center md:hidden gap-4'>
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
