"use client";

import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    // Check localStorage for saved theme, default to dark
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return null;
}
