"use client";

import { useEffect, useState } from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex items-start justify-center pt-32 md:pt-40 pb-20 px-6 overflow-hidden bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Meteors Background - Positioned absolutely */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <Meteors />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10 border border-dashed border-black/20 dark:border-white/20 px-6 py-12 md:px-12 md:py-16 bg-white/[0.03] dark:bg-black/[0.03] rounded-none">
        {/* Main Heading */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Welcome to
            <br />
            DiaLabs.
          </h1>
        </div>

        {/* Description */}
        <div
          className={`mb-12 transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Thoughtfully designed products combining AI, privacy, and modern engineering into tools built for practical use.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#what-we-do"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium flex items-center justify-center gap-2 transition-all duration-150 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-100 active:bg-gray-900 dark:active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            <span>Explore Our Projects</span>
            <span className="inline-block group-hover:animate-arrow-zoom">→</span>
          </a>
          <a
            href="https://github.com/dialabs"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-medium transition-all duration-150 hover:scale-105 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.898-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.274.098-2.654 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.38.203 2.401.1 2.654.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Star Us on GitHub</span>
            <span className="inline-block">★</span>
          </a>
        </div>

        {/* Badge/Tags */}
        <div
          className={`mt-16 flex flex-wrap gap-4 justify-center text-sm transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.5m-11-4h8m-8 3h5" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
            Open Source
          </div>

          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5L3 5.5v5c0 3.86 2.29 7.24 5.5 8.83 3.21-1.59 5.5-4.97 5.5-8.83v-5l-3-3.5z" />
            </svg>
            Building in Public
          </div>
        </div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10 select-none">
        <span className="text-[10px] uppercase tracking-[0.2em] text-black/45 dark:text-white/35 font-mono">Scroll</span>
        <svg className="w-3.5 h-3.5 stroke-black/50 dark:stroke-white/50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="square" strokeLinejoin="miter" d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
