import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen lg:min-h-[125vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                <Image
                    src="/akllyl_hero.png"
                    alt="Akllyl Minimalist Photography Studio"
                    fill
                    className="object-cover blur-[2px]"
                    priority
                    suppressHydrationWarning
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mt-20 mx-auto px-6 relative z-10 text-center text-white">
                <div className="flex justify-center mb-6 animate-fade-in-up">
                    {/* <Image
                        src="/favicon.svg"
                        alt="Akllyl Logo"
                        width={150}
                        height={150}
                        className="opacity-90"
                    /> */}
                </div>
                <h1 className="text-4xl md:text-7xl font-light mb-10 max-w-5xl mx-auto leading-[1.1] animate-fade-in-up delay-100">
                    Capture Timeless Moments with Expert Photography
                </h1>
                <p className="max-w-xl mx-auto mb-12 text-base md:text-lg opacity-80 leading-relaxed font-sans animate-fade-in-up delay-200">
                    ወሰን የለሽ የፎቶግራፊ ዓለምን ያስሱ፣ ጊዜውን በተመረጡ ባለሙያዎቻችን ይዘት ይቅረጹ።                </p>
                <div className="flex justify-center gap-6 animate-fade-in-up delay-300">
                    <a
                        href="#about"
                        className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-full uppercase tracking-widest text-xs hover:opacity-80 transition-all font-medium"
                    >
                        Learn More
                    </a>
                </div>

                {/* Map Icon */}
                <a
                    href="https://maps.app.goo.gl/7h9w8SW4NRmbJqvc9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-20 inline-flex items-center gap-2 text-white hover:opacity-70 transition-opacity animate-fade-in-up delay-300"
                    aria-label="View on Google Maps"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs uppercase tracking-widest">Find Us</span>
                </a>
            </div>
        </section>
    );
}
