  import React, { useRef, useState } from 'react';
  import { PROJECTS } from '../constants';

  export const Work: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(progress);
      }
    };

    const scroll = (direction: 'left' | 'right') => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    };

    return (
      <section id="work" className="py-32 overflow-hidden bg-white dark:bg-[#0A0A0B]">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-violet-600/10 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Selected Portfolio
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Case Studies</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-48 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden hidden md:block">
              <div 
                className="h-full bg-violet-600 transition-all duration-300" 
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-95 shadow-lg shadow-black/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all active:scale-95 shadow-lg shadow-black/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto px-6 md:px-0 pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-gray-100"
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className="min-w-[300px] md:min-w-[400px] snap-start flex-shrink-0 bg-[#F9F9F9] dark:bg-[#1A1A1E] rounded-2xl shadow-lg overflow-hidden">
              
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 md:h-64 object-cover"
              />

              {/* Text content */}
              <div className="p-6 flex flex-col gap-4">
                <p className="text-xs text-violet-600 font-bold uppercase tracking-widest">{project.tags.join(' • ')}</p>
                <h3 className="text-lg md:text-xl font-black">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{project.description}</p>
                {project.figmaLink && (
                  <a 
                    href={project.figmaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-6 py-3 bg-violet-600 text-white font-bold rounded-xl text-xs md:text-sm text-center hover:bg-violet-700 transition-all"
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
