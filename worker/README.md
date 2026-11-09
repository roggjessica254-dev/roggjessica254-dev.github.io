# Mail-Helfer für das Probetraining-Formular

Ein Cloudflare Worker (kostenloser Tarif reicht) nimmt das Formular entgegen und verschickt über Resend:

- die Bestätigung an die Eltern bzw. Interessenten (mit Info-PDF), getrennt für Probetraining und Warteliste
- die Übersicht an probetraining@jessistaekwondoschule.de

Er liest Kurse, Zeiten, „voll“ und das Info-PDF live aus `https://www.jessistaekwondoschule.de/probetraining-config.json`.
So passt alles automatisch, wenn im Verwaltungsbereich etwas geändert wird.

## Einrichtung

1. **Resend:** Konto anlegen → Domains → `jessistaekwondoschule.de` hinzufügen (Region EU wählen) → angezeigte DNS-Einträge bei SiteGround eintragen → „Verify“. MX-Einträge der Postfächer nicht verändern.
   Danach API Keys → neuen Schlüssel mit „Sending access“ erstellen.
2. **Cloudflare:** Konto anlegen → Workers & Pages → Create → Worker → Name `probetraining` → Deploy → „Edit code“ → Inhalt von `src/index.js` einfügen → Deploy.
3. Worker → Settings → Variables and Secrets:
   - `RESEND_API_KEY` (Typ **Secret**) = Schlüssel aus Resend
   - `SITE_URL` = `https://www.jessistaekwondoschule.de`
   - `ALLOWED_ORIGINS` = `https://www.jessistaekwondoschule.de,https://jessistaekwondoschule.de`
   - `MAIL_FROM` = `Jessi's Taekwondoschule <probetraining@jessistaekwondoschule.de>`
   - `MAIL_TO` = `probetraining@jessistaekwondoschule.de`
4. Die Worker-Adresse (z. B. `https://probetraining.NAME.workers.dev`) in GitHub unter Settings → Secrets and variables → Actions → **Variables** als `FORM_ENDPOINT` eintragen und den Workflow neu starten.

Während der Vorschau-Phase zusätzlich die Vorschau-Adresse in `ALLOWED_ORIGINS` aufnehmen (z. B. `https://NAME.github.io`) und `SITE_URL` vorübergehend darauf setzen.
