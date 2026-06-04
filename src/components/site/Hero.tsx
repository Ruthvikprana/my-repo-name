import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, Zap } from "lucide-react";
import hero from "@/assets/hero-ai.jpg";
import portrait from "@/assets/ruthvik-desk.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero pt-32 pb-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-20 -left-20 h-[500px] w-[500px] glow-orb animate-pulse-glow" />
      <div className="absolute top-40 right-0 h-[400px] w-[400px] glow-orb animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for AI projects · Q1 2026
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]"
        >
          <span className="text-gradient">Building the Future</span>
          <br />
          <span className="text-glow">with AI Systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg text-muted-foreground"
        >
          AI Generalist · GenAI Ecosystem Builder · Automation Strategist · AI Systems Architect.
          I design intelligent systems that transform how businesses operate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all hover:scale-[1.02]"
          >
            Build Your AI System
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="group glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white transition-all"
          >
            <Play className="h-4 w-4" />
            View Portfolio
          </a>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative mt-20 mx-auto max-w-5xl"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-float">
            <img src={hero} alt="AI dashboard" className="w-full h-auto" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-20 top-1/4 w-40 md:w-56 glass-strong rounded-2xl p-2 shadow-float hidden sm:block"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={portrait}
                alt="Ruthvik portrait"
                className="w-full h-auto object-cover"
                width={512}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 glass rounded-lg px-2 py-1.5">
                <div className="font-display font-semibold text-[11px] leading-tight">Ruthvik</div>
                <div className="text-[9px] text-muted-foreground">AI Systems Builder</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 md:-right-12 top-2/3 glass-strong rounded-2xl p-4 shadow-float hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Workflows</div>
                <div className="font-display font-semibold">+312% efficiency</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-1/4 -top-6 glass-strong rounded-2xl p-3 shadow-float hidden md:block"
          >
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium">GPT-5 · Claude · Llama</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Logos / trust */}
        <div className="mt-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by founders, operators & teams across
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground/70 font-display font-medium">
            <span>Startups</span><span>·</span>
            <span>Enterprises</span><span>·</span>
            <span>Agencies</span><span>·</span>
            <span>Creators</span><span>·</span>
            <span>SMBs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
