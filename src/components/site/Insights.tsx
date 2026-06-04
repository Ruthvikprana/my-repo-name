import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "AI Agents", title: "The shift from copilots to autonomous agents", date: "May 2026", read: "6 min" },
  { tag: "GenAI", title: "Designing AI ecosystems that compound", date: "Apr 2026", read: "8 min" },
  { tag: "Future Skills", title: "What every operator must learn before 2027", date: "Mar 2026", read: "5 min" },
  { tag: "Workflows", title: "Why orchestration is the new programming", date: "Feb 2026", read: "7 min" },
];

export default function Insights() {
  return (
    <section id="insights" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">Insights</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
              Notes from the AI frontier.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-3xl p-8 flex flex-col justify-between min-h-[220px] hover:shadow-glow transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-medium">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight leading-snug group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
