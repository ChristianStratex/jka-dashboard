/**
 * JKA Consulting — Executive Dashboard (Render web service)
 * Serves the dashboard and exposes audited data at /api/data.
 * To go live: set GHL_API_KEY in env and implement fetchLive() to replace loadData().
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const loadData = () => JSON.parse(fs.readFileSync(path.join(__dirname, "jka.json"), "utf8"));

app.get("/api/data", (req, res) => {
  try { res.json(loadData()); }
  catch (e) { res.status(500).json({ error: String(e) }); }
});
app.get("/healthz", (req, res) => res.send("ok"));
app.use(express.static(__dirname));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(PORT, () => console.log(`JKA dashboard on :${PORT}`));
