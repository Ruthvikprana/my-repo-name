import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
  {
    name: "Ruthvik",
    role: "Founder · AI Generalist",
    bio: "Architects end-to-end AI ecosystems, autonomous agents, and GenAI strategy.",
    initials: "RV",
    accent: "from-[oklch(0.65_0.22_245)] to-[oklch(0.55_0.2_270)]",
  },
  {
    name: "Aria Chen",
    role: "Head of AI Engineering",
    bio: "LLM systems, agent orchestration, and production-grade RAG pipelines.",
    initials: "AC",
    accent: "from-[oklch(0.7_0.18_180)] to-[oklch(0.55_0.22_220)]",
  },
  {
    name: "Marcus Vale",
    role: "Automation Architect",
    bio: "Designs no-code/code hybrid workflows that compound over time.",
    initials: "MV",
    accent: "from-[oklch(0.7_0.2_300)] to-[oklch(0.55_0.22_330)]",
  },
  {
    name: "Priya Rao",
    role: "GenAI Strategist",
    bio: "Translates business goals into measurable AI roadmaps and KPIs.",
    initials: "PR",
    accent: "from-[oklch(0.75_0.16_70)] to-[oklch(0.6_0.2_30)]",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/4 h-[400px] w-[400px] glow-orb opacity-40" />
      <div className="absolute bottom-0 right-10 h-[300px] w-[300px] glow-orb opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Team</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
            The minds behind the systems.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A compact squad of engineers, strategists, and builders shipping AI infrastructure
            that actually moves the needle.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass-strong rounded-3xl p-6 shadow-card hover:shadow-float transition-all"
            >
              <div className={`relative mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br ${m.accent} p-[2px] shadow-glow`}>
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card font-display text-2xl font-semibold text-gradient">
                  {m.initials}
                </div>
              </div>
              <div className="mt-5 text-center">
                <div className="font-display text-lg font-semibold">{m.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent mt-1">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
              <div className="mt-5 flex items-center justify-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                <a href="#" aria-label={`${m.name} on LinkedIn`} className="h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a href="#" aria-label={`${m.name} on Twitter`} className="h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all">
                  <Twitter className="h-3.5 w-3.5" />
                </a>
                <a href="#" aria-label={`${m.name} on GitHub`} className="h-8 w-8 inline-flex items-center justify-center rounded-full glass hover:shadow-glow transition-all">
                  <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
