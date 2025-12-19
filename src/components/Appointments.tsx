"use client";

import { useState, useEffect, useRef } from "react";

export default function Appointments() {
    const [isDark, setIsDark] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const options = [
        { name: "Standard Package", time: "30 minutes", price: "ETB 19,999" },
        { name: "Premium Package", time: "1 hour", price: "ETB 29,999" },
        { name: "Family Package", time: "1 hour", price: "ETB 9,999" }
    ];

    // Mark as mounted (client-side only)
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Track dark mode
    useEffect(() => {
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    // Load Instagram embed script once
    useEffect(() => {
        if (!isMounted) return;

        const existingScript = document.querySelector('script[src*="instagram.com/embed.js"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                if ((window as any).instgrm) {
                    (window as any).instgrm.Embeds.process();
                }
            };
        } else {
            if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
            }
        }
    }, [isMounted]);

    // Reprocess embeds when theme changes
    useEffect(() => {
        if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }
    }, [isDark]);

    return (
        <section id="appointments" style={{ backgroundColor: isDark ? '#1a1a2e' : '#f3f7ffff' }} className="py-32 md:py-48 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_400px] gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-light mb-10 leading-[1.1] tracking-tight">
                            Schedule your appointment
                        </h2>
                        <p className="text-lg opacity-70 mb-12 font-sans max-w-lg leading-relaxed">
                            Capture life's moments with precision and artistry by scheduling your photography session with us today. Let our experienced professionals create stunning memories tailored to your unique vision.
                        </p>
                        <div className="bg-white w-[350px] h-[400] md:h-[380px] mx-auto md:mx-0 rounded-2xl relative md:w-[320px] group overflow-hidden shadow-lg">
                            {/* Instagram Embed - Only render on client */}
                            {isMounted ? (
                                <div
                                    className="absolute inset-0 flex items-center justify-center overflow-hidden z-10"
                                    style={{ transformOrigin: 'center center' }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKW648EtXrM/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;"></blockquote>`
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="animate-pulse text-zinc-400 text-sm">Loading...</div>
                                </div>
                            )}

                        </div>

                        {/* Floating hand pointer */}
                    </div>

                    <div className="text-white dark:bg-zinc-900 p-10 md:p-12 shadow-2xl rounded-2xl border  border-zinc-50 dark:border-zinc-800 animate-slide-in-right">
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] mb-10 opacity-70 border-b border-zinc-500 dark:border-zinc-300 pb-4">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Select Appointment
                        </div>
                        <div className="space-y-8 text-white">
                            {options.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-zinc-50 dark:border-zinc-300 pb-6 last:border-0">
                                    <div className="transition-transform group-hover:translate-x-2">
                                        <div className="text-sm md:text-base font-medium">{item.name}</div>
                                        <div className="text-[10px] opacity-70 font-sans mt-1 uppercase tracking-widest">{item.time} @ {item.price}</div>
                                    </div>
                                    <button className="bg-black text-white rounded-full dark:bg-white dark:text-black px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-brand-accent dark:hover:bg-brand-accent dark:hover:text-white transition-all">
                                        BOOK
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center text-[8px] opacity-60 uppercase tracking-[0.6em] font-sans">
                            Powered by Akllyl Studio
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
