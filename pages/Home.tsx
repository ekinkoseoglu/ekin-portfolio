import React from 'react';
import Hero from '../components/Hero';
import SkillsList from '../components/SkillsList';
import PortfolioSection from '../pages/Portfolio'; // Importing the section component
import ContactSection from '../pages/Contact';     // Importing the section component
import { TESTIMONIAL } from '../constants';
import { Quote } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-3">About Me</h2>
            <p className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
               Passionate about creating digital solutions that bridge the gap between complex engineering and elegant user experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SkillsList />

      <PortfolioSection />

      {/* Testimonial Section - Visual Break */}
      <section className="py-32 bg-slate-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900 via-slate-950 to-transparent animate-spin-slow"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <Quote className="h-16 w-16 text-brand-500 mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed mb-10">
                "{TESTIMONIAL.text}"
            </blockquote>
            <div className="flex flex-col items-center">
                <cite className="not-italic font-bold text-xl">{TESTIMONIAL.name}</cite>
                <span className="text-brand-300 mt-1">{TESTIMONIAL.role}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default MainPage;