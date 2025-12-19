"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Book", href: "#appointments" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 text-white ${isScrolled
                ? "bg-black/80 backdrop-blur-md py-4 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2 md:gap-4 lg:ml-8 lg:scale-110 origin-left transition-all duration-300">
                <Image
                    src="/favicon.svg"
                    alt="Akllyl Logo"
                    width={50}
                    height={50}
                    className="opacity-90 animate-fade-in-up"
                />
                <div className="text-2xl font-bold tracking-[0.2em] uppercase sm:pl-2">አክሊል</div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-[13px] uppercase tracking-[0.2em] items-center">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className="hover:opacity-50 transition-opacity underline-offset-8 hover:underline decoration-1">
                            {link.name}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#contact"
                        className="border border-white px-6 py-2 transition-all hover:bg-white hover:text-black"
                    >
                        Contact
                    </a>
                </li>
            </ul>

            {/* Mobile Toggle */}
            <button
                className="md:hidden flex flex-col gap-1 z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <div className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-brand-bg dark:bg-black z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 overflow-hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-3xl uppercase tracking-[0.3em] font-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="mt-6 border border-black px-12 py-4 uppercase tracking-widest text-base dark:border-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Contact Us
                </a>
            </div>
        </nav>
    );
}
