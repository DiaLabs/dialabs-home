"use client";

import { useEffect, useState } from "react";

export default function WhoWeAre() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="who-we-are" className="relative py-24 md:py-32 px-6 bg-white dark:bg-black text-black dark:text-white border-t border-dashed border-black/20 dark:border-white/20 overflow-hidden">
      {/* Decorative Grid Lines - Brutalist Style */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-2/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-3/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-dashed border-black/20 dark:border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs md:text-sm font-mono text-black/50 dark:text-white/40">
              <span>[ THE TEAM ]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Meet the minds.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Three obsessive builders engineering products combining AI, privacy, and modern systems architecture.
            </p>
          </div>
          <div className="font-mono text-xs md:text-sm text-black/40 dark:text-white/40 flex items-center gap-2 select-none">
            <span>[ 02 ]</span>
            <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
            <span>[ FOUNDERS ]</span>
          </div>
        </div>
      </div>

      {/* Asymmetrical Brutalist Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* Founder 1: Dhruv Sen (D) */}
        <div className={`group border border-dashed border-black/20 dark:border-white/20 rounded-none flex flex-col bg-white/[0.02] dark:bg-black/[0.02] hover:bg-white/[0.05] dark:hover:bg-black/[0.05] hover:border-black/50 dark:hover:border-white/50 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } transition-all duration-1000 delay-100`}>
          {/* Visual Block - Structural Nodes (ML / Systems Architecture) */}
          <div className="aspect-[4/3] bg-black/[0.02] dark:bg-white/[0.02] border-b border-dashed border-black/20 dark:border-white/20 relative overflow-hidden flex items-center justify-center group-hover:bg-black/[0.05] dark:group-hover:bg-white/[0.05] transition-all duration-500">
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-nodes" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" className="fill-black/30 dark:fill-white/30" />
                  <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-black/[0.05] dark:stroke-white/[0.05]" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-nodes)" />
              <line x1="20" y1="20" x2="60" y2="40" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="60" y1="40" x2="80" y2="80" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="20" y1="20" x2="40" y2="80" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="40" y1="80" x2="80" y2="80" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" strokeDasharray="1,1" />
              
              <circle cx="20" cy="20" r="3" className="fill-black dark:fill-white animate-pulse" />
              <circle cx="60" cy="40" r="4" className="fill-[#ff4500]" />
              <circle cx="80" cy="80" r="3" className="fill-black dark:fill-white" />
              <circle cx="40" cy="80" r="3" className="fill-black dark:fill-white" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none transition-all duration-500">
              ML_ARCH.SYS
            </div>
          </div>

          {/* Brutalist Divider Banner with big Letter */}
          <div className="flex border-b border-dashed border-black/20 dark:border-white/20">
            <div className="w-12 h-12 flex items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 font-mono text-xl font-bold bg-black/5 dark:bg-white/5 text-[#ff4500] select-none transition-all duration-500">
              D
            </div>
            <div className="flex-1 flex items-center pl-4 font-mono text-xs text-black/50 dark:text-white/40 tracking-wider uppercase select-none transition-colors duration-500">
              [ Architect ]
            </div>
          </div>

          {/* Card Content Info */}
          <div className="p-6 flex-1 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2 text-black dark:text-white transition-colors duration-500">Dhruv Sen</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                Builds the robust core architectures, serverless frameworks, and deep ML pipelines. Prefers making complex systems scale silently in the background.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href="https://codexdhruv.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  WEBSITE ↗
                </a>
                <a
                  href="https://github.com/CodeXdhruv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/codexdhruv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
            <div className="text-xs font-mono text-black/45 dark:text-white/35 flex items-center justify-between border-t border-dashed border-black/10 dark:border-white/10 pt-4 mt-auto select-none transition-all duration-500">
              <span>[ SYSTEMS ]</span>
              <span>01 // DHRUV</span>
            </div>
          </div>
        </div>

        {/* Founder 2: Itesh Singh Tomar (I) */}
        <div className={`group border border-dashed border-black/20 dark:border-white/20 rounded-none flex flex-col bg-white/[0.02] dark:bg-black/[0.02] hover:bg-white/[0.05] dark:hover:bg-black/[0.05] hover:border-black/50 dark:hover:border-white/50 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } transition-all duration-1000 delay-200`}>
          {/* Visual Block - Systems Layout Wireframe Blueprint */}
          <div className="aspect-[4/3] bg-black/[0.02] dark:bg-white/[0.02] border-b border-dashed border-black/20 dark:border-white/20 relative overflow-hidden flex items-center justify-center group-hover:bg-black/[0.05] dark:group-hover:bg-white/[0.05] transition-all duration-500">
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-dots" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" className="fill-black/20 dark:fill-white/20" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-dots)" />
              <rect x="15" y="15" width="70" height="70" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" fill="none" />
              <line x1="15" y1="45" x2="85" y2="45" className="stroke-black/30 dark:stroke-white/30 stroke-dashed" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="45" y1="15" x2="45" y2="85" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              
              <rect x="12" y="12" width="6" height="6" className="fill-[#ff4500]" />
              <rect x="82" y="12" width="6" height="6" className="fill-black dark:fill-white" />
              <rect x="12" y="82" width="6" height="6" className="fill-black dark:fill-white" />
              <rect x="82" y="82" width="6" height="6" className="fill-black dark:fill-white animate-pulse" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none transition-all duration-500">
              SYS_DSGN.LAY
            </div>
          </div>

          {/* Brutalist Divider Banner with big Letter */}
          <div className="flex border-b border-dashed border-black/20 dark:border-white/20">
            <div className="w-12 h-12 flex items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 font-mono text-xl font-bold bg-black/5 dark:bg-white/5 text-[#ff4500] select-none transition-all duration-500">
              I
            </div>
            <div className="flex-1 flex items-center pl-4 font-mono text-xs text-black/50 dark:text-white/40 tracking-wider uppercase select-none transition-colors duration-500">
              [ Design ]
            </div>
          </div>

          {/* Card Content Info */}
          <div className="p-6 flex-1 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2 text-black dark:text-white transition-colors duration-500">Itesh Singh Tomar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                Transforms complex, heavy data structures into gorgeous, fluid frontends. Believes high-performance tech deserves a premium screen presence.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href="https://www.iteshxt.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  WEBSITE ↗
                </a>
                <a
                  href="https://github.com/iteshxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://linkedin.com/in/iteshxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
            <div className="text-xs font-mono text-black/45 dark:text-white/35 flex items-center justify-between border-t border-dashed border-black/10 dark:border-white/10 pt-4 mt-auto select-none transition-all duration-500">
              <span>[ INTERFACE ]</span>
              <span>02 // ITESH</span>
            </div>
          </div>
        </div>

        {/* Founder 3: Aditya Kumar Anupam (A) */}
        <div className={`group border border-dashed border-black/20 dark:border-white/20 rounded-none flex flex-col bg-white/[0.02] dark:bg-black/[0.02] hover:bg-white/[0.05] dark:hover:bg-black/[0.05] hover:border-black/50 dark:hover:border-white/50 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } transition-all duration-1000 delay-300`}>
          {/* Visual Block - Mathematical Trend Matrix Graph */}
          <div className="aspect-[4/3] bg-black/[0.02] dark:bg-white/[0.02] border-b border-dashed border-black/20 dark:border-white/20 relative overflow-hidden flex items-center justify-center group-hover:bg-black/[0.05] dark:group-hover:bg-white/[0.05] transition-all duration-500">
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <line x1="15" y1="85" x2="85" y2="85" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="15" y1="15" x2="15" y2="85" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              
              <path d="M 15 75 Q 40 45, 85 25" fill="none" className="stroke-[#ff4500]" strokeWidth="0.75" />
              <path d="M 15 80 Q 40 60, 85 35" fill="none" className="stroke-black/20 dark:stroke-white/20 stroke-dashed" strokeWidth="0.5" strokeDasharray="2,2" />
              
              <circle cx="30" cy="65" r="2.5" className="fill-black dark:fill-white" />
              <circle cx="45" cy="50" r="2.5" className="fill-black dark:fill-white animate-pulse" />
              <circle cx="55" cy="35" r="2.5" className="fill-black dark:fill-white" />
              <circle cx="70" cy="30" r="2.5" className="fill-black dark:fill-white" />
              <circle cx="80" cy="20" r="2.5" className="fill-black dark:fill-white" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none transition-all duration-500">
              ALG_OPT.CALC
            </div>
          </div>

          {/* Brutalist Divider Banner with big Letter */}
          <div className="flex border-b border-dashed border-black/20 dark:border-white/20">
            <div className="w-12 h-12 flex items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 font-mono text-xl font-bold bg-black/5 dark:bg-white/5 text-[#ff4500] select-none transition-all duration-500">
              A
            </div>
            <div className="flex-1 flex items-center pl-4 font-mono text-xs text-black/50 dark:text-white/40 tracking-wider uppercase select-none transition-colors duration-500">
              [ Optimize ]
            </div>
          </div>

          {/* Card Content Info */}
          <div className="p-6 flex-1 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-2 text-black dark:text-white transition-colors duration-500">Aditya Kumar Anupam</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                Squeezes maximum efficiency out of NLP queries, semantic indices, and custom algorithms. Finding the fastest path from raw data to deep insight.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <a
                  href="https://www.aditanupam.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  WEBSITE ↗
                </a>
                <a
                  href="https://github.com/akanupam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/aditanupam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 px-2 py-1 text-black dark:text-white transition-all duration-500"
                >
                  LINKEDIN ↗
                </a>
              </div>
            </div>
            <div className="text-xs font-mono text-black/45 dark:text-white/35 flex items-center justify-between border-t border-dashed border-black/10 dark:border-white/10 pt-4 mt-auto select-none transition-all duration-500">
              <span>[ ALGORITHMS ]</span>
              <span>03 // ADITYA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
