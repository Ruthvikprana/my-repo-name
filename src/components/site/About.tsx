import { motion } from "framer-motion";
import { Compass, Rocket, Network, Sparkles } from "lucide-react";
import portrait from "@/assets/ruthvik-portrait.jpg";

const timeline = [
  { year: "2021", title: "First AI Workflows", desc: "Started automating real-world business operations with early LLMs and no-code stacks." },
  { year: "2023", title: "GenAI Strategist", desc: "Designed end-to-end GenAI ecosystems for startups and creators." },
  { year: "2024", title: "AI Agents at Scale", desc: "Built autonomous agent systems running content, ops & sales pipelines." },
  { year: "2026", title: "AI Operating Systems", desc: "Architecting full AI operating systems for the next generation of companies." },
];

const pillars = [
  { icon: Compass, title: "Future-focused", desc: "Building for 2030, not 2020." },
  { icon: Network, title: "Systems thinker", desc: "Every workflow connected, observable, intelligent." },
  { icon: Rocket, title: "Outcome obsessed", desc: "Ship measurable transformation, not just demos." },
  { icon: Sparkles, title: "Craft first", desc: "Premium engineering meets premium design." },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] glow-orb opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">About</div>
          <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
            An AI innovator engineering the next decade of intelligent systems.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm Ruthvik — an AI Generalist, automation architect, and GenAI strategist. I help
            businesses translate intelligence into infrastructure: agents that work, dashboards
            that decide, and workflows that compound.
          </p>
        </motion.div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-6 hover:shadow-glow transition-all"
              >
                <div className="font-display text-3xl font-semibold text-glow w-20 shrink-0">{item.year}</div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pillars + mission */}
          <div className="space-y-6 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative glass-strong rounded-3xl p-3 shadow-float overflow-hidden group"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={portrait}
                  alt="Ruthvik — AI Generalist & GenAI Strategist"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width={1024}
                  height={1536}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-sm">Ruthvik</div>
                    <div className="text-[11px] text-muted-foreground">AI Generalist · GenAI Strategist</div>
                  </div>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="glass-strong rounded-3xl p-8 shadow-card">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Mission</div>
              <p className="mt-4 text-2xl font-display tracking-tight leading-snug">
                Give every business the unfair advantage of a fully orchestrated AI ecosystem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 hover:shadow-glow transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient mb-3 group-hover:scale-110 transition-transform">
                    <p.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-semibold text-sm">{p.title}</div>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
