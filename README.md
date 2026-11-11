# Premium Portfolio

React 19 · TypeScript 7 · Vite 8 — ohne zusätzliche UI-Bibliotheken.

## Starten

```bash
npm install
npm run dev       # Entwicklungsserver → http://localhost:5173
npm run build     # Typecheck + Production-Build nach /dist
npm run preview   # Build lokal ansehen
```

## Inhalte anpassen

Alle Texte, Projekte, Skills, Stationen und Kontaktdaten stehen in **`src/data/content.ts`**.

- **Eigenes Foto:** Bild in `public/` legen (z. B. `public/foto.jpg`) und in `src/components/Hero.tsx` das Platzhalter-SVG durch `<img src="/foto.jpg" alt="…" />` ersetzen.
- **Lebenslauf:** PDF in `public/` legen und `cvUrl` in `content.ts` setzen (z. B. `/lebenslauf.pdf`).
- **Kontaktformular:** In `src/components/Contact.tsx` ist das Absenden simuliert (`TODO`). Für echten Versand z. B. Formspree oder EmailJS anbinden.
- **Farben & Schriften:** Design-Tokens oben in `src/index.css` (`--primary`, `--secondary`, …).

## Struktur

```
src/
  data/content.ts      Alle Inhalte (typisiert)
  hooks/               useTheme, useReveal, useInView, useCountUp, useTypewriter, usePointerEffects
  components/          Navbar, Hero, About, Skills, Projects (+Modal), Experience,
                       Services/Process, Testimonials, Contact, Footer, Background, Cursor …
  index.css            Komplettes Styling inkl. Dark/Light-Theme & Responsive
```
