
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-[#1A1A1E] dark:bg-violet-950/20 text-white rounded-[4rem] p-10 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 blur-[150px] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <h2 className="text-violet-400 font-bold uppercase tracking-[0.4em] mb-6 text-sm">Let's Connect</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
                Have a <span className="text-violet-400">Vision?</span> <br /> Let's build it.
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-white/60 text-lg">Contact me for collaboration or inquiries.</p>
              <a href="mailto:hello@ammarali.design" className="text-3xl font-black hover:text-violet-400 transition-colors block">
                ammar@uiux.design
              </a>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'Dribbble', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all">
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Project Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold resize-none"
                />
              </div>
              <button className="w-full py-6 bg-violet-600 rounded-3xl font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-violet-600/40 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
