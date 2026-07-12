import { siteConfig } from "@/config/siteConfig";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const links = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#faq", label: "FAQ" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/80 bg-brand-cream/90 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between gap-4" aria-label="Navigazione principale">
        <a href="#top" className="focus-ring text-sm font-black tracking-tight sm:text-base" aria-label="Torna all'inizio">
          {siteConfig.businessName}
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-semibold text-brand-anthracite/80 transition hover:text-brand-orange"
            >
              {link.label}
            </a>
          ))}
        </div>

        <WhatsAppButton className="hidden px-5 py-2.5 lg:inline-flex">WhatsApp</WhatsAppButton>
        <WhatsAppButton className="px-4 py-2 text-xs lg:hidden">WhatsApp</WhatsAppButton>
      </nav>
    </header>
  );
}
