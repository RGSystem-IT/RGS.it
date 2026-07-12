"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Fiducia",
    text: "Un profilo più curato trasmette maggiore affidabilità a chi ti cerca online."
  },
  {
    title: "Credibilità",
    text: "Recensioni recenti e autentiche aiutano il profilo a sembrare più attivo e professionale."
  },
  {
    title: "Contatto",
    text: "Più fiducia può aumentare la probabilità che un potenziale cliente ti scriva, chiami o prenoti."
  }
];

export function ValueSection() {
  return (
    <section className="section-padding bg-brand-cream" aria-labelledby="value-title">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Valore</p>
          <h2 id="value-title" className="mt-4 text-3xl font-black tracking-[-0.04em] text-brand-black sm:text-5xl">
            Perché lavorare sulla reputazione Google?
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-card border border-brand-border bg-white p-7 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-cream text-brand-orange">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
              </div>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.03em] text-brand-black">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-anthracite/70">{value.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
