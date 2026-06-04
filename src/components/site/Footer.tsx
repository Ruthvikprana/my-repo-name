import { Sparkles, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="font-display font-semibold">Ruthvik</span>
          <span className="text-sm text-muted-foreground ml-2">· Building the AI future.</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/ruthvik-n-03251466/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-foreground hover:bg-primary/20 hover:shadow-glow transition-all"
          >
            <Linkedin className="h-4 w-4" />
            Follow
          </a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
