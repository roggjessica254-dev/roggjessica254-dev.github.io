# Jessi's Taekwondoschule – Website

Statische Website für www.jessistaekwondoschule.de, gehostet über GitHub Pages.

## Inhalte bearbeiten (ohne Programmieren)

1. https://app.pagescms.org öffnen und mit GitHub anmelden.
2. Dieses Repository auswählen.
3. Links im Menü:
   - **Aktuelles (Beiträge):** neuen Beitrag anlegen, Bilder hochladen, YouTube-Links ergänzen. Mit „Entwurf“ bleibt ein Beitrag unsichtbar.
   - **Probetraining (Termine & Kurse):** pro Standort nur den 1. Probetraining-Tag eintragen. Der 2. Termin ist automatisch 7 Tage später. Ist ein Kurs voll, den Haken bei „Kurs ist voll“ setzen. Dann sehen Interessenten nur die Warteliste.
   - **Downloads:** PDF hochladen, Titel und Beschreibung eintragen.
   - **Ferienzeiten / Trainingsausfälle**
   - **Lernvideos (YouTube)**
4. Speichern. Nach ca. 1–2 Minuten ist die Änderung online (Fortschritt unter „Actions“ auf GitHub).

## Aufbau

| Ordner | Inhalt |
|---|---|
| `content/` | Alle bearbeitbaren Inhalte (JSON) |
| `client/public/files/` | Bilder und PDFs |
| `client/src/` | Seiten und Design (React + Tailwind) |
| `worker/` | Mail-Helfer für das Probetraining-Formular (Cloudflare Worker + Resend) |
| `.pages.yml` | Einstellungen für den Verwaltungsbereich |
| `.github/workflows/deploy.yml` | Automatischer Build und Veröffentlichung |

## Formular

Das Formular schickt die Angaben an den Cloudflare Worker (Adresse steht in der Repository-Variable `FORM_ENDPOINT`).
Der Worker verschickt zwei E-Mails über Resend und speichert nichts. Einrichtung: siehe `worker/README.md`.

Personenbezogene Daten (z. B. Export alter Anfragen) gehören **nie** in dieses Repository – es ist öffentlich.
