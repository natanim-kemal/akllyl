"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function TikTokEmbed({ videoUrl, name, link, icon }: { videoUrl: string; name: string; link: string; icon: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    // Extract video ID from URL
    const videoId = videoUrl.split('/video/')[1]?.split('?')[0] || '';

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="aspect-square bg-black overflow-hidden relative group shadow-lg rounded-2xl no-scrollbar">
            {/* TikTok Embed Container */}
            {isMounted && (
                <div className="absolute inset-0 w-full h-full flex items-center justify-center no-scrollbar overflow-hidden">
                    <iframe
                        src={`https://www.tiktok.com/embed/v2/${videoId}?hideControls=1`}
                        className="w-full h-full scale-[1.8] origin-center"
                        style={{ border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            )}

            {/* Bottom Label - Links to social */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-2 text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20 hover:from-black transition-all duration-300"
                aria-label={`View on ${name}`}
            >
                {icon}
                <span className="text-sm font-bold uppercase tracking-widest">{name}</span>
            </a>
        </div>
    );
}

export default function Gallery() {
    const [isDark, setIsDark] = useState(false);

    // Track dark mode
    useEffect(() => {
        const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDark();
        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const socialCards = [
        {
            name: "Instagram",
            videoUrl: "https://www.tiktok.com/@akllylnewbornstudio/video/7250725835148233990",
            link: "https://www.instagram.com/akllyl_newborn_studio",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: "TikTok",
            videoUrl: "https://www.tiktok.com/@akllylnewbornstudio/video/7213657705993538821",
            link: "https://www.tiktok.com/@akllylnewbornstudio",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
            )
        },
        {
            name: "Facebook",
            videoUrl: "https://www.tiktok.com/@akllylnewbornstudio/video/7428195149974637830",
            link: "https://web.facebook.com/people/Akllyl-Newborn-Photography/100064742713876/",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: "Studio",
            image: "/preview.png",
            link: "https://maps.app.goo.gl/7h9w8SW4NRmbJqvc9",
            isImage: true,
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="social" style={{ backgroundColor: '#000000', color: '#ffffff' }} className="py-32 md:py-48 transition-colors duration-500">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight text-white">
                    Follow Us on Social
                </h2>

                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-20 max-w-2xl mx-auto">
                    {socialCards.map((card) => (
                        card.isImage ? (
                            // Studio Image Card
                            <a
                                key={card.name}
                                href={card.link}
                                className="aspect-square bg-zinc-800 overflow-hidden relative group cursor-pointer shadow-lg rounded-2xl"
                            >
                                <Image
                                    src={card.image!}
                                    alt={`${card.name} Preview`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {card.icon}
                                    <span className="text-sm font-bold uppercase tracking-widest">{card.name}</span>
                                </div>
                            </a>
                        ) : (
                            // TikTok Embed Card
                            <TikTokEmbed
                                key={card.name}
                                videoUrl={card.videoUrl!}
                                name={card.name}
                                link={card.link}
                                icon={card.icon}
                            />
                        )
                    ))}
                </div>

                <p className="text-sm opacity-60 max-w-md mx-auto">
                    Stay connected with us for behind-the-scenes content, tips, and our latest photography work.
                </p>
            </div>
        </section>
    );
}
