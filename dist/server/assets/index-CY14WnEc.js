import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Sparkles, Linkedin, ArrowRight, Play, Zap, Cpu, Compass, Network, Rocket, Workflow, Brain, Wand2, Bot, Cog, Layers, MessageSquareCode, Boxes, GraduationCap, BarChart3, Globe, LineChart, Quote, Twitter, Github, ArrowUpRight, Mail, Calendar, Send, X, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast, Toaster as Toaster$1 } from "sonner";
import ReactMarkdown from "react-markdown";
const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4",
      children: /* @__PURE__ */ jsxs(
        "nav",
        {
          className: `flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${scrolled ? "glass-strong shadow-float" : "glass"}`,
          children: [
            /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 pl-3 pr-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-[oklch(0.55_0.22_245)]" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 blur-md bg-accent/40 rounded-full" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-display font-semibold tracking-tight", children: "Ruthvik" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1 px-2", children: links.map((l) => /* @__PURE__ */ jsx(
              "a",
              {
                href: l.href,
                className: "text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-muted",
                children: l.label
              },
              l.href
            )) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/in/ruthvik-n-03251466/",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Follow Ruthvik on LinkedIn",
                className: "hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:shadow-glow hover:text-accent transition-all",
                children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "ml-1 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all",
                children: "Build Your AI System"
              }
            )
          ]
        }
      )
    }
  );
}
const hero = "/assets/hero-ai-Brrt0q1t.jpg";
const portrait$1 = "/assets/ruthvik-desk-CaQFgnaj.jpg";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden bg-hero pt-32 pb-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 h-[500px] w-[500px] glow-orb animate-pulse-glow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-0 h-[400px] w-[400px] glow-orb animate-pulse-glow", style: { animationDelay: "2s" } }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "flex justify-center mb-6",
          children: /* @__PURE__ */ jsxs("div", { className: "glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })
            ] }),
            "Available for AI projects · Q1 2026"
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 },
          className: "text-center text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Building the Future" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-glow", children: "with AI Systems" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.25 },
          className: "mx-auto mt-8 max-w-2xl text-center text-lg text-muted-foreground",
          children: "AI Generalist · GenAI Ecosystem Builder · Automation Strategist · AI Systems Architect. I design intelligent systems that transform how businesses operate."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-3",
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all hover:scale-[1.02]",
                children: [
                  "Build Your AI System",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#portfolio",
                className: "group glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium hover:bg-white transition-all",
                children: [
                  /* @__PURE__ */ jsx(Play, { className: "h-4 w-4" }),
                  "View Portfolio"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 60, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 1, delay: 0.5, ease: "easeOut" },
          className: "relative mt-20 mx-auto max-w-5xl",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-float", children: [
              /* @__PURE__ */ jsx("img", { src: hero, alt: "AI dashboard", className: "w-full h-auto", width: 1600, height: 1200 }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -left-4 md:-left-20 top-1/4 w-40 md:w-56 glass-strong rounded-2xl p-2 shadow-float hidden sm:block",
                children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: portrait$1,
                      alt: "Ruthvik portrait",
                      className: "w-full h-auto object-cover",
                      width: 512,
                      height: 768
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-2 left-2 right-2 glass rounded-lg px-2 py-1.5", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-[11px] leading-tight", children: "Ruthvik" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "AI Systems Builder" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, 10, 0] },
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                className: "absolute -right-4 md:-right-12 top-2/3 glass-strong rounded-2xl p-4 shadow-float hidden sm:block",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient", children: /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Workflows" }),
                    /* @__PURE__ */ jsx("div", { className: "font-display font-semibold", children: "+312% efficiency" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -8, 0] },
                transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                className: "absolute right-1/4 -top-6 glass-strong rounded-2xl p-3 shadow-float hidden md:block",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Cpu, { className: "h-4 w-4 text-accent" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "GPT-5 · Claude · Llama" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-24 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Trusted by founders, operators & teams across" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-muted-foreground/70 font-display font-medium", children: [
          /* @__PURE__ */ jsx("span", { children: "Startups" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "Enterprises" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "Agencies" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "Creators" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("span", { children: "SMBs" })
        ] })
      ] })
    ] })
  ] });
}
const portrait = "/assets/ruthvik-portrait-D6TRy55Z.jpg";
const timeline = [
  { year: "2021", title: "First AI Workflows", desc: "Started automating real-world business operations with early LLMs and no-code stacks." },
  { year: "2023", title: "GenAI Strategist", desc: "Designed end-to-end GenAI ecosystems for startups and creators." },
  { year: "2024", title: "AI Agents at Scale", desc: "Built autonomous agent systems running content, ops & sales pipelines." },
  { year: "2026", title: "AI Operating Systems", desc: "Architecting full AI operating systems for the next generation of companies." }
];
const pillars = [
  { icon: Compass, title: "Future-focused", desc: "Building for 2030, not 2020." },
  { icon: Network, title: "Systems thinker", desc: "Every workflow connected, observable, intelligent." },
  { icon: Rocket, title: "Outcome obsessed", desc: "Ship measurable transformation, not just demos." },
  { icon: Sparkles, title: "Craft first", desc: "Premium engineering meets premium design." }
];
function About() {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -right-40 h-[500px] w-[500px] glow-orb opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "About" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "An AI innovator engineering the next decade of intelligent systems." }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "I'm Ruthvik — an AI Generalist, automation architect, and GenAI strategist. I help businesses translate intelligence into infrastructure: agents that work, dashboards that decide, and workflows that compound." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 grid lg:grid-cols-2 gap-12 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: timeline.map((item, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.08 },
            className: "glass rounded-2xl p-6 flex gap-6 hover:shadow-glow transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-semibold text-glow w-20 shrink-0", children: item.year }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: item.desc })
              ] })
            ]
          },
          item.year
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 lg:sticky lg:top-32", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "relative glass-strong rounded-3xl p-3 shadow-float overflow-hidden group",
              children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: portrait,
                    alt: "Ruthvik — AI Generalist & GenAI Strategist",
                    className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]",
                    width: 1024,
                    height: 1536
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-sm", children: "Ruthvik" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[11px] text-muted-foreground", children: "AI Generalist · GenAI Strategist" })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-accent" })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 shadow-card", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: "Mission" }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-2xl font-display tracking-tight leading-snug", children: "Give every business the unfair advantage of a fully orchestrated AI ecosystem." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: pillars.map((p, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.08 },
              className: "glass rounded-2xl p-5 hover:shadow-glow transition-all group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient mb-3 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5 text-white" }) }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: p.title }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: p.desc })
              ]
            },
            p.title
          )) })
        ] })
      ] })
    ] })
  ] });
}
const services = [
  { icon: Workflow, title: "AI Automation Systems", desc: "End-to-end automation pipelines that replace repetitive ops." },
  { icon: Brain, title: "AI Consulting", desc: "Strategy sessions to identify high-leverage AI opportunities." },
  { icon: Wand2, title: "GenAI Workflows", desc: "Custom generative pipelines for content, research, and ops." },
  { icon: Bot, title: "AI Agents", desc: "Autonomous agents that act, decide, and complete tasks." },
  { icon: Cog, title: "Business Process Automation", desc: "Re-engineer workflows with intelligent orchestration." },
  { icon: Layers, title: "AI Strategy", desc: "Roadmaps that align AI with business outcomes." },
  { icon: MessageSquareCode, title: "AI Content Systems", desc: "Scale brand storytelling with intelligent content engines." },
  { icon: Boxes, title: "AI Tool Integration", desc: "Connect your stack with LLMs, vector DBs, and APIs." },
  { icon: Cpu, title: "Prompt Engineering", desc: "Production-grade prompts and evaluation systems." },
  { icon: GraduationCap, title: "Training & Workshops", desc: "Upskill your team on the modern AI stack." },
  { icon: BarChart3, title: "AI Dashboards", desc: "Real-time intelligence panels for decision making." },
  { icon: Globe, title: "AI-Powered Websites", desc: "Conversion-focused sites with embedded intelligence." },
  { icon: LineChart, title: "Operations Optimization", desc: "Continuous improvement through AI observability." }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Services" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "A full-stack AI partner." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "From discovery to deployment, I architect, build, and scale intelligent systems that compound value over time." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, delay: i % 3 * 0.08 },
        whileHover: { y: -6 },
        className: "group relative glass rounded-3xl p-7 overflow-hidden hover:shadow-glow transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-40 w-40 glow-orb opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsx("div", { className: "relative flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient shadow-glow mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "relative font-display font-semibold text-lg", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "relative mt-2 text-sm text-muted-foreground", children: s.desc }),
          /* @__PURE__ */ jsx("div", { className: "relative mt-5 inline-flex items-center text-xs font-medium text-accent opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all", children: "Explore →" })
        ]
      },
      s.title
    )) })
  ] }) });
}
const p1 = "/assets/project-1-Bkrzr5sP.jpg";
const p2 = "/assets/project-2-CAdnv20T.jpg";
const p3 = "/assets/project-3-BC-tc7RL.jpg";
const projects = [
  {
    img: p1,
    tag: "AI Dashboard",
    title: "Real-time Ops Intelligence",
    desc: "Built a unified AI analytics layer for a SaaS platform, surfacing predictive metrics across 7 data sources.",
    metric: "−68% reporting time",
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    img: p2,
    tag: "Autonomous Agents",
    title: "Sales Agent Swarm",
    desc: "Deployed a network of LLM agents handling outbound, qualification & follow-ups.",
    metric: "3.4× pipeline",
    span: "lg:col-span-1"
  },
  {
    img: p3,
    tag: "GenAI Pipeline",
    title: "Content Ecosystem",
    desc: "Engineered a multi-modal content engine producing posts, videos & briefs daily.",
    metric: "+312% output",
    span: "lg:col-span-1"
  }
];
function Portfolio() {
  return /* @__PURE__ */ jsxs("section", { id: "portfolio", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -left-40 top-1/3 h-[500px] w-[500px] glow-orb opacity-40" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Portfolio" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "Systems shipped. Outcomes proven." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-sm font-medium text-accent hover:underline", children: "Start a project →" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-[280px] gap-5", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.1 },
          whileHover: { y: -8 },
          className: `group relative overflow-hidden rounded-3xl glass shadow-card hover:shadow-float transition-all ${p.span}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.img,
                alt: p.title,
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.05_260/0.85)] via-[oklch(0.15_0.05_260/0.3)] to-transparent" }),
            /* @__PURE__ */ jsxs("div", { className: "relative h-full flex flex-col justify-end p-7 text-white", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex w-fit items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-medium", children: p.tag }),
              /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl font-semibold leading-tight", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-white/80 line-clamp-2", children: p.desc }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-3", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold shadow-glow", children: p.metric }) })
            ] })
          ]
        },
        p.title
      )) })
    ] })
  ] });
}
const eco = "/assets/ecosystem-DqRkvB0I.jpg";
const nodes = [
  "LLMs",
  "Vector DBs",
  "Agents",
  "Orchestrators",
  "Pipelines",
  "Dashboards",
  "Webhooks",
  "APIs",
  "Embeddings",
  "Memory",
  "Eval",
  "Observability"
];
function Ecosystem() {
  return /* @__PURE__ */ jsx("section", { id: "ecosystem", className: "relative py-32 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "AI Ecosystem" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "An operating system for intelligence." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Autonomous agents, orchestrated workflows, LLM integrations, observability, and evaluation — assembled into a single, coherent AI stack tailored to your business." }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-3 gap-2", children: nodes.map((n, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.04 },
              className: "glass rounded-xl px-3 py-2.5 text-center text-xs font-medium hover:shadow-glow hover:text-accent transition-all",
              children: n
            },
            n
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 glow-orb opacity-60" }),
          /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-float glass-strong p-2", children: /* @__PURE__ */ jsx("img", { src: eco, alt: "AI ecosystem", loading: "lazy", className: "w-full rounded-2xl", width: 1600, height: 1e3 }) }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              animate: { y: [0, -10, 0] },
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              className: "absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-3 shadow-float",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Connected systems" }),
                /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-lg", children: "+40 integrations" })
              ]
            }
          )
        ]
      }
    )
  ] }) }) });
}
const items = [
  {
    quote: "Ruthvik rewired our operations with an AI stack we didn't know was possible. Game-changing.",
    name: "Aarav Mehta",
    role: "Founder, NovaStack"
  },
  {
    quote: "From strategy to agents in production in 6 weeks. The most senior AI mind I've worked with.",
    name: "Priya Singh",
    role: "Head of Growth, Lumen"
  },
  {
    quote: "Every workflow he touched became 3× faster and 10× smarter. A true systems architect.",
    name: "Daniel Cho",
    role: "COO, Hexalabs"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Testimonials" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "What partners say." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-5", children: items.map((t, i) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: i * 0.1 },
        className: "relative glass-strong rounded-3xl p-8 shadow-card hover:shadow-glow transition-all",
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "h-6 w-6 text-accent mb-4" }),
          /* @__PURE__ */ jsxs("blockquote", { className: "font-display text-lg leading-snug tracking-tight", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 pt-6 border-t border-border/60", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: t.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
const team = [
  {
    name: "Ruthvik",
    role: "Founder · AI Generalist",
    bio: "Architects end-to-end AI ecosystems, autonomous agents, and GenAI strategy.",
    initials: "RV",
    accent: "from-[oklch(0.65_0.22_245)] to-[oklch(0.55_0.2_270)]"
  },
  {
    name: "Aria Chen",
    role: "Head of AI Engineering",
    bio: "LLM systems, agent orchestration, and production-grade RAG pipelines.",
    initials: "AC",
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.55_0.22_220)]"
  },
  {
    name: "Marcus Vale",
    role: "Automation Architect",
    bio: "Designs no-code/code hybrid workflows that compound over time.",
    initials: "MV",
    accent: "from-[oklch(0.7_0.2_300)] to-[oklch(0.55_0.22_330)]"
  },
  {
    name: "Priya Rao",
    role: "GenAI Strategist",
    bio: "Translates business goals into measurable AI roadmaps and KPIs.",
    initials: "PR",
    accent: "from-[oklch(0.75_0.16_70)] to-[oklch(0.6_0.2_30)]"
  }
];
function Team() {
  return /* @__PURE__ */ jsxs("section", { id: "team", className: "relative py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 left-1/4 h-[400px] w-[400px] glow-orb opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-10 h-[300px] w-[300px] glow-orb opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Team" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "The minds behind the systems." }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "A compact squad of engineers, strategists, and builders shipping AI infrastructure that actually moves the needle." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: team.map((m, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "group relative glass-strong rounded-3xl p-6 shadow-card hover:shadow-float transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: `relative mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br ${m.accent} p-[2px] shadow-glow`, children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center rounded-2xl bg-card font-display text-2xl font-semibold text-gradient", children: m.initials }) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-semibold", children: m.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.18em] text-accent mt-1", children: m.role }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: m.bio })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity", children: [
              /* @__PURE__ */ jsx("a", { href: "#", "aria-label": `${m.name} on LinkedIn`, className: "h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsx("a", { href: "#", "aria-label": `${m.name} on Twitter`, className: "h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all", children: /* @__PURE__ */ jsx(Twitter, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsx("a", { href: "#", "aria-label": `${m.name} on GitHub`, className: "h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all", children: /* @__PURE__ */ jsx(Github, { className: "h-3.5 w-3.5" }) })
            ] })
          ]
        },
        m.name
      )) })
    ] })
  ] });
}
const posts = [
  { tag: "AI Agents", title: "The shift from copilots to autonomous agents", date: "May 2026", read: "6 min" },
  { tag: "GenAI", title: "Designing AI ecosystems that compound", date: "Apr 2026", read: "8 min" },
  { tag: "Future Skills", title: "What every operator must learn before 2027", date: "Mar 2026", read: "5 min" },
  { tag: "Workflows", title: "Why orchestration is the new programming", date: "Feb 2026", read: "7 min" }
];
function Insights() {
  return /* @__PURE__ */ jsx("section", { id: "insights", className: "relative py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between flex-wrap gap-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Insights" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "Notes from the AI frontier." })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-5", children: posts.map((p, i) => /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        whileHover: { y: -4 },
        className: "group glass rounded-3xl p-8 flex flex-col justify-between min-h-[220px] hover:shadow-glow transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-medium", children: p.tag }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors", children: p.title }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { children: p.date }),
              /* @__PURE__ */ jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxs("span", { children: [
                p.read,
                " read"
              ] })
            ] })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.7 },
      className: "relative overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground p-12 md:p-20 shadow-float",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/40 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.25_270/0.4)] blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Let's build" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95]", children: [
            "Ready to build your ",
            /* @__PURE__ */ jsx("span", { className: "text-glow", children: "AI future?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-primary-foreground/70 max-w-xl", children: "Tell me about your business. I'll show you the AI systems that will reshape it over the next 12 months." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: "group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-glow-strong hover:scale-[1.02] transition-all",
                children: [
                  "Build Your AI System",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#portfolio",
                className: "inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium hover:bg-white/10 transition-all",
                children: "See past work"
              }
            )
          ] })
        ] })
      ]
    }
  ) }) });
}
function trackEvent(event, params) {
  const payload = { event, ...params };
  if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
  if (typeof window !== "undefined" && "dataLayer" in window && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("ruthvik:analytics", { detail: payload }));
  }
}
const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell me a bit more").max(1e3)
});
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useEffect(() => {
    function onPrefill(e) {
      const lead = e.detail;
      const parts = [
        lead.summary,
        lead.projectType && `Project: ${lead.projectType}`,
        lead.company && `Company: ${lead.company}`,
        lead.timeline && `Timeline: ${lead.timeline}`,
        lead.budget && `Budget: ${lead.budget}`
      ].filter(Boolean);
      setForm({
        name: lead.name || "",
        email: lead.email || "",
        message: parts.join("\n")
      });
    }
    window.addEventListener("ruthvik:prefill-contact", onPrefill);
    return () => window.removeEventListener("ruthvik:prefill-contact", onPrefill);
  }, []);
  function onSubmit(e) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    trackEvent("contact_form_submitted", {
      name: form.name,
      email: form.email
    });
    toast.success("Message received. I'll reply within 24h.");
    setForm({ name: "", email: "", message: "" });
  }
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent font-medium", children: "Contact" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient", children: "Let's design your AI system." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-md", children: "Drop a message or book a strategy call — replies within one business day." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: [
        { icon: Mail, label: "n.ruthvik@outlook.com", href: "mailto:n.ruthvik@outlook.com" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ruthvik-n-03251466/" },
        { icon: Twitter, label: "@ruthvik", href: "#" },
        { icon: Calendar, label: "Book on Calendly", href: "#" }
      ].map((c) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: c.href,
          className: "group flex items-center gap-4 glass rounded-2xl p-4 hover:shadow-glow transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient", children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: c.label })
          ]
        },
        c.label
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 glass-strong rounded-2xl p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient shrink-0", children: /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: "AI Assistant online" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Ask anything about my services, process, or stack. I'll route it to me." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.form,
      {
        onSubmit,
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "glass-strong rounded-3xl p-8 shadow-float space-y-4",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                maxLength: 100,
                className: "mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all",
                placeholder: "Your name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                value: form.email,
                onChange: (e) => setForm({ ...form, email: e.target.value }),
                maxLength: 255,
                className: "mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all",
                placeholder: "you@company.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Project" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                value: form.message,
                onChange: (e) => setForm({ ...form, message: e.target.value }),
                maxLength: 1e3,
                rows: 5,
                className: "mt-2 w-full rounded-xl bg-white/60 border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-accent transition-all resize-none",
                placeholder: "What are you building?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all",
              children: [
                "Send message",
                /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          )
        ]
      }
    )
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative border-t border-border/60 py-12", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-accent" }),
        /* @__PURE__ */ jsx("span", { className: "font-display font-semibold", children: "Ruthvik" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground ml-2", children: "· Building the AI future." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/ruthvik-n-03251466/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-foreground hover:bg-primary/20 hover:shadow-glow transition-all",
            children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }),
              "Follow"
            ]
          }
        ),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Twitter" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "GitHub" }),
        /* @__PURE__ */ jsx("span", { children: "© 2026" })
      ] })
    ] })
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX: scrollYProgress },
      className: "fixed top-0 left-0 right-0 z-[60] h-[2px] bg-accent-gradient origin-left"
    }
  );
}
const LEAD_RE = /\[\[LEAD_READY\]\](\{[\s\S]*?\})/;
function parseLead(text) {
  const m = text.match(LEAD_RE);
  if (!m) return { clean: text, lead: null };
  try {
    const lead = JSON.parse(m[1]);
    const clean = text.replace(LEAD_RE, "").trim();
    return { clean, lead };
  } catch {
    return { clean: text, lead: null };
  }
}
const INTRO = {
  role: "assistant",
  content: "Hi — I'm Ruthvik's AI concierge. Tell me what you're building or where AI could give you an edge, and I'll line things up for him."
};
function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INTRO]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [lead, setLead] = useState(null);
  const scrollerRef = useRef(null);
  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);
  async function send() {
    const text = input.trim();
    if (!text || sending) return;
    if (text.length > 1e3) {
      toast.error("Message too long (max 1000 chars).");
      return;
    }
    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      const { clean, lead: parsedLead } = parseLead(data.content || "");
      setMessages((m) => [...m, { role: "assistant", content: clean || "…" }]);
      if (parsedLead) {
        setLead(parsedLead);
        trackEvent("chat_lead_qualified", {
          name: parsedLead.name,
          projectType: parsedLead.projectType,
          budget: parsedLead.budget,
          timeline: parsedLead.timeline
        });
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong";
      toast.error(msg);
      setMessages((m) => [...m, { role: "assistant", content: "Sorry — I hit a snag. Try again?" }]);
    } finally {
      setSending(false);
    }
  }
  function handOff() {
    if (!lead) return;
    trackEvent("chat_send_to_ruthvik_clicked", {
      name: lead.name,
      projectType: lead.projectType
    });
    window.dispatchEvent(new CustomEvent("ruthvik:prefill-contact", { detail: lead }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    toast.success("Brief sent to the contact form — review and hit send.");
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { delay: 1, type: "spring", stiffness: 200, damping: 20 },
        onClick: () => {
          const willOpen = !open;
          setOpen(willOpen);
          if (willOpen) trackEvent("chat_widget_opened");
        },
        "aria-label": "Open AI assistant",
        className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gradient shadow-glow-strong hover:scale-110 transition-transform",
        children: [
          /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsx(motion.div, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { opacity: 0 }, children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6 text-white" }) }, "x") : /* @__PURE__ */ jsx(motion.div, { initial: { rotate: 90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { opacity: 0 }, children: /* @__PURE__ */ jsx(Bot, { className: "h-6 w-6 text-white" }) }, "bot") }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-accent/40 blur-xl -z-10 animate-pulse-glow" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 24, scale: 0.96 },
        transition: { duration: 0.25, ease: "easeOut" },
        className: "fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[78vh] flex flex-col glass-strong rounded-3xl shadow-float overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative p-4 border-b border-border/60 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient shadow-glow", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-sm", children: "Ruthvik · AI Concierge" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" }),
                  /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" })
                ] }),
                "Online · qualifies in <2 min"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { ref: scrollerRef, className: "flex-1 overflow-y-auto p-4 space-y-3", children: [
            messages.map((m, i) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-white/70 border border-border/60 text-foreground rounded-bl-md"}`,
                    children: m.role === "assistant" ? /* @__PURE__ */ jsx("div", { className: "prose prose-sm max-w-none prose-p:my-1 prose-p:leading-relaxed", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: m.content }) }) : /* @__PURE__ */ jsx("span", { className: "whitespace-pre-wrap", children: m.content })
                  }
                )
              },
              i
            )),
            sending && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/70 border border-border/60 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-bounce" }),
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-bounce", style: { animationDelay: "150ms" } }),
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-bounce", style: { animationDelay: "300ms" } })
            ] }) }),
            lead && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: "rounded-2xl p-4 bg-accent-gradient text-white shadow-glow",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.18em] opacity-80", children: "Brief captured" }),
                  /* @__PURE__ */ jsxs("div", { className: "font-display font-semibold mt-1 text-sm", children: [
                    lead.name,
                    " · ",
                    lead.projectType || "AI project"
                  ] }),
                  lead.summary && /* @__PURE__ */ jsx("p", { className: "text-xs mt-1 opacity-90", children: lead.summary }),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: handOff,
                      className: "mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-4 py-2.5 text-sm font-semibold hover:scale-[1.01] transition-transform",
                      children: [
                        "Send to Ruthvik",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                send();
              },
              className: "p-3 border-t border-border/60 flex items-end gap-2 bg-white/40",
              children: [
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send();
                      }
                    },
                    rows: 1,
                    maxLength: 1e3,
                    placeholder: "Tell me about your project…",
                    className: "flex-1 resize-none rounded-xl bg-white/80 border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent max-h-32"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: sending || !input.trim(),
                    className: "h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow-strong transition-all",
                    "aria-label": "Send",
                    children: sending ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
                  }
                )
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Portfolio, {}),
    /* @__PURE__ */ jsx(Ecosystem, {}),
    /* @__PURE__ */ jsx(Team, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Insights, {}),
    /* @__PURE__ */ jsx(CTASection, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ChatWidget, {}),
    /* @__PURE__ */ jsx(Toaster, { position: "top-center" })
  ] });
}
export {
  Index as component
};
