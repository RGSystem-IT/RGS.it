"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const trustItems = ["Clienti reali", "Processo guidato", "Supporto su WhatsApp", "Prima valutazione informativa"];

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-brand-cream pb-16 pt-12 lg:pb-24 lg:pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="inline-flex rounded-full border border-brand-border bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange shadow-sm">
            Reputazione Google più credibile
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.98] tracking-[-0.055em] text-brand-black sm:text-5xl lg:text-7xl">
            Quando ti cercano su Google, le recensioni parlano prima di te.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-brand-anthracite/75 sm:text-lg">
            Aiutiamo attività e professionisti a richiedere recensioni reali ai propri clienti autentici, con un sistema semplice, guidato e trasparente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton className="w-full sm:w-auto">Richiedi informazioni su WhatsApp</WhatsAppButton>
            <a
              href="#pacchetti"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-brand-border bg-white px-5 py-3 text-sm font-extrabold text-brand-black transition hover:border-brand-orange hover:text-brand-orange sm:w-auto"
            >
              Vedi i pacchetti
            </a>
          </div>

          <p className="mt-4 text-sm font-semibold text-brand-anthracite/65">
            Prima ricevi informazioni, poi decidi. Nessun impegno immediato.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="rounded-2xl border border-brand-border bg-white/80 px-3 py-3 text-sm font-bold text-brand-anthracite shadow-sm">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-green" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative"
          aria-hidden="true"
        >
          <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-brand-black/10 blur-3xl" />

          <div className="relative mx-auto max-w-md rounded-[2rem] border border-brand-border bg-white p-5 shadow-soft">
            <div className="rounded-[1.5rem] bg-brand-black p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Profilo attività</p>
                  <h2 className="mt-2 text-xl font-black">Studio Professionale</h2>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">Attivo</div>
              </div>

              <div className="mt-8 grid grid-cols-[auto_1fr] gap-4 rounded-3xl bg-white p-4 text-brand-black">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-cream text-xl font-black text-brand-orange">R</div>
                <div>
                  <div className="flex items-center gap-1 text-brand-orange" aria-label="Valutazione a stelle">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-extrabold">Recensioni recenti e autentiche</p>
                  <p className="mt-1 text-xs leading-5 text-brand-anthracite/60">Un profilo più curato trasmette più fiducia.</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  ["Richiesta inviata", "Cliente reale"],
                  ["Promemoria guidato", "Momento corretto"],
                  ["Supporto operativo", "WhatsApp"]
                ].map(([title, label]) => (
                  <div key={title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-bold">{title}</span>
                    <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-bold text-brand-green">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-brand-border bg-brand-cream p-4">
              <p className="text-sm font-extrabold text-brand-black">Non lasciamo la reputazione online al caso.</p>
              <p className="mt-1 text-sm leading-6 text-brand-anthracite/65">Un processo semplice per chiedere recensioni nel momento giusto.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
