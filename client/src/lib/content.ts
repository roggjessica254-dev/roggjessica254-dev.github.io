// Lädt die Inhalte aus dem Ordner /content (werden im Verwaltungsbereich bearbeitet).
import downloadsData from "@content/downloads.json";
import ferienData from "@content/ferienzeiten.json";
import lernvideosData from "@content/lernvideos.json";
import probetrainingData from "@content/probetraining.json";

// ---------- Aktuelles ----------
type GalerieBild = { bild: string; vollstaendig?: boolean; ausschnitt?: string };
type AktuellesDatei = {
  titel: string;
  datum: string; // JJJJ-MM-TT
  ort?: string;
  vorschautext?: string;
  titelbild?: string;
  titelbild_vollstaendig?: boolean;
  titelbild_ausschnitt?: string;
  text?: string;
  galerie?: (GalerieBild | string)[];
  youtube?: ({ url: string; titel?: string } | string)[];
  entwurf?: boolean;
};

export type AktuellesPost = {
  id: string;
  title: string;
  date: string; // TT.MM.JJJJ
  sortKey: number;
  location: string;
  previewText: string;
  image: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  content: string;
  gallery: { src: string; fit: "cover" | "contain"; position?: string }[];
  videos: { url: string; title: string }[];
};

function isoToGerman(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? `${m[3]}.${m[2]}.${m[1]}` : iso;
}

const aktuellesFiles = import.meta.glob<AktuellesDatei>("@content/aktuelles/*.json", {
  eager: true,
  import: "default",
});

export const aktuellesPosts: AktuellesPost[] = Object.entries(aktuellesFiles)
  .map(([path, p]) => {
    const id = path.split("/").pop()!.replace(/\.json$/, "");
    return { id, p };
  })
  .filter(({ p }) => p && p.titel && !p.entwurf)
  .map(({ id, p }) => ({
    id,
    title: p.titel,
    date: isoToGerman(p.datum),
    sortKey: new Date(p.datum).getTime() || 0,
    location: p.ort || "",
    previewText: p.vorschautext || "",
    image: p.titelbild || "",
    imagePosition: p.titelbild_ausschnitt || undefined,
    imageFit: p.titelbild_vollstaendig ? ("contain" as const) : ("cover" as const),
    content: p.text || "",
    gallery: (p.galerie || [])
      .map(g => (typeof g === "string" ? { bild: g } : g))
      .filter(g => g && g.bild)
      .map(g => ({
        src: g.bild,
        fit: g.vollstaendig ? ("contain" as const) : ("cover" as const),
        position: g.ausschnitt || undefined,
      })),
    videos: (p.youtube || [])
      .map(v => (typeof v === "string" ? { url: v } : v))
      .filter(v => v && v.url)
      .map(v => ({ url: v.url, title: v.titel || "Video auf YouTube ansehen" })),
  }))
  .sort((a, b) => b.sortKey - a.sortKey);

// ---------- Downloads & Ferienzeiten ----------
export type DownloadEintrag = { titel: string; beschreibung?: string; datei: string };
export const downloads: DownloadEintrag[] = (downloadsData.dateien || []).filter(
  (d: DownloadEintrag) => d && d.titel && d.datei
);

export type FerienEintrag = { datum: string; grund: string };
export const ferienzeiten = {
  ueberschrift: ferienData.ueberschrift || "Jahresübersicht",
  heimenkirch: (ferienData.heimenkirch || []) as FerienEintrag[],
  kisslegg: (ferienData.kisslegg || []) as FerienEintrag[],
};

// ---------- Lernvideos ----------
export type LernVideo = { guertel: string; titel: string; url: string; beschreibung?: string };
export const lernvideos: LernVideo[] = (lernvideosData.videos || []).filter(
  (v: LernVideo) => v && v.titel && v.url
);

// ---------- YouTube ----------
export function youtubeId(url: string): string | null {
  const m =
    /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/.exec(url || "");
  return m ? m[1] : null;
}

// ---------- Probetraining ----------
export type Kurs = { name: string; zeit: string; voll: boolean };
export type Termin = { datum: string; hinweis?: string };
export type Standort = { name: string; termine: Termin[]; kurse: Kurs[] };

export const probetraining = {
  infoPdf: (probetrainingData.info_pdf as string) || "",
  standorte: (probetrainingData.standorte || []) as Standort[],
};

const WOCHENTAGE = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function parseIso(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

export function formatTermin(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${WOCHENTAGE[d.getDay()]}, ${dd}.${mm}.${d.getFullYear()}`;
}

export type TerminPaar = { erstes: string; zweites: string; hinweis?: string; key: string };

/** Alle zukünftigen Probetermine eines Standorts; Folgetermin = genau 7 Tage später. */
export function terminPaare(standortName: string, heute = new Date()): TerminPaar[] {
  const standort = probetraining.standorte.find(s => s.name === standortName);
  if (!standort) return [];
  const start = new Date(heute.getFullYear(), heute.getMonth(), heute.getDate());
  return (standort.termine || [])
    .map(t => ({ d: parseIso(t.datum), hinweis: (t.hinweis || "").trim() }))
    .filter((t): t is { d: Date; hinweis: string } => !!t.d && t.d >= start)
    .sort((a, b) => a.d.getTime() - b.d.getTime())
    .map(t => {
      const zweit = new Date(t.d.getFullYear(), t.d.getMonth(), t.d.getDate() + 7);
      return {
        erstes: formatTermin(t.d),
        zweites: formatTermin(zweit),
        hinweis: t.hinweis || undefined,
        key: `${t.d.getFullYear()}-${String(t.d.getMonth() + 1).padStart(2, "0")}-${String(t.d.getDate()).padStart(2, "0")}`,
      };
    });
}
