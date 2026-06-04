import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Linkedin } from "lucide-react";


const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-float" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-3 pr-2">
          <div className="relative">
            <Sparkles className="h-5 w-5 text-[oklch(0.55_0.22_245)]" />
            <div className="absolute inset-0 blur-md bg-accent/40 rounded-full" />
          </div>
          <span className="font-display font-semibold tracking-tight">Ruthvik</span>
        </a>
        <div className="hidden md:flex items-center gap-1 px-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/ruthvik-n-03251466/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Ruthvik on LinkedIn"
          className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:shadow-glow hover:text-accent transition-all"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all"
        >
          Build Your AI System
        </a>
      </nav>
    </motion.header>
  );
}
