"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

// Reads the theme the blocking inline script (app/layout.tsx) already
// applied to <html data-theme>, rather than assuming "dark" — avoids a
// mismatched icon flashing on load for someone who'd previously picked
// light. null until mounted, since the server has no way to know the
// visitor's stored preference.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");

    // Device-aware by default (2026-09-10): as long as the visitor hasn't
    // made an explicit choice, keep following the OS/browser color-scheme
    // live — e.g. their system switching to dark at sunset. The instant
    // they use the toggle below, the stored choice takes over permanently
    // and this listener has no effect (it only reads storage once, here).
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // ignore — treat as "no explicit choice"
    }
    if (stored === "light" || stored === "dark") return;

    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      const next: Theme = e.matches ? "light" : "dark";
      setTheme(next);
      if (next === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    };
    mql.addEventListener("change", handleSystemChange);
    return () => mql.removeEventListener("change", handleSystemChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // localStorage can throw (private browsing, disabled storage) — the
      // toggle still works for this page load, it just won't persist.
    }
  };

  if (!theme) {
    // Same footprint as the real button — avoids a layout shift once the
    // real icon mounts a tick later.
    return <div className="w-9 h-9 shrink-0" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink-soft hover:text-clay hover:border-clay transition-colors shrink-0"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}
