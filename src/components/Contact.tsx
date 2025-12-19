"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    const [isDark, setIsDark] = useState(false);

    // Track dark mode
    useEffect(() => {
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" style={{ backgroundColor: isDark ? '#1a1a2e' : '#f3f7ffff', color: isDark ? '#ffffff' : '#000000' }} className="py-32 md:py-48 backdrop-blur-md transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-24 max-w-6xl mx-auto">
                    {/* Info Column */}
                    <div>
                        <h2 className="text-5xl md:text-7xl font-light mb-10 leading-[1] tracking-tighter">
                            Contact Us
                        </h2>
                        <p className="text-lg opacity-80 mb-12 font-sans leading-relaxed">
                            Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!
                        </p>

                        <div className="space-y-10 font-sans">
                            <div className="flex gap-6 group">
                                <div className="w-10 h-10 flex-shrink-0 border border-black/10 dark:border-white/10 flex items-center justify-center opacity-60">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-40">Location</h4>
                                    <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                        Bole Medanialem, Warka tower next to Sheger.<br />
                                        1st floor shop #18, Addis Ababa, Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-10 h-10 flex-shrink-0 border border-black/10 dark:border-white/10 flex items-center justify-center opacity-60">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-40">Phone</h4>
                                    <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                                        0930518080<br />
                                        0912004716<br />
                                        0969693769
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <form className="space-y-10 text-black bg-white rounded-2xl p-10 md:p-12 shadow-2xl border border-zinc-50 dark:border-zinc-200">
                        <div className="grid md:grid-cols-2 gap-10 pt-10">
                            <div className="relative group">
                                <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.3em] opacity-60 group-focus-within:opacity-100 transition-opacity">First Name</label>
                                <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-brand-accent dark:focus:border-brand-accent outline-none font-sans text-sm transition-all placeholder:opacity-50" />
                            </div>
                            <div className="relative group">
                                <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.3em] opacity-60 group-focus-within:opacity-100 transition-opacity">Last Name</label>
                                <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-brand-accent dark:focus:border-brand-accent outline-none font-sans text-sm transition-all placeholder:opacity-50" />
                            </div>
                        </div>
                        <div className="relative group">
                            <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.3em] opacity-60 group-focus-within:opacity-100 transition-opacity">Email</label>
                            <input type="email" placeholder="Email (required)" required className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-brand-accent dark:focus:border-brand-accent outline-none font-sans text-sm transition-all placeholder:opacity-50" />
                        </div>
                        <div className="relative group">
                            <label className="absolute -top-6 left-0 text-[10px] uppercase tracking-[0.3em] opacity-60 group-focus-within:opacity-100 transition-opacity">Message</label>
                            <textarea rows={4} placeholder="Your Message" className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-brand-accent dark:focus:border-brand-accent outline-none font-sans text-sm transition-all placeholder:opacity-50 resize-none"></textarea>
                        </div>
                        <button type="submit" className="w-full md:w-auto bg-brand-accent rounded-full text-white px-16 py-5 uppercase tracking-[0.4em] text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
