// Probetraining-Formular für Jessi's Taekwondoschule
// Nimmt die Formulardaten entgegen und verschickt zwei E-Mails über Resend:
//   1. Bestätigung an die anfragende Person (mit Info-PDF im Anhang)
//   2. Übersicht an die Schule
// Es wird nichts gespeichert. Die Anfragen liegen danach nur im Postfach.
//
// Benötigte Einstellungen (in Cloudflare unter "Settings → Variables"):
//   RESEND_API_KEY  (geheim)  – API-Schlüssel aus dem eigenen Resend-Konto
//   SITE_URL                  – z. B. https://www.jessistaekwondoschule.de
//   ALLOWED_ORIGINS           – kommagetrennt, z. B. https://www.jessistaekwondoschule.de,https://jessistaekwondoschule.de
//   MAIL_FROM                 – z. B. Jessi's Taekwondoschule <probetraining@jessistaekwondoschule.de>
//   MAIL_TO                   – Empfänger der Übersicht, z. B. probetraining@jessistaekwondoschule.de

const ERREICHBARKEIT = [
  "vor 08:00 Uhr",
  "von 08:00 Uhr bis 12:00 Uhr",
  "von 12:00 Uhr bis 13:00 Uhr",
  "von 13:00 Uhr bis 16:00 Uhr",
  "ab 16:00 Uhr",
];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0] || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ ok: false, error: "Nur POST erlaubt." }, 405, cors);
    if (allowed.length && !allowed.includes(origin)) {
      return json({ ok: false, error: "Anfrage von dieser Seite nicht erlaubt." }, 403, cors);
    }

    let d;
    try {
      d = await request.json();
    } catch {
      return json({ ok: false, error: "Ungültige Anfrage." }, 400, cors);
    }

    // Spamschutz: verstecktes Feld muss leer bleiben. Bots bekommen "ok", es wird aber nichts verschickt.
    if (d.website) return json({ ok: true }, 200, cors);

    const f = k => String(d[k] ?? "").trim().slice(0, k === "nachricht" ? 3000 : 200);
    const data = {
      vorname: f("vorname"),
      nachname: f("nachname"),
      alter: f("alter"),
      erziehungsberechtigter: f("erziehungsberechtigter"),
      telefon: f("telefon"),
      email: f("email"),
      erreichbarkeit: f("erreichbarkeit"),
      standort: f("standort"),
      kurs: f("kurs"),
      erstes: f("erstesProbetraining"),
      zweites: f("zweitesProbetraining"),
      hinweis: f("terminHinweis"),
      alternativ: f("alternativeTrainingszeit"),
      nachricht: f("nachricht"),
    };

    // Pflichtfelder prüfen
    const fehlt = ["vorname", "nachname", "alter", "telefon", "email", "erreichbarkeit", "standort", "kurs"].filter(
      k => !data[k]
    );
    if (fehlt.length) return json({ ok: false, error: "Bitte fülle alle Pflichtfelder aus." }, 400, cors);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return json({ ok: false, error: "Bitte gib eine gültige E-Mail-Adresse ein." }, 400, cors);
    }
    if (!ERREICHBARKEIT.includes(data.erreichbarkeit)) {
      return json({ ok: false, error: "Bitte wähle, wann du erreichbar bist." }, 400, cors);
    }

    // Aktuelle Einstellungen der Website laden (Kurse, Zeiten, "voll", Info-PDF)
    const site = (env.SITE_URL || "").replace(/\/$/, "");
    let config;
    try {
      const r = await fetch(`${site}/probetraining-config.json`, { cf: { cacheTtl: 60 } });
      config = await r.json();
    } catch {
      return json({ ok: false, error: "Einstellungen konnten nicht geladen werden. Bitte später erneut versuchen." }, 502, cors);
    }
    const standort = (config.standorte || []).find(s => s.name === data.standort);
    const kurs = standort && (standort.kurse || []).find(k => k.name === data.kurs);
    if (!kurs) return json({ ok: false, error: "Bitte wähle Standort und Kurs erneut aus." }, 400, cors);

    const warteliste = !!kurs.voll;
    data.trainingszeit = kurs.zeit || "";
    if (!warteliste && !data.erstes) {
      return json({ ok: false, error: "Bitte wähle einen Wunschtermin." }, 400, cors);
    }

    const pdfUrl = config.info_pdf ? `${site}${config.info_pdf}` : null;
    const attachments = pdfUrl ? [{ path: pdfUrl, filename: "Probetraining-Info-Jessi-Taekwondoschule.pdf" }] : [];

    // 1) Mail an die Schule
    const schule = await sendMail(env, {
      from: env.MAIL_FROM,
      to: [env.MAIL_TO],
      reply_to: data.email,
      subject: `${warteliste ? "Neue Wartelisten-Anfrage" : "Neue Probetraining-Anfrage"}: ${data.vorname} ${data.nachname}`,
      html: mailSchule(data, warteliste),
    });
    if (!schule.ok) {
      return json({ ok: false, error: "Deine Anfrage konnte nicht gesendet werden. Bitte versuche es erneut oder ruf uns an." }, 502, cors);
    }

    // 2) Bestätigung an die anfragende Person
    const bestaetigung = await sendMail(env, {
      from: env.MAIL_FROM,
      to: [data.email],
      reply_to: "info@jessistaekwondoschule.de",
      subject: warteliste
        ? "Du stehst auf der Warteliste – Jessi's Taekwondoschule"
        : "Deine Probetraining-Anfrage – Jessi's Taekwondoschule",
      html: warteliste ? mailWarteliste(data) : mailProbetraining(data),
      attachments,
    });

    return json({ ok: true, bestaetigungVersendet: bestaetigung.ok }, 200, cors);
  },
};

