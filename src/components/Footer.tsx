import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-cream pb-24 pt-8 sm:pb-10">
      <div className="container-page flex flex-col gap-4 text-sm text-brand-anthracite/65 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-black text-brand-black">{siteConfig.businessName}</p>
          <p className="mt-1">WhatsApp: {siteConfig.whatsappDisplayNumber}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a href="#" className="focus-ring font-semibold transition hover:text-brand-orange">Privacy policy</a>
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
