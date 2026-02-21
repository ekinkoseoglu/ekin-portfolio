import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SkillsList: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
            <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-3">Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                Technical Arsenal
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                A comprehensive collection of tools and technologies I use to build scalable, high-performance applications.
            </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
                <div className="h-full bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:border-brand-300 dark:hover:border-brand-700 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {category.title}
                </h3>
                <ul className="space-y-3">
                    {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-600 dark:text-slate-300 group/item">
                        <CheckCircle2 className="h-5 w-5 text-brand-500 dark:text-brand-400 mr-3 flex-shrink-0 group-hover/item:text-brand-600 transition-colors" />
                        <span className="text-sm font-medium">{skill}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsList;