import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 lg:pt-0">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-brand-200 dark:border-brand-800 text-brand-800 dark:text-brand-300 text-sm font-medium mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 dark:bg-brand-400 mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <h1 className="text-5xl tracking-tight font-extrabold text-slate-900 dark:text-white sm:text-6xl md:text-7xl mb-6">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
                {PERSONAL_INFO.title}. <br/>
                Crafting exceptional digital experiences with a focus on performance, accessibility, and modern aesthetics.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={scrollToPortfolio}
                  className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-2xl shadow-lg shadow-brand-500/20 text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1"
                >
                  View Work 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center px-8 py-4 border border-slate-300 dark:border-slate-700 text-lg font-medium rounded-2xl text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Contact Me
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex items-center gap-6 text-slate-400 dark:text-slate-500">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                  <Github size={28} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin size={28} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                  <Mail size={28} />
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ScrollReveal delay={400} className="w-full max-w-md lg:max-w-full">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Rotating glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
                
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ease-out group">
                    <div className="absolute inset-0 bg-brand-600/10 z-10 group-hover:bg-transparent transition-colors"></div>
                    <img 
                        src={PERSONAL_INFO.avatar} 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-20 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute bottom-20 -left-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <span className="text-3xl">💻</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;