"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark";
  ariaLabel?: string;
};

export function WhatsAppButton({
  children,
  className,
  variant = "primary",
  ariaLabel = "Apri WhatsApp per richiedere informazioni"
}: WhatsAppButtonProps) {
  const variants = {
    primary:
      "bg-brand-orange text-white shadow-orange hover:-translate-y-0.5 hover:bg-[#df5413]",
    secondary:
      "border border-brand-border bg-white text-brand-black hover:border-brand-orange hover:text-brand-orange",
    dark: "bg-brand-black text-white hover:-translate-y-0.5 hover:bg-brand-anthracite"
  };

  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-extrabold transition duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.a>
  );
}
