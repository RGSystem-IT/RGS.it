# Review Growth System

Sito one-page minimal e mobile-first per promuovere un sistema guidato di richiesta recensioni Google da clienti reali e autentici.

## Caratteristiche

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Embla Carousel per lo slider pricing mobile/tablet
- Export statico compatibile con GitHub Pages
- CTA WhatsApp con messaggio precompilato
- Pacchetto Business evidenziato
- FAQ accordion
- Sticky CTA mobile
- Nessun backend, database, login, CMS o pagamento online
- Nessuna email nel footer

## Requisiti

- Node.js 20 o superiore consigliato
- npm

## Installazione locale

```bash
npm install
npm run dev
```

Apri il browser su:

```bash
http://localhost:3000
```

## Build produzione

```bash
npm run build
```

Il sito statico verrà generato nella cartella:

```bash
out
```

## WhatsApp

La configurazione si trova in:

```bash
src/config/siteConfig.ts
```

Numero impostato:

```bash
393444128219
```

Messaggio precompilato:

```txt
Ciao, vorrei ricevere maggiori informazioni sul sistema per richiedere recensioni reali su Google da clienti autentici. Potete spiegarmi come funziona e quale pacchetto è più adatto alla mia attività?
```

## Deploy su GitHub Pages

Il progetto include il workflow:

```bash
.github/workflows/deploy.yml
```

Procedura consigliata:

1. Crea una repository GitHub.
2. Carica tutti i file del progetto nella repository.
3. Vai su `Settings > Pages`.
4. In `Build and deployment`, seleziona `GitHub Actions`.
5. Fai push sul branch `main`.
6. GitHub genererà automaticamente il sito statico dalla cartella `out`.

## Base path automatico GitHub Pages

Il file `next.config.mjs` rileva automaticamente il nome della repository quando il sito viene buildato dentro GitHub Actions.

Se la repository è:

```txt
nomeutente/review-growth-system
```

il sito userà automaticamente:

```txt
/review-growth-system
```

Se invece pubblichi su una repository del tipo:

```txt
nomeutente.github.io
```

non viene applicato nessun basePath.

## Personalizzazione testi e prezzi

Pacchetti:

```bash
src/data/pricing.ts
```

FAQ:

```bash
src/data/faq.ts
```

Colori e stile:

```bash
src/app/globals.css
tailwind.config.ts
```

## Nota etica

Il copy del sito parla sempre di recensioni reali, clienti autentici e richieste recensione guidate. Non promette recensioni garantite e non usa comunicazione legata a recensioni false o artificiali.
