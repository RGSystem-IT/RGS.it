import { siteConfig } from "@/config/siteConfig";

export function getWhatsAppLink(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
