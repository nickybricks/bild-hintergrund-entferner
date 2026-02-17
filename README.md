# bgrnd.de – Bild-Hintergrund-Entferner

Ein kostenloser Background Remover, speziell für den deutschsprachigen Raum. Komplett auf Deutsch, ohne Abo-Modell, ohne aggressives Tracking.

🔗 **Live:** [https://bgrnd.de](https://bgrnd.de)

## Was macht das Tool?

Bild hochladen → Hintergrund wird automatisch per KI entfernt → freigestelltes Bild herunterladen. Fertig.

Im Backend wird [rembg](https://github.com/danielgatis/rembg) verwendet, eine Open-Source-Library, die auf dem U²-Net KI-Modell basiert.

## Tech-Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend:** rembg (U²-Net)
- **Tracking:** Ausschließlich Google Analytics – nur um den Traffic nachzuvollziehen, mehr nicht.

## Lokal starten

```bash
git clone https://github.com/nickybricks/bild-hintergrund-entferner.git
cd bild-hintergrund-entferner
npm install
npm run dev
```

## Lizenz

MIT – siehe [LICENSE](LICENSE)
