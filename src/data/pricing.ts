import type { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    badge: "STARTER",
    title: "Pacchetto Starter",
    price: "99 €",
    oldPrice: "199 €",
    content: "Fino a 10 richieste recensione guidate",
    description:
      "Ideale per attività che vogliono iniziare a rendere il proprio profilo Google più attivo e credibile.",
    benefits: [
      "Perfetto per iniziare",
      "Processo semplice",
      "Supporto su WhatsApp",
      "Prima valutazione informativa"
    ],
    microCopy: "Prima ti spieghiamo il sistema, poi scegli se attivarlo."
  },
  {
    id: "business",
    badge: "PIÙ SCELTO",
    title: "Pacchetto Business",
    price: "179 €",
    oldPrice: "399 €",
    content: "Fino a 20 richieste recensione guidate",
    description:
      "La scelta più equilibrata per attività locali e professionisti che vogliono aumentare fiducia e presenza online.",
    benefits: [
      "Miglior equilibrio valore/prezzo",
      "Ideale per attività locali",
      "Maggiore impatto sul profilo",
      "Supporto guidato"
    ],
    microCopy: "Consigliato per chi vuole un percorso più completo.",
    highlighted: true
  },
  {
    id: "premium",
    badge: "PREMIUM",
    title: "Pacchetto Premium",
    price: "249 €",
    oldPrice: "599 €",
    content: "Fino a 30 richieste recensione guidate",
    description:
      "Pensato per attività in mercati competitivi che vogliono rafforzare più rapidamente la propria percezione di affidabilità online.",
    benefits: [
      "Massimo valore percepito",
      "Ideale per attività competitive",
      "Percorso più completo",
      "Supporto guidato"
    ],
    microCopy: "Perfetto per chi vuole partire con un pacchetto più incisivo."
  }
];
