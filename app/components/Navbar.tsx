"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-8">
          {/* Left Section - Logo */}
          <div className="border-2 border-dashed border-white/30 px-6 py-3 hover:border-white/60 transition-colors duration-300">
            <Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-75 transition-opacity duration-200">
              DiaLabs
            </Link>
          </div>

          {/* Center Section - Navigation */}
          <div className="border-2 border-dashed border-white/30 px-8 py-3 hover:border-white/60 transition-colors duration-300">
            <div className="flex gap-8">
              <Link
                href="#who-we-are"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Who We Are
              </Link>
              <Link
                href="#what-we-do"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                What We Do
              </Link>
              <Link
                href="#get-involved"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Get Involved
              </Link>
            </div>
          </div>

          {/* Right Section - Theme & GitHub */}
          <div className="border-2 border-dashed border-white/30 px-6 py-3 hover:border-white/60 transition-colors duration-300 flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white hover:opacity-75 transition-opacity duration-200 p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.828-2.828a2 2 0 112.828-2.828l2.828 2.828a2 2 0 11-2.828 2.828zM2.05 9.464a1 1 0 101.414-1.414l-1.414 1.414zm2.828-2.828a2 2 0 112.828-2.828L4.878 6.636a2 2 0 11-2.828 2.828zM13.586 1.586a2 2 0 112.828 2.828l-2.828-2.828zM9.464 17.95a1 1 0 101.414 1.414l-1.414-1.414zm2.828 2.828a2 2 0 112.828-2.828l-2.828 2.828zM1.586 13.586a2 2 0 112.828 2.828l-2.828 2.828z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-75 transition-opacity duration-200 flex items-center gap-2"
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
    </nav>
  );
}
