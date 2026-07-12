"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Poche recensioni",
    text: "Un profilo con poche recensioni può sembrare meno affidabile."
  },
  {
    title: "Recensioni datate",
    text: "Recensioni vecchie possono far percepire l’attività come meno attiva."
  },
  {
    title: "Meno fiducia",
    text: "Meno fiducia percepita può ridurre la probabilità di contatto."
  }
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="problema-title">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Il problema</p>
          <h2 id="problema-title" className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] text-brand-black sm:text-5xl">
            Un profilo Google poco curato può farti perdere fiducia prima ancora del contatto.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-brand-anthracite/70 sm:text-lg">
            Oggi molte persone controllano le recensioni prima di scrivere, chiamare o prenotare. Se il profilo appare poco attivo, datato o poco credibile, il potenziale cliente può scegliere qualcun altro.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-card border border-brand-border bg-brand-cream p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sm font-black text-brand-orange shadow-sm">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-black tracking-[-0.02em] text-brand-black">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-anthracite/70">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
