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
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Case Studies.</h2>
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
        className="slider-container flex gap-10 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-20 snap-x snap-mandatory"
      >
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="min-w-[90vw] md:min-w-[700px] snap-center group"
          >
            <div className="relative aspect-[16/10] bg-[#F1F1F3] dark:bg-[#1A1A1E] rounded-[3rem] overflow-hidden card-shadow mb-10 border border-black/5 dark:border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay with text & button */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">{project.tags.join(' • ')}</p>
                  <h3 className="text-white text-2xl font-black mb-4">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <a 
                    href={project.figmaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-violet-600 hover:text-white transition-all shadow-xl inline-block"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