async function sendMail(env, payload) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) console.log("Resend-Fehler", r.status, await r.text());
  return { ok: r.ok };
}

function json(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers: { ...headers, "Content-Type": "application/json" } });
}

const esc = s =>
  String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const nl2br = s => esc(s).replace(/\n/g, "<br>");

// ---------- E-Mail-Vorlagen ----------

const NAVY = "#0D1B2A";
const CYAN = "#00C5D9";

function rahmen(inhalt) {
  return `<!doctype html><html lang="de"><body style="margin:0;padding:0;background:#f1f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f7f6;padding:24px 0;"><tr><td align="center">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;">
<tr><td style="background:${NAVY};padding:24px;text-align:center;">
<div style="color:#ffffff;font-size:22px;font-weight:bold;">Jessi's Taekwondoschule</div>
<div style="color:${CYAN};font-size:14px;margin-top:4px;">Heimenkirch &amp; Kißlegg</div>
</td></tr>
<tr><td style="padding:28px 28px 8px 28px;font-size:15px;line-height:1.6;">${inhalt}</td></tr>
<tr><td style="padding:8px 28px 28px 28px;font-size:15px;line-height:1.6;">
<p style="margin:16px 0 0 0;">Sportliche Grüße<br><strong>Jessica Rogg</strong><br>Jessi's Taekwondoschule<br>
<a href="mailto:info@jessistaekwondoschule.de" style="color:${CYAN};">info@jessistaekwondoschule.de</a><br>0162 9277072</p>
</td></tr></table>
<p style="font-size:12px;color:#6b7280;margin:16px;">Dies ist eine automatische Nachricht. Bei Fragen antworte einfach auf diese E-Mail oder schreib an info@jessistaekwondoschule.de.</p>
</td></tr></table></body></html>`;
}

function box(titel, zeilen) {
  const rows = zeilen
    .filter(([, v]) => v)
    .map(([k, v]) => `<div><strong>${esc(k)}:</strong> ${esc(v)}</div>`)
    .join("");
  return `<div style="background:#eef9fa;border-left:4px solid ${CYAN};border-radius:6px;padding:14px 18px;margin:18px 0;">
<div style="font-weight:bold;margin-bottom:6px;">${esc(titel)}</div>${rows}</div>`;
}

function mitbringen() {
  return `<div style="background:#f9fafb;border-radius:6px;padding:14px 18px;margin:18px 0;">
<div style="font-weight:bold;margin-bottom:6px;">Zum Probetraining brauchst du lediglich:</div>
<ul style="margin:0;padding-left:20px;"><li>bequeme Sportkleidung</li><li>etwas zu trinken</li></ul></div>
<p>Das Probetraining ist selbstverständlich kostenlos und unverbindlich.</p>`;
}

