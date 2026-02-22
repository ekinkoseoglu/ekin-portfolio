import { ArrowRight, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { EDUCATION, EXPERIENCES, PROJECTS } from '../constants';

const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects'>(
    'experience'
  );

  return (
    <section
      id='portfolio'
      className='min-h-screen bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300 relative overflow-hidden'
    >
      {/* Background Gradients */}
      <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-3'>
              Portfolio
            </h2>
            <h3 className='text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6'>
              My Journey
            </h3>
            <p className='max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400'>
              A timeline of my professional career, education, and the
              open-source projects I've built.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={200}>
          <div className='flex justify-center mb-16'>
            <div className='bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 inline-flex'>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-brand-600 text-white shadow-md transform scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                Experience & Education
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === 'projects'
                    ? 'bg-brand-600 text-white shadow-md transform scale-105'
                    : 'text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </ScrollReveal>

        {activeTab === 'experience' ? (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Experience Column */}
            <div className='lg:col-span-2 space-y-8'>
              <ScrollReveal>
                <h3 className='text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-8'>
                  <Briefcase className='mr-3 text-brand-600 dark:text-brand-400' />{' '}
                  Work History
                </h3>
              </ScrollReveal>
              <div className='relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-12 pb-4'>
                {EXPERIENCES.map((exp, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className='relative pl-8 md:pl-12 group'>
                      {/* Timeline Dot */}
                      <div className='absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 group-hover:border-brand-500 transition-colors duration-300 shadow-sm'></div>

                      <div className='bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-300 relative overflow-hidden'>
                        {/* Hover Gradient */}
                        <div className='absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent dark:from-brand-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                        <div className='relative z-10'>
                          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
                            <div>
                              <h4 className='text-xl font-extrabold text-slate-900 dark:text-white'>
                                {exp.role}
                              </h4>
                              <div className='text-brand-600 dark:text-brand-400 font-bold text-lg'>
                                {exp.company}
                              </div>
                            </div>
                            <div className='mt-2 sm:mt-0 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-fit'>
                              {exp.period}
                            </div>
                          </div>

                          <div className='flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6'>
                            <MapPin size={16} className='mr-1' />
                            {exp.location}
                          </div>

                          <ul className='list-disc list-outside ml-4 space-y-2 mb-6 text-slate-600 dark:text-slate-300 leading-relaxed'>
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>

                          <div className='flex flex-wrap gap-2'>
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className='px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 border border-brand-100 dark:border-brand-800'
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className='sticky top-24'>
                <ScrollReveal delay={300}>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white flex items-center mb-8'>
                    <GraduationCap className='mr-3 text-brand-600 dark:text-brand-400' />{' '}
                    Education
                  </h3>
                  <div className='space-y-6'>
                    {EDUCATION.map((edu, index) => (
                      <div
                        key={index}
                        className='bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 group'
                      >
                        <div className='text-brand-600 dark:text-brand-400 font-bold text-sm mb-2 opacity-80 group-hover:opacity-100'>
                          {edu.year}
                        </div>
                        <h4 className='text-lg font-bold text-slate-900 dark:text-white mb-2'>
                          {edu.school}
                        </h4>
                        <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                          {edu.degree}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {PROJECTS.map((project, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className='bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col group h-full'>
                  <div className='h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-950 p-6 flex items-center justify-center relative overflow-hidden'>
                    {/* Abstract Tech Patterns */}
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/20 via-slate-200/0 to-transparent dark:via-slate-900/0'></div>
                    <div className='absolute inset-0 bg-brand-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>

                    <h3 className='text-2xl font-bold text-slate-900 dark:text-white text-center z-10 transform group-hover:scale-105 transition-transform duration-300'>
                      {project.title}
                    </h3>

                    {/* Glow Effect */}
                    <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl group-hover:bg-brand-500/40 transition-colors duration-500'></div>
                  </div>

                  <div className='p-8 flex-1 flex flex-col'>
                    <div className='text-xs font-bold tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3'>
                      {project.period}
                    </div>
                    <p className='text-slate-600 dark:text-slate-300 mb-6 flex-1 line-clamp-4 leading-relaxed'>
                      {project.description}
                    </p>

                    <div className='space-y-6 mt-auto'>
                      <div className='flex flex-wrap gap-2'>
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className='px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-semibold border border-slate-200 dark:border-slate-700'
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className='px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-semibold border border-slate-200 dark:border-slate-700'>
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className='pt-6 border-t border-slate-100 dark:border-slate-800'>
                        <Link
                          to={`/project/${project.id}`}
                          className='flex items-center justify-center w-full px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 text-slate-900 dark:text-white font-bold rounded-xl transition-all duration-300 group/btn'
                        >
                          View Details{' '}
                          <ArrowRight
                            size={18}
                            className='ml-2 group-hover/btn:translate-x-1 transition-transform'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
