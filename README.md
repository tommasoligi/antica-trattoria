# Antica Trattoria — Fano — Sito Ufficiale

Sito vetrina per Antica Trattoria, Via Sant'Andrea in Villis 2, Fano PU.
Menù, foto, recensioni Google, prenotazione diretta su WhatsApp.

**Live:** https://tommasoligi.github.io/antica-trattoria/
**Contatti:** Tel 0721 885138 — WhatsApp 351 113 6342 — Facebook Ufficiale

### Orari

**❄️ Inverno — Ottobre / Aprile**
- Giovedì: Solo Cena
- Venerdì: Solo Cena
- Sabato: Pranzo e Cena
- Domenica: Pranzo e Cena
- Lun-Mer: Chiuso

**☀️ Estate — Maggio / Settembre**
- Martedì-Venerdì: Solo Cena
- Sabato: Pranzo e Cena
- Domenica: Pranzo e Cena
- Lunedì: Chiuso

> Gli orari sono indicativi, sempre meglio confermare su WhatsApp.

### File

- `index.html` — struttura, hero, recensioni Elfsight, menù, contatti. Include cache-buster istantaneo con `Date.now()` per risolvere cache Safari iPhone.
- `style.css` — design, responsive, fix input data che non sborda, hours-box per orari stagionali.
- `script.js` — render menù, tendine tutte chiuse di default, filtro, progress bar, invio WhatsApp senza `%0A`.

### Come modificare il menù

Apri `script.js` e modifica gli array in cima:
```js
const antipasti = [{n:'Nome', d:'descrizione', p:'prezzo'}]
