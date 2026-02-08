import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  formRef.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          setSuccess("Failed to send message. Try again!");
        }
      );
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="bg-[#1A1A1E] text-white rounded-[4rem] p-10 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 blur-[150px] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Info */}
          <div className="space-y-10">
            <h2 className="text-violet-400 font-bold uppercase tracking-[0.4em] mb-6 text-sm">Let's Connect</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Have a <span className="text-violet-400">Vision?</span> <br /> Let's build it.
            </h3>
            <p className="text-white/60 text-lg">Contact me for collaboration or inquiries.</p>
            <a 
              href="mailto:muhammadaliahmed291@gmail.com" 
              className="text-3xl font-black hover:text-violet-400 transition-colors block"
            >
              muhammadaliahmed291@gmail.com
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address</label>
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Project Message</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-violet-400 transition-all font-bold resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-violet-600 rounded-3xl font-black uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-violet-600/40 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="text-center mt-4 text-green-400 font-bold">{success}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
