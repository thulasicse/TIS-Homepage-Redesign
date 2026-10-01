import { motion } from "motion/react";
import { stats } from "../../../data/schoolData";

function Stats() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="container-main grid grid-cols-2 divide-x divide-y divide-[var(--line)] sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
            }}
            className="px-5 py-10 text-center sm:py-12"
          >
            <p className="font-serif text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
