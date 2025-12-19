"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            style={{
                backgroundColor: isDark ? '#f3f7ffff' : '#253551',
                color: isDark ? '#000000' : '#f3f7ffff'
            }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all text-xs uppercase tracking-widest font-bold"
            aria-label="Toggle theme"
        >
            {isDark ? "Light" : "Dark"}
        </button>
    );
}
