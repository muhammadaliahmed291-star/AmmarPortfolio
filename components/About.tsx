
import React from 'react';
import { SKILLS } from '../constants';
import ammarImg from "../assets/images/ammar.jpeg";

export const About: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        
        {/* Left: Bio & Image */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-fuchsia-600/10 text-fuchsia-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              The Visionary
            </div>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
              Ammar Ali. <br />
              <span className="text-slate-300 dark:text-slate-700">Digital Architect</span>
            </h3>
            <div className="flex flex-col md:flex-row gap-12 items-center">
               <div className="w-full md:w-80 aspect-[3/4] bg-violet-600 rounded-[3rem] overflow-hidden shadow-2xl shrink-0 group relative">
                  <img 
                     src={ammarImg}
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Ammar Ali Portrait" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[3rem]"></div>
               </div>
               <div className="space-y-6">
                 <p className="text-2xl text-slate-700 dark:text-slate-300 font-bold leading-tight">
                  Over 4 years of crafting natural digital ecosystems.
                 </p>
                 <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  My design philosophy is rooted in cognitive science and visual hierarchy. I build products that don't just solve problems, but create emotional resonance with the user.
                 </p>
                 <div className="pt-4 flex gap-6">
                   <div>
                     <p className="text-3xl font-black text-violet-600">50+</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Launch Events</p>
                   </div>
                   <div className="w-px h-12 bg-black/5 dark:bg-white/10"></div>
                   <div>
                     <p className="text-3xl font-black text-fuchsia-600">4.9</p>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Client Rating</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-10 bg-white dark:bg-[#1A1A1E] rounded-[2.5rem] card-shadow border border-black/5 dark:border-white/5 hover:border-violet-600/30 transition-colors">
                <div className="w-16 h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center text-3xl mb-8">🎨</div>
                <h4 className="text-2xl font-black mb-4">Visual Precision</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Every pixel serves a dedicated purpose in creating balance, hierarchy, and strong brand identity.</p>
             </div>
             <div className="p-10 bg-white dark:bg-[#1A1A1E] rounded-[2.5rem] card-shadow border border-black/5 dark:border-white/5 hover:border-fuchsia-600/30 transition-colors">
                <div className="w-16 h-16 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center text-3xl mb-8">🧠</div>
                <h4 className="text-2xl font-black mb-4">Cognitive Science</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Utilizing user psychology to reduce friction and cognitive load for a seamless flow.</p>
             </div>
          </div>
        </div>

        {/* Right: Skills & Stats */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <div className="p-10 bg-white dark:bg-[#1A1A1E] rounded-[3rem] card-shadow border border-black/5 dark:border-white/5">
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-violet-600 rounded-full"></span>
              Core Tech Stack
            </h4>
            <div className="space-y-8">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="opacity-60">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-xs font-black text-violet-600 group-hover:scale-110 transition-transform">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-2xl font-black mb-4">Looking for a collaborator?</h4>
            <p className="text-white/80 mb-8 font-medium">I'm currently accepting new projects for Q3-Q4 2024. Let's build the next big thing together.</p>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-xs py-4 px-8 bg-white text-violet-600 rounded-2xl hover:bg-fuchsia-100 transition-all shadow-xl"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
