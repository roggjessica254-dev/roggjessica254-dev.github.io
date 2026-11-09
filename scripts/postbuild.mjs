// Nach dem Vite-Build: statische Seiten für alle Adressen erzeugen,
// damit jede Unterseite direkt aufrufbar ist (GitHub Pages kennt keine SPA-Weiterleitung).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const indexHtml = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const routes = [
  "kinder-taekwondo",
  "jugendliche",
  "erwachsene",
  "jugendliche-erwachsene",
  "probetraining",
  "taekwondo-heimenkirch",
  "taekwondo-kisslegg",
  "ueber-uns",
  "mitgliedsbeitraege",
  "downloads",
  "schulprojekte",
  "faq",
  "kontakt",
  "impressum",
  "datenschutz",
  "danke",
  "aktuelles",
  "lernvideos",
];

const newsDir = path.join(root, "content", "aktuelles");
for (const file of fs.readdirSync(newsDir)) {
  if (file.endsWith(".json")) routes.push(`aktuelles/${file.slice(0, -5)}`);
}

for (const r of routes) {
  const dir = path.join(dist, r);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), indexHtml);
}
fs.writeFileSync(path.join(dist, "404.html"), indexHtml);

// Einstellungen fürs Formular (liest der Mail-Helfer bei Cloudflare)
fs.copyFileSync(path.join(root, "content", "probetraining.json"), path.join(dist, "probetraining-config.json"));

// Alte PDF-Links (/manus-storage/...) weiter erreichbar halten, z. B. aus älteren E-Mails
const files = path.join(dist, "files");
const legacy = path.join(dist, "manus-storage");
fs.mkdirSync(legacy, { recursive: true });
for (const f of fs.readdirSync(files)) {
  if (f.toLowerCase().endsWith(".pdf")) fs.copyFileSync(path.join(files, f), path.join(legacy, f));
}

// Sitemap
const base = "https://www.jessistaekwondoschule.de";
const urls = ["", ...routes.filter(r => r !== "danke" && r !== "jugendliche-erwachsene")];
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(u => `  <url><loc>${base}/${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);

console.log(`Postbuild: ${routes.length} Unterseiten erzeugt.`);
