import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema Recensioni Google | Richiedi Informazioni",
  description:
    "Sistema guidato per aiutare attività e professionisti a richiedere recensioni Google autentiche ai propri clienti reali e migliorare la credibilità online.",
  openGraph: {
    title: "Sistema Recensioni Google | Richiedi Informazioni",
    description:
      "Sistema guidato per aiutare attività e professionisti a richiedere recensioni Google autentiche ai propri clienti reali e migliorare la credibilità online.",
    type: "website",
    locale: "it_IT",
    siteName: "Review Growth System"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Recensioni Google | Richiedi Informazioni",
    description:
      "Sistema guidato per aiutare attività e professionisti a richiedere recensioni Google autentiche ai propri clienti reali e migliorare la credibilità online."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
