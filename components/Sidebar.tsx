import {
  Briefcase,
  Code2,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  User,
  X,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setMounted(true), 100);

    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const smoothScrollTo = (targetPosition: number, duration: number = 1200) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smooth deceleration
      const ease = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const targetPosition = element.offsetTop;

      // Add slide-in animation to the target section
      element.classList.remove('section-slide-in');
      void element.offsetWidth;
      element.classList.add('section-slide-in');

      // Custom smooth scroll with visible animation
      smoothScrollTo(targetPosition, 1200);

      setActiveSection(id);
      setIsMobileMenuOpen(false);

      // Clean up the class after animation finishes
      setTimeout(() => {
        element.classList.remove('section-slide-in');
      }, 700);
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const textTransitionClass = `whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
    isMobileMenuOpen
      ? 'opacity-100 translate-x-0 w-auto'
      : 'opacity-0 -translate-x-4 w-0 md:group-hover:opacity-100 md:group-hover:translate-x-0 md:group-hover:w-48'
  }`;

  return (
    <>
      <div
        className={`md:hidden fixed top-6 right-6 z-50 transition-all duration-700 delay-300 transform ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='p-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-xl border border-white/20 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:scale-105 transition-transform active:scale-95'
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside
        className={`
          fixed left-0 top-0 h-full z-40
          flex flex-col
          bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl
          border-r border-slate-200/50 dark:border-slate-800/50
          shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]
          transition-[width,transform] duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${mounted ? 'translate-x-0' : '-translate-x-full'}
          ${isMobileMenuOpen ? 'w-72 shadow-2xl' : 'w-0 md:w-24 md:hover:w-80'}
          overflow-hidden
          group
        `}
      >
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-indigo-500 to-purple-500 opacity-80'></div>

        <div className='h-28 flex items-center flex-shrink-0 relative'>
          <div className='w-24 h-full flex items-center justify-center flex-shrink-0 relative z-10'>
            <div className='relative group-hover:scale-110 transition-transform duration-500'>
              <div className='absolute inset-0 bg-brand-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full'></div>
              <div className='relative bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 p-3 rounded-xl shadow-lg'>
                <Code2 size={28} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className={textTransitionClass}>
            <div className='flex flex-col'>
              <span className='font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white'>
                Ekin.dev
              </span>
              <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 mt-0.5'>
                Portfolio
              </span>
            </div>
          </div>
        </div>

        <div className='flex-1 py-6 flex flex-col gap-2 overflow-y-auto overflow-x-hidden no-scrollbar'>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                   relative flex items-center h-14 w-full transition-colors duration-300
                   group/item
                   ${
                     isActive
                       ? 'text-brand-600 dark:text-brand-400'
                       : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                   }
                `}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300
                    ${
                      isActive
                        ? 'bg-brand-600 dark:bg-brand-400 opacity-100'
                        : 'bg-transparent opacity-0 group-hover/item:opacity-30 group-hover/item:bg-slate-400'
                    }
                `}
                ></div>

                <div className='w-24 h-full flex items-center justify-center flex-shrink-0'>
                  <div
                    className={`
                        p-2.5 rounded-xl transition-all duration-300
                        ${
                          isActive
                            ? 'bg-brand-50 dark:bg-brand-900/20 shadow-sm'
                            : 'group-hover/item:bg-slate-100 dark:group-hover/item:bg-slate-800'
                        }
                    `}
                  >
                    <item.icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover/item:scale-110'
                      }`}
                    />
                  </div>
                </div>

                <div className={textTransitionClass}>
                  <span className='font-semibold text-sm tracking-wide'>
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className='flex-shrink-0 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'>
          <div className='py-8 flex flex-col gap-4'>
            <div className='flex items-center justify-center w-full relative h-10'>
              <div
                className={`flex gap-2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'gap-4' : 'md:group-hover:gap-3'
                }`}
              >
                <a
                  href='https://github.com/ekinkoseoglu'
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all hover:scale-110'
                >
                  <Github size={20} />
                </a>
                <a
                  href='https://linkedin.com/in/ekinkoseoglu'
                  target='_blank'
                  rel='noreferrer'
                  className='p-3 text-slate-400 hover:text-[#0077b5] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all hover:scale-110'
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
