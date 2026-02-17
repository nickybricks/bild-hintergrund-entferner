# BG Remover – Hintergrund-Entfernung im Browser

## 1. User Journey

### Hauptfluss
1. **Einstieg** → Nutzer landet auf der Startseite, sieht Upload-Zone
2. **Bild hochladen** → Drag & Drop (Desktop) oder Datei-Auswahl (Mobile)
3. **Verarbeitung** → Fortschrittsanzeige während Modell lädt & Bild verarbeitet wird
4. **Ergebnis** → Freigestelltes Bild wird angezeigt (Checkerboard-Vorschau)
5. **Download** → PNG-Download oder neues Bild starten

### Edge Cases
- Datei zu groß (>10 MB) → Fehlermeldung
- Falsches Format (nicht PNG/JPG/WEBP) → Fehlermeldung
- Bild zu groß (>4096×4096px) → Verarbeitung schlägt fehl, Fehlermeldung
- Modell-Download fehlgeschlagen → Catch mit lokalisierter Fehlermeldung
- Browser ohne WASM-Support → Graceful Degradation (nicht explizit behandelt)

### Alternative Pfade
- Sprache wechseln (DE/EN) jederzeit möglich
- Dark/Light Mode Toggle jederzeit möglich

---

## 2. Tech Stack

### Frontend
- **Framework:** React 18 + TypeScript (strict)
- **Build:** Vite (esnext target, SWC Plugin)
- **Styling:** Tailwind CSS + shadcn/ui Komponenten
- **Begründung:** Vite für schnelle Dev-Zyklen, Tailwind für konsistentes Design-System, shadcn für zugängliche UI-Primitives

### Backend
- **Keiner** – Alles läuft clientseitig im Browser
- **ML-Modell:** @imgly/background-removal v1.5.5 (nutzt onnxruntime-web v1.20.1 für WASM-Inferenz)
- **Begründung:** 100% Privatsphäre, keine Daten verlassen den Browser, kein Server nötig

### Hosting/Deployment
- **Plattform:** Lovable (Preview + Published URL)
- **Published URL:** https://bgrnd.lovable.app
- **CI/CD:** Automatisch über Lovable

---

## 3. Design Rules

