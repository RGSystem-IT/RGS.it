"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { pricingPlans } from "@/data/pricing";
import { PricingCard } from "@/components/PricingCard";
import { cn } from "@/lib/utils";

export function PricingSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", containScroll: "trimSnaps", startIndex: 1 });
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="lg:hidden">
      <div className="mb-5 rounded-3xl border-2 border-brand-orange bg-white p-4 text-center shadow-sm">
        <p className="text-base font-black text-brand-black">Scorri i pacchetti</p>
        <p className="mt-1 text-sm font-semibold leading-6 text-brand-anthracite/65">
          Trascina verso destra o sinistra per vedere tutte le offerte.
        </p>
        <p className="mt-2 text-lg font-black tracking-[0.16em] text-brand-orange" aria-hidden="true">
          ← swipe →
        </p>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">
          {pricingPlans.map((plan, index) => (
            <div className="min-w-0 flex-[0_0_86%] sm:flex-[0_0_58%]" key={plan.id}>
              <PricingCard plan={plan} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2" aria-label="Seleziona pacchetto">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Vai al pacchetto ${index + 1}`}
            className={cn(
              "focus-ring h-2.5 rounded-full transition-all duration-200",
              index === selectedIndex ? "w-8 bg-brand-orange" : "w-2.5 bg-brand-anthracite/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
