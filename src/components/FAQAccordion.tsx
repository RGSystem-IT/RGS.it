"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-title">
      <div className="container-page max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">FAQ</p>
          <h2 id="faq-title" className="mt-4 text-3xl font-black tracking-[-0.04em] text-brand-black sm:text-5xl">
            Domande frequenti
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="rounded-3xl border border-brand-border bg-brand-cream/70">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-black text-brand-black sm:text-lg">{item.question}</span>
                  <span
                    className={cn(
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lg font-black text-brand-orange transition",
                      isOpen && "rotate-45"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-sm leading-7 text-brand-anthracite/70 sm:px-7">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
