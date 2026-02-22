import { Quote } from 'lucide-react';
import React from 'react';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import SkillsList from '../components/SkillsList';
import { TESTIMONIAL } from '../constants';
import ContactSection from '../pages/Contact'; // Importing the section component
import PortfolioSection from '../pages/Portfolio'; // Importing the section component

const MainPage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />

      <section
        id='about'
        className='py-32 bg-white dark:bg-slate-900 transition-colors duration-300'
      >
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollReveal>
            <div className='text-center mb-16'>
              <h2 className='text-sm font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-3'>
                About Me
              </h2>
              <p className='text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto'>
                Passionate about creating digital solutions that bridge the gap
                between complex engineering and elegant user experience.
              </p>
            </div>
          </ScrollReveal>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
            <ScrollReveal delay={100}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>🚀</span>
                  <span className='font-bold text-slate-900 dark:text-white'>
                    Ekin Deniz Köseoğlu
                  </span>{' '}
                  is a Full Stack Software Engineer at{' '}
                  <span className='text-brand-600 dark:text-brand-400 font-semibold'>
                    Siren Bilisim & Yazılım
                  </span>
                  , driven by passion and innovation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>🎓</span>
                  He began his academic journey in 2017 at{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    Karabuk University, Turkey
                  </span>
                  , studying Electrical and Electronics Engineering.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>💻</span>
                  In 2020, he created his first repository on{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    GitHub
                  </span>
                  , marking the start of his digital presence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>⚡</span>
                  Köseoğlu specializes in{' '}
                  <span className='font-semibold text-brand-600 dark:text-brand-400'>
                    Javascript, React, Angular, NodeJS, NestJS, .NET
                  </span>
                  , various SQL technologies and Git, skillfully navigating the
                  world of software development.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>🔧</span>
                  He honed his skills during an{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    Electrics-Electronics Engineering internship
                  </span>{' '}
                  at AselsanNET.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>📊</span>
                  During an internship at{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    Jotform
                  </span>
                  , he delved into frontend development, particularly in
                  sentiment analysis of customer feedback.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 md:col-span-2'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>🤖</span>
                  Beyond coding, Köseoğlu is fascinated by{' '}
                  <span className='font-semibold text-brand-600 dark:text-brand-400'>
                    software engineering, web technologies, AI, Machine Learning
                    and Deep Learning
                  </span>{' '}
                  concepts, entrepreneurship and project management.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 md:col-span-2'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>🎯</span>
                  He currently works as both the{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    technical leader and manager
                  </span>{' '}
                  of various startup projects, where he uses web applications
                  that help focus and work efficiency by using various
                  technologies such as Javascript, .NET, React.js, Angular,
                  NodeJS, Laravel and RESTful APIs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className='bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-300'>
                  <span className='text-3xl mr-3'>📜</span>
                  He's earned certifications in{' '}
                  <span className='font-semibold text-slate-900 dark:text-white'>
                    digital marketing, leadership, and finance
                  </span>{' '}
                  from institutions like Google and METU Business Club.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={550}>
              <div className='bg-gradient-to-br from-brand-50 to-indigo-50 dark:from-brand-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border-2 border-brand-300 dark:border-brand-700 hover:shadow-xl transition-all duration-300'>
                <p className='text-base leading-relaxed text-slate-700 dark:text-slate-200 font-medium'>
                  <span className='text-3xl mr-3'>🏆</span>
                  Köseoğlu is dedicated to delivering{' '}
                  <span className='font-bold text-brand-700 dark:text-brand-300'>
                    top-notch products
                  </span>{' '}
                  that meet user needs, driving organizational success and
                  growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SkillsList />

      <PortfolioSection />

      {/* Testimonial Section - Visual Break */}
      <section className='py-32 bg-slate-900 dark:bg-black text-white relative overflow-hidden transition-colors duration-300'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none'>
          <div className='absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900 via-slate-950 to-transparent animate-spin-slow'></div>
        </div>

        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <ScrollReveal>
            <Quote className='h-16 w-16 text-brand-500 mx-auto mb-8 opacity-50' />
            <blockquote className='text-2xl md:text-4xl font-medium leading-relaxed mb-10'>
              "{TESTIMONIAL.text}"
            </blockquote>
            <div className='flex flex-col items-center'>
              <cite className='not-italic font-bold text-xl'>
                {TESTIMONIAL.name}
              </cite>
              <span className='text-brand-300 mt-1'>{TESTIMONIAL.role}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default MainPage;