### Farben (HSL in CSS-Variablen)
- **Primary:** `hsl(32, 100%, 50%)` (#ff8800 Orange)
- **Primary Hover:** `hsl(32, 100%, 45%)`
- **Light Mode:** Hintergrund weiß, Text `hsl(0, 0%, 10%)`
- **Dark Mode:** Hintergrund `hsl(0, 0%, 4%)`, Text `hsl(0, 0%, 96%)`
- **Muted:** Light `hsl(220, 9%, 46%)` / Dark `hsl(220, 9%, 64%)`

### Typografie
- **Font:** Inter (Google Fonts), Gewichte 300–700
- **Überschrift:** text-3xl sm:text-4xl, font-bold, tracking-tight
- **Body:** text-sm sm:text-base
- **Labels/Badges:** text-xs

### Spacing
- Content max-width: 1260px (Header), 800px (Upload-Zone)
- Cards: padding 12–48px, border-radius 20px
- Buttons: border-radius 16px, padding 8–12px horizontal

### Komponenten-Regeln
- **Glass Cards:** `backdrop-filter: blur(16px) saturate(1.2)`, halbtransparenter Hintergrund
- **Glass Pills:** border-radius 9999px (Navigation-Inseln)
- **Buttons Primary:** Solid Orange, hover scale(1.03), active scale(0.97)
- **Buttons Ghost:** Transparent, hover bg-foreground/5

### Responsive Breakpoints
- Mobile-first Design
- `md:` (768px) – Desktop-Header-Layout
- `sm:` (640px) – Typografie-Skalierung

### Barrierefreiheit
- aria-labels auf allen interaktiven Elementen
- Min. Touch-Target 44px auf Mobile (p-1.5 bis p-2 auf Buttons)
- Haptisches Feedback via `navigator.vibrate(10)` auf Touch-Geräten

---

## 4. Frameworks

### Genutzte Libraries
| Library | Version | Zweck |
|---|---|---|
| @imgly/background-removal | 1.5.5 | ML-basierte Hintergrundentfernung |
| onnxruntime-web | 1.20.1 | WASM-Runtime für ML-Modell |
| lucide-react | 0.462.0 | Icons |
| react-router-dom | 6.30.1 | Routing |
| tailwindcss-animate | 1.0.7 | Animationen |
| sonner | 1.7.4 | Toast-Benachrichtigungen |

### Warum diese Kombination
- **@imgly/background-removal:** Einzige produktionsreife clientseitige BG-Removal-Library
- **onnxruntime-web 1.20.1:** Stabile Version, kompatibel mit @imgly v1.5.5 (neuere Versionen verursachen `tn[f] is not a function` Fehler)
- **Modell isnet_quint8:** Quantisiertes Modell (~30 MB statt ~170 MB), guter Kompromiss Qualität/Größe

### Bekannte Einschränkungen
- WASM-Inferenz benötigt SharedArrayBuffer → COOP/COEP Headers nötig (via Meta-Tags, `credentialless` statt `require-corp`)
- Modell-Download beim ersten Aufruf (~30 MB), danach gecacht
- Max. Bildgröße 4096×4096px (ONNX-Limitation)
- Kein iOS Safari < 15.2 Support (fehlender WASM-SIMD)

---

## 5. Implementation Plan

### Phase 1: MVP ✅
- [x] Bild-Upload (Drag & Drop + File Picker)
- [x] Hintergrundentfernung mit Fortschrittsanzeige
- [x] Ergebnis-Vorschau mit Checkerboard
- [x] PNG-Download
- [x] Responsive Design (Mobile + Desktop)
- [x] Dark Mode mit Persistenz
- [x] Zweisprachig (DE/EN)
- [x] Liquid Glass Design-System
- [x] Impressum & Datenschutz als eigene Seiten (/impressum, /datenschutz)
- [x] SEO-Content-Sections (Why-Section, FAQ-Accordion)
- [x] Schema.org JSON-LD (WebApplication + FAQPage)
- [x] Google Analytics (G-8JNDXEPL0H)

### Phase 2: Erweiterungen
- [ ] Batch-Verarbeitung (mehrere Bilder gleichzeitig)
- [ ] Hintergrund ersetzen (Farbe oder Bild)
- [ ] Bild-Zuschnitt nach Entfernung
- [ ] PWA-Support (Offline-Nutzung nach erstem Modell-Download)

### Phase 3: Optimierung
- [ ] Service Worker für Modell-Caching
- [ ] WebGPU-Backend wenn verfügbar (deutlich schneller als WASM)
- [ ] Bildkomprimierung vor Verarbeitung bei großen Dateien
- [ ] Performance-Monitoring
- [ ] OG-Image erstellen (1200x630px)

### Offene Punkte
- Datenschutz-Text erwähnt "kein Tracking" – muss ggf. angepasst werden wegen Google Analytics
- Kein Error-Boundary für unerwartete Fehler

---

## Session-Log

### 2026-02-15
- **Stand:** MVP komplett, Design-Overhaul abgeschlossen
- **Gelöst:** onnxruntime-web Kompatibilitätsproblem (Version 1.20.1 + backend: 'wasm' erzwungen)

### 2026-02-17
- **Stand:** SEO-Sections (WhySection + FAQSection) hinzugefügt, Impressum & Datenschutz als eigene Routes erstellt, Google Analytics Tag eingefügt
- **Erledigt:** i18n für alle neuen Texte (DE/EN), Schema.org FAQPage JSON-LD, Footer-Links zu /impressum und /datenschutz
- **Offener Punkt:** Datenschutz-Text prüfen/anpassen wegen GA-Tracking
- **Nächste Schritte:** OG-Image erstellen, Datenschutz-Text aktualisieren, ggf. Cookie-Banner
