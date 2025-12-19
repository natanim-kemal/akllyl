import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 md:py-48 dark:bg-black transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">
                {/* Image Column */}
                <div className="relative aspect-[4/5] bg-zinc-200 shadow-2xl overflow-hidden rounded-2xl animate-fade-in group">
                    <Image
                        src="/about.png"
                        alt="Minimalist Desert Landscape Photography"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        suppressHydrationWarning
                    />
                </div>

                {/* Text Column */}
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-light mb-10 leading-[1.1] tracking-tight text-white">
                        About our studio
                    </h2>
                    <div className="space-y-8 text-lg opacity-80 leading-relaxed font-sans text-black/80 dark:text-white/80">
                        <p>
                            Our passion for photography drives our commitment to capturing life's most precious moments with unrivaled expertise and attention to detail.
                        </p>
                        <p>
                            We blend art and technology to provide our clients with unforgettable images that tell their unique stories. Whether it's the soft curve of a newborn's cheek or the joyous celebration of a family milestone, we are here to document it with grace.
                        </p>
                    </div>
                    <div className="mt-12">
                        <a
                            href="#contact"
                            className=" text-white inline-block border-b border-black dark:border-white pb-2 uppercase tracking-[0.3em] text-xs hover:opacity-50 transition-opacity font-medium"
                        >
                            What's on your mind?
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
