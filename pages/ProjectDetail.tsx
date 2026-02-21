import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        <article className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
          {/* Header */}
          <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-brand-200">
                    {tech}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">{project.title}</h1>
              <div className="flex items-center text-slate-300 text-sm mb-6">
                <Calendar size={16} className="mr-2" />
                {project.period}
              </div>
              <p className="text-lg text-slate-200 max-w-2xl leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {project.repoLink && (
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    View Source
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={20} className="mr-2" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Readme Content */}
          <div className="p-8 md:p-12">
            <div 
              className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-brand-600 dark:prose-a:text-brand-400 hover:prose-a:text-brand-700 dark:hover:prose-a:text-brand-300 prose-code:text-brand-600 dark:prose-code:text-brand-300 prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:shadow-inner"
              dangerouslySetInnerHTML={{ __html: project.detailedContent || '<p>No detailed content available.</p>' }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;