# JKA Consulting — Executive Dashboard

Executive dashboard for **JKA Consulting LLC** (Adreain Brown / @amob_gocrazy), modeled on the
MSFS/Tiffany dashboard. Pulls together GoHighLevel (CRM, payments, conversations, opportunities),
Instagram, and payment-gateway data into one executive view.

## Run locally
```bash
npm install
npm start           # http://localhost:3000
```

## Deploy on Render (Web Service)
- **Build command:** `npm install`
- **Start command:** `node server.js`
- **Environment:** Node 18+. `PORT` is provided by Render automatically.

## Files
- `server.js` — Express server; serves the UI and `GET /api/data`.
- `index.html` — single-file dashboard (Chart.js via CDN). Has embedded data as a fallback so it also renders if opened directly.
- `jka.json` — the audited data set (single source of truth).
- `DASHBOARD_SPEC.md` — section-by-section spec + data-source mapping.

## Going live (next step)
`server.js#loadData()` reads `jka.json`. To make it live, add a `fetchLive()` that calls the
GoHighLevel API (contacts, opportunities, transactions) and the Instagram Graph API, using a
`GHL_API_KEY` / IG token stored in Render env vars — **you** add the secret in Render; it is never
committed. Cache to `jka.json` shape so the frontend needs no changes.

_Data snapshot: 2026-07-09._
