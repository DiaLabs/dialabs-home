"use client";

import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  repo: string;
  svgType: "chat" | "mod" | "patent" | "more";
  tag: string;
  liveUrl: string;
  options: {
    1: {
      tagline: string;
      description: string;
      tech: string[];
    };
    2: {
      subtitle: string;
      description: string;
      highlights: { title: string; desc: string }[];
      tech: string[];
    };
    3: {
      description: string;
      tech: string[];
    };
  };
}

export default function WhatWeDo() {
  const [mounted, setMounted] = useState(false);
  const [activeStyle, setActiveStyle] = useState<1 | 2 | 3>(3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects: Project[] = [
    {
      id: "patent-iq",
      name: "PatentIQ",
      repo: "github.com/dialabs/patent-iq",
      svgType: "patent",
      tag: "PATENT_IQ.EVAL",
      liveUrl: "https://patentiq.dialabs.tech",
      options: {
        1: {
          tagline: "AI patent evaluation and validation platform.",
          description: "It extracts and cross-references patent data in real-time to generate instant, audit-ready patentability scores and detailed PDF reports without the risk of AI hallucinations.",
          tech: ["Next.js", "Cloudflare Workers", "Gemini LLM", "SerpAPI"],
        },
        2: {
          subtitle: "Serverless Patent Evaluation Engine",
          description: "A decoupled, serverless platform that automates invention disclosure scoring and prior-art validation.",
          highlights: [
            {
              title: "Real-Time Verification",
              desc: "Cross-checks cited patent IDs in parallel using Google Patents via SerpAPI to completely eliminate hallucinated citations.",
            },
            {
              title: "Advanced Analytics",
              desc: "Uses a custom 11-dimension LLM rubric to rigorously evaluate novelty, inventive steps, and market commercial viability.",
            },
            {
              title: "On-Demand Reports",
              desc: "Generates beautifully structured, print-ready PDF evaluation summaries directly on the client-side using pdfMake.",
            },
          ],
          tech: ["Next.js 16", "TypeScript", "Cloudflare Workers", "Express", "Gemini", "SerpAPI", "pdfMake"],
        },
        3: {
          description: "PatentIQ is an automated screening tool designed to streamline patent transitions. By linking a serverless Cloudflare Workers backend with an Express LLM microservice, the platform parses patent documents, validates prior-art citations via SerpAPI, and delivers a rigorous 11-dimension patentability score. Features an interactive dashboard and dynamic, on-demand clientside PDF generation.",
          tech: ["Next.js", "Cloudflare Workers", "Gemini AI", "SerpAPI", "pdfMake", "TypeScript"],
        },
      },
    },
    {
      id: "dia-chat",
      name: "Dia Chat",
      repo: "github.com/dialabs/dia-chat",
      svgType: "chat",
      tag: "DIA_CHAT.LOCAL",
      liveUrl: "https://chat.dialabs.tech",
      options: {
        1: {
          tagline: "Privacy-first, on-device AI companion.",
          description: "Runs advanced language models locally on your browser or device to deliver intelligent conversational assistance without sending your data to external servers.",
          tech: ["Next.js", "WebLLM", "Transformers.js", "WebGPU"],
        },
        2: {
          subtitle: "Local-First AI Companion",
          description: "A private, client-side conversational AI that runs entirely on-device to guarantee absolute user data privacy.",
          highlights: [
            {
              title: "On-Device Execution",
              desc: "Leverages WebLLM and Transformers.js to execute LLMs directly in-browser using WebGPU acceleration.",
            },
            {
              title: "Zero Server Overhead",
              desc: "Operates fully offline with zero external API dependencies, eliminating central logging and subscription fees.",
            },
            {
              title: "Seamless Experience",
              desc: "Features secure voice-to-text, customizable layout themes, and Firebase auth for synchronized secure sessions.",
            },
          ],
          tech: ["Next.js 16", "React 19", "WebLLM", "Transformers.js", "Firebase", "WebGPU"],
        },
        3: {
          description: "Dia Chat is a local-first conversational interface designed to establish absolute user privacy. By leveraging browser-native WebGPU acceleration, the application executes WebLLM and Transformers.js models directly within the user's environment. This enables high-performance real-time chat, voice synthesis, and session storage via Firebase without ever exposing sensitive interaction logs or identity data to external AI servers.",
          tech: ["Next.js", "WebLLM", "Transformers.js", "WebGPU", "React 19", "Firebase"],
        },
      },
    },
    {
      id: "dia-moderator",
      name: "Dia Moderator",
      repo: "github.com/dialabs/dia-mod",
      svgType: "mod",
      tag: "DIA_MOD.SAFETY",
      liveUrl: "https://mod.dialabs.tech",
      options: {
        1: {
          tagline: "AI-driven multi-platform community moderation system.",
          description: "Automatically flags spam, filters toxic text, and generates real-time safety reports for Discord, WhatsApp, and Telegram in a centralized dashboard.",
          tech: ["Next.js", "Discord.js", "WhatsApp API", "Telegram API", "Gemini AI"],
        },
        2: {
          subtitle: "Unified Community Safety Engine",
          description: "A multi-platform moderation system that secures digital workspaces and community channels from one hub.",
          highlights: [
            {
              title: "Multi-Platform Sync",
              desc: "Connects and monitors active conversations across Discord, WhatsApp, and Telegram through custom webhooks.",
            },
            {
              title: "Intelligent Filtering",
              desc: "Uses Gemini LLM and tailored NLP rules to identify malicious patterns, slurs, and spam bots instantly.",
            },
            {
              title: "Real-Time Insights",
              desc: "Provides instant WebSocket-driven telemetry, safety score tracking, and automated summaries of flagged incidents.",
            },
          ],
          tech: ["Next.js 16", "Node.js", "Express", "Socket.io", "Gemini AI", "Discord.js", "Telegram API"],
        },
        3: {
          description: "Dia Moderator is an automated safety layer designed to consolidate fragmented community management. By linking a unified dashboard with lightweight bot connectors for Discord, WhatsApp, and Telegram, the platform intercepts and analyzes social streams in real-time. It mitigates toxic behavior and filters automated spam using Gemini AI, while delivering instant WebSocket-powered activity metrics and community health scoring directly to administrators.",
          tech: ["Next.js", "Node.js", "Express", "Socket.io", "Gemini AI", "Discord.js", "Telegram API"],
        },
      },
    },
  ];

  // Helper to render customized project visual wireframes
  const renderVisual = (type: "chat" | "mod" | "patent" | "more", activeTag: string) => {
    switch (type) {
      case "chat":
        return (
          <>
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-chat" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="0.75" className="fill-black/20 dark:fill-white/20" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-chat)" />
              {/* Conversation nodes */}
              <rect x="15" y="20" width="30" height="12" rx="2" className="fill-none stroke-black/35 dark:stroke-white/35" strokeWidth="0.5" />
              <line x1="20" y1="26" x2="35" y2="26" className="stroke-black/40 dark:stroke-white/40" strokeWidth="0.75" />
              
              <path d="M 45 26 C 60 26, 50 50, 65 50" fill="none" className="stroke-[#ff4500]" strokeWidth="0.75" strokeDasharray="1,1" />
              
              <rect x="55" y="44" width="30" height="12" rx="2" className="fill-none stroke-black/35 dark:stroke-white/35" strokeWidth="0.5" />
              <line x1="60" y1="50" x2="80" y2="50" className="stroke-[#ff4500]" strokeWidth="0.75" />
              
              {/* Local mesh web */}
              <circle cx="20" cy="75" r="2" className="fill-black dark:fill-white" />
              <circle cx="40" cy="80" r="3" className="fill-[#ff4500] animate-pulse" />
              <circle cx="60" cy="70" r="2.5" className="fill-black dark:fill-white" />
              <circle cx="80" cy="75" r="2" className="fill-black dark:fill-white" />
              <line x1="20" y1="75" x2="40" y2="80" className="stroke-black/20 dark:stroke-white/20" strokeWidth="0.5" />
              <line x1="40" y1="80" x2="60" y2="70" className="stroke-black/20 dark:stroke-white/20" strokeWidth="0.5" />
              <line x1="60" y1="70" x2="80" y2="75" className="stroke-black/20 dark:stroke-white/20" strokeWidth="0.5" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none">
              {activeTag}
            </div>
          </>
        );
      case "mod":
        return (
          <>
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-mod" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" className="stroke-black/[0.05] dark:stroke-white/[0.05]" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-mod)" />
              {/* Center security shield hub */}
              <polygon points="50,20 70,30 70,55 50,75 30,55 30,30" fill="none" className="stroke-[#ff4500]" strokeWidth="0.75" />
              <circle cx="50" cy="48" r="4" className="fill-black dark:fill-white animate-pulse" />
              
              {/* Connecting platform nodes */}
              <line x1="50" y1="20" x2="50" y2="10" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <circle cx="50" cy="10" r="2.5" className="fill-black dark:fill-white" />
              <text x="44" y="6" className="fill-black/50 dark:fill-white/40 font-mono text-[5px]">DSC</text>
   
              <line x1="30" y1="55" x2="15" y2="65" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <circle cx="15" cy="65" r="2.5" className="fill-black dark:fill-white" />
              <text x="9" y="73" className="fill-black/50 dark:fill-white/40 font-mono text-[5px]">WA</text>
   
              <line x1="70" y1="55" x2="85" y2="65" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <circle cx="85" cy="65" r="2.5" className="fill-black dark:fill-white" />
              <text x="79" y="73" className="fill-black/50 dark:fill-white/40 font-mono text-[5px]">TG</text>
              
              <path d="M 20 40 L 80 40" className="stroke-black/25 dark:stroke-white/25 stroke-dashed" strokeWidth="0.5" strokeDasharray="2,2" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none">
              {activeTag}
            </div>
          </>
        );
      case "patent":
        return (
          <>
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-patent" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" className="fill-black/20 dark:fill-white/20" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-patent)" />
              {/* Document sheet representation */}
              <rect x="25" y="15" width="50" height="70" className="stroke-black/35 dark:stroke-white/35" strokeWidth="0.5" fill="none" />
              
              {/* Cross-referencing prior-art rays */}
              <line x1="25" y1="30" x2="75" y2="30" className="stroke-black/25 dark:stroke-white/25 stroke-dashed" strokeWidth="0.5" strokeDasharray="1,1" />
              <line x1="25" y1="50" x2="75" y2="55" className="stroke-[#ff4500]" strokeWidth="0.5" />
              <line x1="25" y1="70" x2="75" y2="65" className="stroke-black/25 dark:stroke-white/25 stroke-dashed" strokeWidth="0.5" strokeDasharray="2,2" />
   
              {/* 11-dimension evaluation graph */}
              <circle cx="50" cy="50" r="16" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" fill="none" />
              <polygon points="50,34 58,42 66,50 56,58 50,66 42,56 34,50 44,42" fill="none" className="stroke-[#ff4500]" strokeWidth="0.75" />
              
              <circle cx="50" cy="34" r="2" className="fill-black dark:fill-white" />
              <circle cx="50" cy="66" r="2" className="fill-black dark:fill-white" />
              <circle cx="34" cy="50" r="2" className="fill-black dark:fill-white animate-pulse" />
              <circle cx="66" cy="50" r="2.5" className="fill-[#ff4500]" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none">
              {activeTag}
            </div>
          </>
        );
      case "more":
        return (
          <>
            <svg className="w-full h-full opacity-40 dark:opacity-30" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid-more" width="12" height="12" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="0.5" className="fill-black/15 dark:fill-white/15" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-more)" />
              {/* Isometric architectural block stack */}
              <path d="M 50 20 L 80 35 L 50 50 L 20 35 Z" fill="none" className="stroke-[#ff4500]" strokeWidth="0.75" />
              <path d="M 50 50 L 80 65 L 50 80 L 20 65 Z" fill="none" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="80" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="20" y1="35" x2="20" y2="65" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              <line x1="80" y1="35" x2="80" y2="65" className="stroke-black/30 dark:stroke-white/30" strokeWidth="0.5" />
              
              <circle cx="50" cy="35" r="2.5" className="fill-black dark:fill-white animate-pulse" />
              <circle cx="50" cy="65" r="2.5" className="fill-black dark:fill-white" />
            </svg>
            <div className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black font-mono text-[10px] px-2 py-0.5 tracking-wider select-none">
              {activeTag}
            </div>
          </>
        );
    }
  };

  return (
    <section id="what-we-do" className="relative py-24 md:py-32 px-6 bg-white dark:bg-black text-black dark:text-white border-t border-dashed border-black/20 dark:border-white/20 overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-2/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
        <div className="absolute left-3/4 top-0 bottom-0 border-l border-dashed border-black/[0.04] dark:border-white/[0.04]" />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-dashed border-black/20 dark:border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs md:text-sm font-mono text-black/50 dark:text-white/40">
              <span>[ OUR PRODUCTS ]</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              What we do.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              We engineer production-grade local-first utilities, automated community safety suites, and serverless patent analytics.
            </p>
          </div>
          <div className="font-mono text-xs md:text-sm flex flex-col items-end gap-3 select-none">
            <div className="text-black/40 dark:text-white/40 flex items-center gap-2">
              <span>[ 01 ]</span>
              <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20" />
              <span>[ PRODUCTS ]</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-black/50 dark:text-white/45 bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/10 dark:border-white/10 px-3 py-1.5 rounded-none font-mono">
              <span className="text-[10px] tracking-wider text-black/45 dark:text-white/35 uppercase mr-1">VIEW:</span>
              <button
                onClick={() => setActiveStyle(3)}
                className={`transition-colors hover:text-black dark:hover:text-white uppercase tracking-wider ${
                  activeStyle === 3 ? "text-[#ff4500] font-bold" : ""
                }`}
              >
                NARRATIVE
              </button>
              <span className="text-black/20 dark:text-white/10 font-sans">/</span>
              <button
                onClick={() => setActiveStyle(2)}
                className={`transition-colors hover:text-black dark:hover:text-white uppercase tracking-wider ${
                  activeStyle === 2 ? "text-[#ff4500] font-bold" : ""
                }`}
              >
                COMPACT
              </button>
              <span className="text-black/20 dark:text-white/10 font-sans">/</span>
              <button
                onClick={() => setActiveStyle(1)}
                className={`transition-colors hover:text-black dark:hover:text-white uppercase tracking-wider ${
                  activeStyle === 1 ? "text-[#ff4500] font-bold" : ""
                }`}
              >
                GRID
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC LAYOUTS */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* STYLE 1: ULTRA-CONCISE & MODERN GRID CARDS */}
        {/* ========================================================================= */}
        {activeStyle === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const opt = project.options[1];
              return (
                <div
                  key={project.id}
                  className={`group border border-dashed border-black/20 dark:border-white/20 rounded-none flex flex-col bg-white/[0.01] dark:bg-black/[0.01] hover:bg-white/[0.03] dark:hover:bg-black/[0.03] hover:border-[#ff4500]/50 dark:hover:border-[#ff4500]/50 transition-all duration-500 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Visual Wireframe Block */}
                  <div className="aspect-[16/10] bg-black/[0.02] dark:bg-white/[0.02] border-b border-dashed border-black/20 dark:border-white/20 relative overflow-hidden flex items-center justify-center">
                    {renderVisual(project.svgType, project.tag)}
                  </div>

                  {/* Header Title Bar */}
                  <div className="flex border-b border-dashed border-black/20 dark:border-white/20">
                    <div className="w-12 h-12 flex items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 font-mono text-sm font-bold bg-black/5 dark:bg-white/5 text-[#ff4500] select-none">
                      {idx + 1}
                    </div>
                    <div className="flex-1 flex items-center pl-4 font-mono text-[10px] text-black/50 dark:text-white/40 tracking-wider uppercase select-none">
                      [ {project.name} ]
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight mb-2 text-black dark:text-white">{project.name}</h3>
                      <p className="text-xs text-black/75 dark:text-white/70 font-semibold mb-2 leading-relaxed">{opt.tagline}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{opt.description}</p>
                    </div>

                    <div className="border-t border-dashed border-black/10 dark:border-white/10 pt-4 mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {opt.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2 py-0.5 text-black/60 dark:text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-[10px] font-mono border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black py-2 block hover:bg-[#ff4500] dark:hover:bg-[#ff4500] hover:text-white dark:hover:text-white hover:border-[#ff4500] dark:hover:border-[#ff4500] transition-all duration-300"
                        >
                          LIVE APP ↗
                        </a>
                        <a
                          href={`https://${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 py-2 block text-black dark:text-white transition-all duration-300"
                        >
                          GITHUB
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* STYLE 2: COMPACT & PUNCHY (STANDARD DETAILED HIGHLIGHT CARDS) */}
        {/* ========================================================================= */}
        {activeStyle === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const opt = project.options[2];
              return (
                <div
                  key={project.id}
                  className={`group border border-dashed border-black/20 dark:border-white/20 rounded-none flex flex-col bg-white/[0.01] dark:bg-black/[0.01] hover:bg-white/[0.03] dark:hover:bg-black/[0.03] hover:border-black/50 dark:hover:border-white/50 transition-all duration-500 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Visual Wireframe Block */}
                  <div className="aspect-[16/10] bg-black/[0.02] dark:bg-white/[0.02] border-b border-dashed border-black/20 dark:border-white/20 relative overflow-hidden flex items-center justify-center">
                    {renderVisual(project.svgType, project.tag)}
                  </div>

                  {/* Header Title Bar */}
                  <div className="flex border-b border-dashed border-black/20 dark:border-white/20">
                    <div className="w-12 h-12 flex items-center justify-center border-r border-dashed border-black/20 dark:border-white/20 font-mono text-base font-bold bg-black/5 dark:bg-white/5 text-[#ff4500] select-none">
                      {idx + 1}
                    </div>
                    <div className="flex-1 flex items-center pl-4 font-mono text-xs text-black/50 dark:text-white/40 tracking-wider uppercase select-none">
                      {project.name} — {project.tag.split(".")[1]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight mb-1 text-black dark:text-white">{project.name}</h3>
                      <p className="text-xs font-mono text-[#ff4500] uppercase tracking-wider mb-4">{opt.subtitle}</p>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 border-l-2 border-black/10 dark:border-white/10 pl-3">
                        {opt.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-4 mb-6">
                        {opt.highlights.map((h, i) => (
                          <li key={i} className="text-xs leading-relaxed">
                            <strong className="text-black dark:text-white block font-semibold mb-0.5">
                              ▪ {h.title}
                            </strong>
                            <span className="text-gray-500 dark:text-gray-400 pl-3 block">{h.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-dashed border-black/10 dark:border-white/10 pt-4 mt-auto">
                      {/* Tech Tags */}
                      <div className="mb-4">
                        <span className="font-mono text-[9px] text-black/40 dark:text-white/40 block mb-1.5 uppercase">[ STACK ]</span>
                        <div className="flex flex-wrap gap-1">
                          {opt.tech.map((t) => (
                            <span
                              key={t}
                              className="text-[9px] font-mono border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-2 py-0.5 text-black/70 dark:text-white/60"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-[10px] font-mono border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black py-2.5 block hover:bg-[#ff4500] dark:hover:bg-[#ff4500] hover:text-white dark:hover:text-white hover:border-[#ff4500] dark:hover:border-[#ff4500] transition-all duration-300"
                        >
                          LAUNCH APP ↗
                        </a>
                        <a
                          href={`https://${project.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-[10px] font-mono border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 hover:bg-black/5 dark:hover:bg-white/5 py-2.5 block text-black dark:text-white transition-all duration-300"
                        >
                          GITHUB
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* STYLE 3: ELEGANT & STORY-DRIVEN (MODULAR DETAILED ROWS) */}
        {/* ========================================================================= */}
        {activeStyle === 3 && (
          <div className="space-y-16">
            {projects.map((project, idx) => {
              const opt = project.options[3];
              // Alternating layout
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } border border-dashed border-black/20 dark:border-white/20 bg-white/[0.01] dark:bg-black/[0.01] rounded-none overflow-hidden transition-all duration-700 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {/* Left/Right Visual Frame */}
                  <div className="w-full lg:w-5/12 aspect-video lg:aspect-auto bg-black/[0.02] dark:bg-white/[0.02] border-b lg:border-b-0 border-dashed border-black/20 dark:border-white/20 relative flex items-center justify-center min-h-[220px] lg:min-h-[380px]">
                    {renderVisual(project.svgType, project.tag)}
                  </div>

                  {/* Content Details */}
                  <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-between lg:border-l lg:border-dashed lg:border-black/20 lg:dark:border-white/20">
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-dashed border-black/10 dark:border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#ff4500] font-bold">
                            0{idx + 1} //
                          </span>
                          <span className="font-mono text-xs text-black/50 dark:text-white/40 tracking-widest uppercase">
                            [ {project.tag} ]
                          </span>
                        </div>
                        <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] self-start sm:self-auto">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/45 dark:text-white/45 hover:text-[#ff4500] dark:hover:text-[#ff4500] transition-colors duration-200"
                          >
                            live site ↗
                          </a>
                          <span className="text-black/20 dark:text-white/10">|</span>
                          <a
                            href={`https://${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black/45 dark:text-white/45 hover:text-[#ff4500] dark:hover:text-[#ff4500] transition-colors duration-200"
                          >
                            github ↗
                          </a>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black dark:text-white">
                        {project.name}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                        {opt.description}
                      </p>
                    </div>

                    <div className="border-t border-dashed border-black/15 dark:border-white/15 pt-6 mt-8">
                      {/* Tech stack inline line */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="font-mono text-[10px] text-[#ff4500] block mb-1 uppercase tracking-wider">
                            Key Technologies:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {opt.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono font-medium text-black/60 dark:text-white/60"
                              >
                                {t}
                                {t !== opt.tech[opt.tech.length - 1] && "  •"}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-44 h-11 flex items-center justify-center font-mono text-xs bg-black text-white dark:bg-white dark:text-black hover:bg-[#ff4500] dark:hover:bg-[#ff4500] hover:text-white dark:hover:text-white text-center border-2 border-black dark:border-white hover:border-[#ff4500] dark:hover:border-[#ff4500] transition-all duration-300 select-none"
                          >
                            LAUNCH APP ↗
                          </a>
                          <a
                            href={`https://${project.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-44 h-11 flex items-center justify-center font-mono text-xs border-2 border-dashed border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white text-center transition-all duration-300 select-none"
                          >
                            GITHUB REPO
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Beyond These Products - Ecosystem CTA */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 md:pt-12 border-t border-dashed border-black/20 dark:border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <span className="font-mono text-[10px] text-[#ff4500] uppercase tracking-widest">[ BEYOND THESE PRODUCTS ]</span>
          <h4 className="text-lg font-bold tracking-tight text-black dark:text-white mt-1">Our Ecosystem Projects</h4>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            Interested in our developer libraries, helper utilities, or experimental codebases? We build everything in the open and welcome contributions to our repositories.
          </p>
        </div>
        
        <a
          href="https://github.com/dialabs"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 py-3 border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-150 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white active:scale-95 flex items-center justify-center gap-2 select-none"
        >
          <span>EXPLORE REPOSITORY NETWORK</span>
          <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
