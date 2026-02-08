
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'work', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-black tracking-tighter flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-violet-600 rounded-2xl flex items-center justify-center text-white text-lg group-hover:rotate-12 transition-transform shadow-lg shadow-violet-600/20">
            A
          </div>
          <span className="hidden sm:inline font-bold">AMMAR ALI</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1.5 rounded-2xl border border-black/5 dark:border-white/5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeSection === link.href
                  ? 'bg-white dark:bg-slate-800 text-violet-600 shadow-sm'
                  : 'hover:text-violet-600 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-violet-600/10 hover:text-violet-600 transition-all border border-transparent hover:border-violet-600/20"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:flex px-7 py-3 bg-[#1A1A1E] dark:bg-white text-white dark:text-[#0A0A0B] text-xs font-black rounded-2xl uppercase tracking-widest hover:bg-violet-600 dark:hover:bg-violet-600 dark:hover:text-white transition-all shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};
