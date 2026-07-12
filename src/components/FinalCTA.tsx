"use client";

import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="bg-white px-4 pb-16 lg:pb-24" aria-labelledby="final-cta-title">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="container-page overflow-hidden rounded-[2rem] bg-brand-black p-8 text-center text-white sm:p-12 lg:p-16"
      >
        <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Prima valutazione</p>
        <h2 id="final-cta-title" className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl">
          Vuoi capire quale pacchetto è più adatto al tuo profilo Google?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
          Scrivici su WhatsApp. Ti spieghiamo il sistema, valutiamo la situazione del tuo profilo e ti consigliamo il percorso più adatto.
        </p>
        <WhatsAppButton className="mt-8 w-full sm:w-auto">Scrivimi su WhatsApp</WhatsAppButton>
        <p className="mt-4 text-sm font-semibold text-white/55">Richiesta informazioni gratuita e senza impegno.</p>
      </motion.div>
    </section>
  );
}
