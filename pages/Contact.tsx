import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-slate-900 py-24 flex items-center transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <ScrollReveal>
            <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-600 dark:text-brand-400 tracking-widest uppercase mb-3">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Let's Work Together</h3>
            <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row">
            
            {/* Left Side Info */}
            <div className="bg-gradient-to-br from-brand-600 to-indigo-700 text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <div>
                    <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                    <p className="text-brand-100 mb-10 leading-relaxed">Fill out the details or reach out via email/phone and I will get back to you shortly.</p>
                </div>

                <div className="space-y-6 relative z-10">
                    <div className="flex items-center">
                        <div className="bg-white/20 p-2.5 rounded-lg mr-4 backdrop-blur-sm">
                        <Mail className="h-5 w-5" />
                        </div>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-brand-100 transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white/20 p-2.5 rounded-lg mr-4 backdrop-blur-sm">
                        <Phone className="h-5 w-5" />
                        </div>
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-brand-100 transition-colors">{PERSONAL_INFO.phone}</a>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-white/20 p-2.5 rounded-lg mr-4 backdrop-blur-sm">
                        <MapPin className="h-5 w-5" />
                        </div>
                        <span>{PERSONAL_INFO.location}</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-12">
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm">
                        <Github size={20} />
                    </a>
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
            
            {/* Right Side / CTA */}
            <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center items-center text-center">
                <div className="max-w-sm">
                    <div className="w-20 h-20 bg-brand-50 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 dark:text-brand-400">
                        <Send size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Have a project in mind?</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        "Köseoğlu is dedicated to delivering top-notch products that meet user needs, driving organizational success and growth."
                    </p>
                    <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-xl w-full"
                    >
                        Send Me an Email
                    </a>
                </div>
            </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;