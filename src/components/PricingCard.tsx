"use client";

import { motion } from "framer-motion";
import type { PricingPlan } from "@/types/pricing";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  index?: number;
};

export function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, delay: index * 0.06 }}
      className={cn(
        "flex h-full flex-col rounded-card border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft",
        plan.highlighted
          ? "border-brand-orange bg-[#fff7f1] shadow-orange"
          : "border-brand-border"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em]",
            plan.highlighted ? "bg-brand-orange text-white" : "bg-brand-cream text-brand-orange"
          )}
        >
          {plan.badge}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-black tracking-[-0.035em] text-brand-black">{plan.title}</h3>

      <div className="mt-5 flex items-end gap-3">
        <p className="text-5xl font-black tracking-[-0.06em] text-brand-black">{plan.price}</p>
        <p className="pb-2 text-lg font-extrabold text-brand-anthracite/35 line-through">{plan.oldPrice}</p>
      </div>

      <p className="mt-5 rounded-2xl border border-brand-border bg-white px-4 py-3 text-sm font-extrabold text-brand-black">
        {plan.content}
      </p>

      <p className="mt-5 text-sm leading-7 text-brand-anthracite/70">{plan.description}</p>

      <ul className="mt-6 space-y-3" aria-label={`Benefit ${plan.title}`}>
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-3 text-sm font-semibold leading-6 text-brand-anthracite/75">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
            {benefit}
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-2xl bg-brand-cream px-4 py-3 text-xs font-bold leading-6 text-brand-anthracite/70">
        {plan.microCopy}
      </p>

      <WhatsAppButton className="mt-6 w-full">Richiedi informazioni</WhatsAppButton>
    </motion.article>
  );
}
