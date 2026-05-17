"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import GetInvolved from "./components/GetInvolved";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-to-top button when scrolled past the hero section
      if (window.scrollY > 500) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <GetInvolved />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-10 h-10 border border-black/20 dark:border-white/20 bg-white/80 dark:bg-black/80 backdrop-blur-xs text-black/60 dark:text-white/60 flex items-center justify-center transition-all duration-300 select-none hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white active:scale-95 ${
          showScroll
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <span className="font-mono text-sm font-bold">↑</span>
      </button>
    </div>
  );
}
