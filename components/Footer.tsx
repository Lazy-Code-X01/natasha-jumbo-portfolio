import { nav } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas-deep border-t border-line px-6 md:px-10 py-8">
      <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-ink-soft">
        <span>
          {nav.logo} © {year}
        </span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
