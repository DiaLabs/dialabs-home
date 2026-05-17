"use client";

import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      // By default: check system preference, otherwise default to dark theme
      const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (systemPrefersLight) {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return null;
}
