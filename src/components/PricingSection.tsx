import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { PricingSlider } from "@/components/PricingSlider";

export function PricingSection() {
  return (
    <section id="pacchetti" className="section-padding bg-white" aria-labelledby="pricing-title">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Pacchetti</p>
          <h2 id="pricing-title" className="mt-4 text-balance text-3xl font-black tracking-[-0.04em] text-brand-black sm:text-5xl">
            Scegli il pacchetto più adatto alla tua attività.
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-anthracite/70 sm:text-lg">
            Prima di iniziare, ti spieghiamo tutto su WhatsApp e valutiamo insieme il percorso migliore.
          </p>
        </div>

        <div className="mt-10">
          <PricingSlider />

          <div className="hidden grid-cols-3 gap-5 lg:grid">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
