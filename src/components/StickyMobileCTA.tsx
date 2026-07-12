import { WhatsAppButton } from "@/components/WhatsAppButton";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-white/92 p-3 shadow-[0_-12px_30px_rgba(11,11,13,0.08)] backdrop-blur-xl sm:hidden">
      <WhatsAppButton className="w-full py-3.5">Richiedi informazioni</WhatsAppButton>
    </div>
  );
}
