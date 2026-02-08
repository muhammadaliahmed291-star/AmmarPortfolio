
import React from 'react';

export const Hero: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center md:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-violet-600/10 rounded-full border border-violet-600/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.2em]">Available for projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-[#1A1A1E] dark:text-white">
            Designing <br />
            <span className="text-gradient">Experiences</span> <br />
            That Matter.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
            I’m Ammar Ali, a UI/UX Designer specialized in creating clean, 
            intuitive, and highly functional digital products for humans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="px-8 py-4 bg-violet-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-violet-600/30 transition-all text-center"
            >
              View Work
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl font-bold text-lg hover:bg-black/10 dark:hover:bg-white/10 transition-all text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="w-[500px] h-[500px] bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl absolute -top-20 -right-20 animate-pulse"></div>
          <div className="relative z-10 w-full aspect-square bg-[#1A1A1E] dark:bg-[#2A2A2E] rounded-[3rem] p-4 card-shadow rotate-3 group hover:rotate-0 transition-transform duration-700">
            <div className="w-full h-full bg-[#3A3A3E] rounded-[2.5rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                alt="UI Design"
              />
              <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Design System</p>
                <p className="text-2xl font-black">Modern UI Kit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
