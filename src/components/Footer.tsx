import Image from "next/image";
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-20 md:py-32 bg-brand-bg dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500 text-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="max-w-md">
                    <div className="text-4xl font-bold tracking-[0.2em] uppercase mb-6 flex flex-row"><Image
                        src="/favicon.svg"
                        alt="Akllyl Logo"
                        width={50}
                        height={50}
                        className="opacity-90 animate-fade-in-up mr-2 mb-1"
                    />አክሊል</div>
                    <p className="text-sm opacity-60 leading-relaxed font-sans">
                        Professional newborn photography based in Addis Ababa. Capturing the purest moments of your little ones with art and heart.
                    </p>
                    <div className="mt-10 flex w-full gap-8">
                        <a href="https://instagram.com/akllyl_newborn_studio" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-tighter text-[10px] font-bold">Instagram</a>
                        <a href="https://web.facebook.com/people/Akllyl-Newborn-Photography/100064742713876/" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px] font-bold">Facebook</a>
                        <a href="https://tiktok.com/@akllylnewbornstudio" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest text-[10px] font-bold">TikTok</a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-20 md:gap-32 ml-13 md:ml-0">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 opacity-70">Location</h4>
                        <div className="text-xs opacity-60 leading-relaxed font-sans">
                            Bole Medanialem<br />
                            Warka tower next to Sheger<br />
                            1st floor shop #18<br />
                            Addis Ababa, Ethiopia
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 opacity-70">Contact</h4>
                        <div className="text-xs opacity-60 leading-relaxed font-sans">
                            0930518080<br />
                            0912004716<br />
                            0969693769
                        </div>
                    </div>
                </div>

                {/* Map Icon */}
                <a
                    href="https://maps.app.goo.gl/7h9w8SW4NRmbJqvc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center md:justify-start gap-2 text-white hover:opacity-70 transition-opacity w-full md:w-auto"
                    aria-label="View on Google Maps"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[15px] uppercase tracking-widest font-bold">Visit Us</span>
                </a>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-10 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] uppercase tracking-[0.4em] opacity-50 font-sans">
                <div>&copy; {currentYear} Akllyl Photography. All Rights Reserved.</div>
            </div>
        </footer>
    );
}
