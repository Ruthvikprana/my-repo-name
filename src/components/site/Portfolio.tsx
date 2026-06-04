import { motion } from "framer-motion";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    tag: "AI Dashboard",
    title: "Real-time Ops Intelligence",
    desc: "Built a unified AI analytics layer for a SaaS platform, surfacing predictive metrics across 7 data sources.",
    metric: "−68% reporting time",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    img: p2,
    tag: "Autonomous Agents",
    title: "Sales Agent Swarm",
    desc: "Deployed a network of LLM agents handling outbound, qualification & follow-ups.",
    metric: "3.4× pipeline",
    span: "lg:col-span-1",
  },
  {
    img: p3,
    tag: "GenAI Pipeline",
    title: "Content Ecosystem",
    desc: "Engineered a multi-modal content engine producing posts, videos & briefs daily.",
    metric: "+312% output",
    span: "lg:col-span-1",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] glow-orb opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Portfolio</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
              Systems shipped. Outcomes proven.
            </h2>
          </div>
          <a href="#contact" className="text-sm font-medium text-accent hover:underline">
            Start a project →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 lg:auto-rows-[280px] gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl glass shadow-card hover:shadow-float transition-all ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.05_260/0.85)] via-[oklch(0.15_0.05_260/0.3)] to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-7 text-white">
                <div className="inline-flex w-fit items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-medium">
                  {p.tag}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/80 line-clamp-2">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold shadow-glow">
                    {p.metric}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
