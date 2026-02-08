import React from 'react';
import { PROJECTS } from '../constants';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-32 bg-white dark:bg-[#0A0A0B]">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12 text-center">
        <div className="inline-block px-3 py-1 bg-violet-600/10 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
          My Work
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Case Studies & Projects</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Selected projects designed with Figma, focusing on UX/UI and practical solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-50 dark:bg-[#1A1A1E] rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow"
          >
            {/* Image */}
            <div className="h-48 md:h-56 lg:h-60 overflow-hidden rounded-t-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text content */}
            <div className="p-5 flex flex-col gap-3">
              <p className="text-xs text-violet-600 font-bold uppercase tracking-widest">{project.tags.join(' • ')}</p>
              <h3 className="text-lg md:text-xl font-black">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{project.description}</p>
              {project.figmaLink && (
                <a 
                  href={project.figmaLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 md:px-5 md:py-2.5 bg-violet-600 text-white font-semibold rounded-lg text-xs md:text-sm text-center hover:bg-violet-700 transition-all"
                >
                  View Case Study
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