function mailProbetraining(d) {
  const termin = (t) => (t && d.hinweis ? `${t} (${d.hinweis})` : t);
  return rahmen(`<p>Hallo ${esc(d.vorname)},</p>
<p>vielen Dank für deine Anfrage zum Probetraining bei Jessi's Taekwondoschule.</p>
<p>Wir freuen uns sehr, dich (oder dein Kind) beim Probetraining begrüßen zu dürfen!</p>
<p>Im Anhang findest du ein Infoblatt mit allen wichtigen Informationen zum Probetraining, damit du bestens vorbereitet bist.</p>
${box("Deine Buchungsdetails:", [
  ["Standort", d.standort],
  ["Kurs", d.kurs],
  ["Trainingszeit", d.trainingszeit],
  ["1. Probetraining", termin(d.erstes)],
  ["2. Probetraining", termin(d.zweites)],
])}
<p>Deine Termine sind damit verbindlich reserviert. Bei Fragen kannst du dich jederzeit gerne bei uns melden.</p>
${mitbringen()}
<p>Wenn du vorab Fragen hast, kannst du dich jederzeit gerne bei mir melden.</p>`);
}

function mailWarteliste(d) {
  return rahmen(`<p>Hallo ${esc(d.vorname)},</p>
<p>vielen Dank für dein Interesse an Jessi's Taekwondoschule.</p>
<p>Der gewünschte Kurs ist im Moment leider voll belegt. Wir haben dich auf unsere <strong>Warteliste</strong> gesetzt und melden uns bei dir, sobald ein Platz frei wird. Dann vereinbaren wir gemeinsam einen Termin für dein Probetraining.</p>
${box("Deine Angaben:", [
  ["Standort", d.standort],
  ["Kurs", d.kurs],
  ["Trainingszeit", d.trainingszeit],
  ["Interesse an alternativer Trainingszeit", d.alternativ],
])}
<p>Im Anhang findest du schon jetzt unser Infoblatt mit allen wichtigen Informationen zum Probetraining.</p>
<p>Du möchtest doch nicht mehr auf der Warteliste stehen? Dann antworte einfach kurz auf diese E-Mail.</p>`);
}

function mailSchule(d, warteliste) {
  const zeile = (k, v) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#6b7280;vertical-align:top;white-space:nowrap;">${esc(k)}:</td><td style="padding:6px 0;">${v}</td></tr>`;
  const termin = (t) => (t && d.hinweis ? `${esc(t)} (${esc(d.hinweis)})` : esc(t));
  const rows = [
    zeile("Name", `<strong>${esc(d.vorname)} ${esc(d.nachname)}</strong>`),
    zeile("Alter", esc(d.alter)),
    d.erziehungsberechtigter && zeile("Erziehungsberechtigte/r", esc(d.erziehungsberechtigter)),
    zeile("Telefon", `<a href="tel:${esc(d.telefon.replace(/[^\d+]/g, ""))}">${esc(d.telefon)}</a>`),
    zeile("E-Mail", `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>`),
    zeile("Erreichbarkeit", esc(d.erreichbarkeit)),
    zeile("Standort", esc(d.standort)),
    zeile("Kurs", esc(d.kurs)),
    warteliste
      ? zeile("Status", `<strong style="color:#c2410c;">WARTELISTE – Kurs voll</strong>`)
      : zeile("1. Probetraining", termin(d.erstes)),
    !warteliste && zeile("2. Probetraining", termin(d.zweites)),
    warteliste && d.alternativ && zeile("Alternative Trainingszeit", esc(d.alternativ)),
    d.nachricht && zeile("Nachricht", nl2br(d.nachricht)),
  ]
    .filter(Boolean)
    .join("");
  const farbe = warteliste ? "#c2410c" : CYAN;
  return `<!doctype html><html lang="de"><body style="margin:0;padding:24px;background:#f1f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#fff;border-radius:10px;overflow:hidden;margin:0 auto;">
<tr><td style="background:${NAVY};padding:20px 24px;border-bottom:4px solid ${farbe};">
<div style="color:#fff;font-size:20px;font-weight:bold;">${warteliste ? "Neue Wartelisten-Anfrage" : "Neue Probetraining-Anfrage"}</div>
<div style="color:${CYAN};font-size:13px;margin-top:4px;">Jessi's Taekwondoschule</div></td></tr>
<tr><td style="padding:20px 24px;font-size:15px;"><table role="presentation" cellspacing="0" cellpadding="0">${rows}</table>
<p style="font-size:13px;color:#6b7280;margin-top:20px;">Tipp: Mit „Antworten“ schreibst du direkt an ${esc(d.email)}.</p></td></tr></table></body></html>`;
}
