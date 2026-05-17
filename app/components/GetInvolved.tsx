"use client";

import { useState } from "react";

export default function GetInvolved() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mail.dialabs@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="get-involved" className="relative bg-white dark:bg-black text-black dark:text-white border-t border-dashed border-black/20 dark:border-white/20 overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-2/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-3/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
      </div>

      {/* CTA / Get Involved Section */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 md:py-28 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-1 text-xs md:text-sm font-mono text-black/50 dark:text-white/40">
              <span>[ 04 // JOIN THE LAB ]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Let's build together.
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Whether you are a developer looking to push the boundaries of browser-local intelligence, a researcher wanting to validate prior-art citations, or a creator looking to build AI-driven applications—we would love to collaborate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="border border-dashed border-black/25 dark:border-white/20 p-5 bg-black/[0.01] dark:bg-white/[0.01] transition-all duration-300 hover:border-black/50 dark:hover:border-white/40">
                <span className="font-mono text-[10px] text-[#ff4500] uppercase tracking-wider block mb-2">[ FOR DEVELOPERS ]</span>
                <h4 className="text-sm font-bold text-black dark:text-white mb-1">Open Source Contribution</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Fork our active repositories, open pull requests, request features, or build on top of our libraries.
                </p>
              </div>

              <div className="border border-dashed border-black/25 dark:border-white/20 p-5 bg-black/[0.01] dark:bg-white/[0.01] transition-all duration-300 hover:border-black/50 dark:hover:border-white/40">
                <span className="font-mono text-[10px] text-[#ff4500] uppercase tracking-wider block mb-2">[ FOR RESEARCHERS ]</span>
                <h4 className="text-sm font-bold text-black dark:text-white mb-1">Collaborative AI Research</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Help us evaluate LLM intelligence vectors, design local model acceleration scripts, or run safety auditing benchmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Console / Copy Email Card */}
          <div className="lg:col-span-5 border border-black dark:border-white bg-black/[0.02] dark:bg-white/[0.02] p-8 relative flex flex-col justify-between min-h-[280px] transition-all duration-300">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-[#ff4500] uppercase tracking-widest">[ CONTACT ]</span>
              <h4 className="text-xl font-bold tracking-tight">Get in touch.</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Have a project to discuss, want to collaborate on research, or integrate our tools? Drop us a line.
              </p>
            </div>

            {/* Live Copyable Email Box */}
            <div className="space-y-3 mt-6">
              <span className="font-mono text-[9px] text-black/45 dark:text-white/35 uppercase tracking-widest block">[ CORRESPONDENCE ADDRESS ]</span>
              <div className="flex border border-black dark:border-white overflow-hidden bg-white dark:bg-black transition-all duration-300">
                <div className="flex-1 font-mono text-xs px-3 py-3 border-r border-black dark:border-white flex items-center select-all truncate text-black dark:text-white bg-transparent">
                  mail.dialabs@gmail.com
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] font-bold tracking-wider hover:bg-[#ff4500] dark:hover:bg-[#ff4500] hover:text-white dark:hover:text-white transition-all duration-150 active:scale-95 whitespace-nowrap min-w-[90px]"
                >
                  {copied ? "COPIED!" : "COPY"}
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-dashed border-black/15 dark:border-white/15 flex items-center justify-between font-mono text-[9px] text-black/40 dark:text-white/45">
              <span>EST. 2026</span>
              <span>CONNECTION ACTIVE ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny Footer Section */}
      <div className="relative z-10 border-t border-dashed border-black/20 dark:border-white/20 bg-black/[0.01] dark:bg-white/[0.01] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Brand Details */}
          <div className="space-y-3 text-center md:text-left select-none">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="../icon0.svg" alt="DiaLabs Logo" className="w-6 h-6 dark:invert" />
              <span className="font-bold tracking-tight text-lg">DiaLabs</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              Building AI products that solve real-world problems.
            </p>
          </div>

          {/* Quick links & Credits */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 font-mono text-xs">
              <a
                href="https://patentiq.dialabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                PatentIQ ↗
              </a>
              <a
                href="https://chat.dialabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                Dia Chat ↗
              </a>
              <a
                href="https://mod.dialabs.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-150"
              >
                Dia Moderator ↗
              </a>
              <a
                href="https://github.com/dialabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                GitHub
              </a>
            </div>

            {/* Foundational Team Credits */}
            <div className="text-[10px] font-mono text-black/50 dark:text-white/40 text-center md:text-right">
              <span>Handcrafted by </span>
              <a
                href="https://github.com/CodeXdhruv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#ff4500] dark:hover:text-[#ff4500] font-bold transition-colors duration-200"
              >
                Dhruv
              </a>
              <span>, </span>
              <a
                href="https://github.com/iteshxt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#ff4500] dark:hover:text-[#ff4500] font-bold transition-colors duration-200"
              >
                Itesh
              </a>
              <span> & </span>
              <a
                href="https://github.com/akanupam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-[#ff4500] dark:hover:text-[#ff4500] font-bold transition-colors duration-200"
              >
                Aditya
              </a>
            </div>

            {/* Copyright & Date */}
            <div className="text-[9px] font-mono text-black/40 dark:text-white/30 select-none">
              © {new Date().getFullYear()} DIALABS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
