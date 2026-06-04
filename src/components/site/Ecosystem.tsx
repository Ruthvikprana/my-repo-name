import { motion } from "framer-motion";
import eco from "@/assets/ecosystem.jpg";

const nodes = [
  "LLMs", "Vector DBs", "Agents", "Orchestrators",
  "Pipelines", "Dashboards", "Webhooks", "APIs",
  "Embeddings", "Memory", "Eval", "Observability",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">AI Ecosystem</div>
            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tighter text-gradient">
              An operating system for intelligence.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Autonomous agents, orchestrated workflows, LLM integrations, observability,
              and evaluation — assembled into a single, coherent AI stack tailored to your business.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2">
              {nodes.map((n, i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass rounded-xl px-3 py-2.5 text-center text-xs font-medium hover:shadow-glow hover:text-accent transition-all"
                >
                  {n}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 glow-orb opacity-60" />
            <div className="relative rounded-3xl overflow-hidden shadow-float glass-strong p-2">
              <img src={eco} alt="AI ecosystem" loading="lazy" className="w-full rounded-2xl" width={1600} height={1000} />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-5 py-3 shadow-float"
            >
              <div className="text-xs text-muted-foreground">Connected systems</div>
              <div className="font-display font-semibold text-lg">+40 integrations</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
