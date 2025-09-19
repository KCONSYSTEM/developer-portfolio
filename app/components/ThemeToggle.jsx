"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null; // prevents hydration mismatch

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl border shadow-sm hover:shadow-md hover:scale-105 transition"
        >
            {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
                    <FiMoon className="w-5 h-5 text-gray-700" />
            )}
        </button>
    );
}
