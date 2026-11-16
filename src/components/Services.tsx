"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Services() {
    const [activeImage, setActiveImage] = useState(0);
    const [isDark, setIsDark] = useState(false);

    const services = [
        {
            title: "Standard Package",
            description: "Essential newborn photography for capturing the basics.",
            images: ["/standard-1.webp", "/standard-2.webp"]
        },
        {
            title: "Premium Package",
            description: "Extensive session with multiple setups and detailed editing.",
            images: ["/premium-1.webp", "/premium-2.webp"]
        },
        {
            title: "Family Session",
            description: "Full family portraits including the newborn and parents.",
            images: ["/family-1.webp", "/family-2.webp"]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev === 0 ? 1 : 0));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Track dark mode
    useEffect(() => {
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" style={{ backgroundColor: isDark ? '#1a1a2e' : '#f3f7ffff' }} className="py-32 md:py-48 transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight text-center md:text-left">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-16">
                    {services.map((service, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[3/4] bg-zinc-200 dark:bg-zinc-700 mb-8 overflow-hidden relative rounded-2xl">
                                {/* Image 1 */}
                                <Image
                                    src={service.images[0]}
                                    alt={`${service.title} - Photo 1`}
                                    fill
                                    className={`object-cover transition-opacity duration-1000 ease-in-out ${activeImage === 0 ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                                {/* Image 2 */}
                                <Image
                                    src={service.images[1]}
                                    alt={`${service.title} - Photo 2`}
                                    fill
                                    className={`object-cover transition-opacity duration-1000 ease-in-out ${activeImage === 1 ? "opacity-100" : "opacity-0"
                                        }`}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-light mb-3 group-hover:opacity-70 transition-opacity">
                                {service.title}
                            </h3>
                            <p className="opacity-60 font-sans text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-6 overflow-hidden h-0 group-hover:h-6 transition-all duration-500">
                                <span className="text-[10px] uppercase tracking-widest border-b border-current">Inquire Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
