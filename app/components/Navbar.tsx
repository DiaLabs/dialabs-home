"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center">
        <div className="max-w-7xl w-full mx-auto px-3 md:px-6 py-2 md:py-4">
          <div className={`border-2 border-dashed border-black/20 dark:border-white/30 hover:border-black/40 dark:hover:border-white/60 transition-all duration-300 px-3 md:px-6 py-2 md:py-3 flex items-center justify-between gap-2 md:gap-0 ${
            scrolled ? "bg-white/95 dark:bg-black/95 backdrop-blur-xs" : ""
          }`}>
          {/* Left Section - Logo */}
          <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight text-black dark:text-white hover:opacity-75 transition-opacity duration-200">
            DiaLabs
          </Link>

          {/* Center Section - Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-12 flex-1 justify-center">
            <Link
              href="#who-we-are"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Who We Are
            </Link>
            <Link
              href="#what-we-do"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              What We Do
            </Link>
            <Link
              href="#get-involved"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>

          {/* Right Section - Theme Toggle & GitHub */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Animated Theme Toggle - Self Contained */}
            <div className="hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300 px-2 md:px-4 py-2 md:py-3 flex items-center justify-center">
              <AnimatedThemeToggler variant="square" className="w-5 h-5" />
            </div>

            {/* GitHub Link - Self Contained */}
            <a
              href="https://github.com/dialabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300 px-2 md:px-4 py-2 md:py-3 text-black dark:text-white flex items-center gap-2 text-xs md:text-sm"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.898-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.274.098-2.654 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.38.203 2.401.1 2.654.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
