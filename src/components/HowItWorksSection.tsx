"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Analisi",
    text: "Guardiamo insieme la situazione del tuo profilo Google."
  },
  {
    title: "Sistema",
    text: "Ti spieghiamo come richiedere recensioni ai clienti reali nel modo corretto."
  },
  {
    title: "Supporto",
    text: "Ti guidiamo nell’attivazione e nella gestione operativa."
  }
];

export function HowItWorksSection() {
  return (
    <section id="come-funziona" className="section-padding bg-brand-cream" aria-labelledby="how-title">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Metodo</p>
          <h2 id="how-title" className="mt-4 text-3xl font-black tracking-[-0.04em] text-brand-black sm:text-5xl">
            Come funziona il sistema
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-anthracite/70 sm:text-lg">
            Ti guidiamo in un processo semplice per invitare i tuoi clienti reali a lasciare una recensione dopo un’esperienza positiva.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-card border border-brand-border bg-white p-7 shadow-sm"
            >
              <span className="absolute right-6 top-5 text-6xl font-black tracking-[-0.08em] text-brand-black/[0.04]">{index + 1}</span>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-orange text-base font-black text-white shadow-orange">
                {index + 1}
              </div>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-brand-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-anthracite/70">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
