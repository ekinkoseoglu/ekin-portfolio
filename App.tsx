import React from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import MainPage from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <div className='flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300'>
          <Sidebar />
          <ThemeToggle />

          <main className='flex-grow md:ml-20 w-full transition-all duration-300'>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/project/:id' element={<ProjectDetail />} />
              {/* Redirect legacy routes to home for single-page experience */}
              <Route path='/portfolio' element={<MainPage />} />
              <Route path='/contact' element={<MainPage />} />
            </Routes>

            <footer className='bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300'>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-slate-500 dark:text-slate-400 text-sm font-medium'>
                  © {new Date().getFullYear()} Ekin DENİZ BABA Köseoğlu. All
                  rights reserved.
                </p>
                <div className='flex space-x-6 mt-4 md:mt-0'>
                  <span className='text-slate-400 text-sm'>
                    Designed & Developed with React & Tailwind
                  </span>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
