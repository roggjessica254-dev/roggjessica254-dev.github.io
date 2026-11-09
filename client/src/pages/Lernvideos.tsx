import SEOHead from "@/components/SEOHead";
import { IMAGES } from "@/lib/images";
import { lernvideos } from "@/lib/content";
import { ArrowDown, ExternalLink, Play, Youtube } from "lucide-react";

type Video = {
  title: string;
  url: string;
  description?: string;
};

type Guertelstufe = {
  id: string;
  name: string;
  subtitle: string;
  beltClass: string;
  knotClass: string;
};

const GUERTELSTUFEN: Guertelstufe[] = [
  { id: "weissgurt", name: "Weißgurt", subtitle: "Dein Start", beltClass: "bg-white border border-slate-300", knotClass: "bg-slate-300" },
  { id: "weiss-gelb-gurt", name: "Weiß-Gelb-Gurt", subtitle: "Grundschule", beltClass: "bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#facc15_50%,#facc15_100%)] border border-slate-300", knotClass: "bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,#facc15_50%,#facc15_100%)]" },
  { id: "gelbgurt", name: "Gelbgurt", subtitle: "1. Form", beltClass: "bg-yellow-400", knotClass: "bg-yellow-500" },
  { id: "gelb-gruen-gurt", name: "Gelb-Grün-Gurt", subtitle: "Nächster Schritt", beltClass: "bg-[linear-gradient(to_bottom,#facc15_0%,#facc15_50%,#16a34a_50%,#16a34a_100%)]", knotClass: "bg-[linear-gradient(to_bottom,#facc15_0%,#facc15_50%,#16a34a_50%,#16a34a_100%)]" },
  { id: "gruen-gurt", name: "Grüngurt", subtitle: "Aufbau", beltClass: "bg-green-600", knotClass: "bg-green-700" },
  { id: "gruen-blau-gurt", name: "Grün-Blau-Gurt", subtitle: "Vertiefung", beltClass: "bg-[linear-gradient(to_bottom,#16a34a_0%,#16a34a_50%,#1d4ed8_50%,#1d4ed8_100%)]", knotClass: "bg-[linear-gradient(to_bottom,#16a34a_0%,#16a34a_50%,#1d4ed8_50%,#1d4ed8_100%)]" },
  { id: "blaugurt", name: "Blaugurt", subtitle: "Fortgeschritten", beltClass: "bg-blue-700", knotClass: "bg-blue-800" },
  { id: "blau-braun-gurt", name: "Blau-Braun-Gurt", subtitle: "Weiterführung", beltClass: "bg-[linear-gradient(to_bottom,#1d4ed8_0%,#1d4ed8_50%,#92400e_50%,#92400e_100%)]", knotClass: "bg-[linear-gradient(to_bottom,#1d4ed8_0%,#1d4ed8_50%,#92400e_50%,#92400e_100%)]" },
  { id: "braungurt", name: "Braungurt", subtitle: "Meisterklasse", beltClass: "bg-amber-800", knotClass: "bg-amber-900" },
  { id: "braun-schwarz-gurt", name: "Braun-Schwarz-Gurt", subtitle: "Vorbereitung", beltClass: "bg-[linear-gradient(to_bottom,#92400e_0%,#92400e_50%,#020617_50%,#020617_100%)]", knotClass: "bg-[linear-gradient(to_bottom,#92400e_0%,#92400e_50%,#020617_50%,#020617_100%)]" },
  { id: "schwarzgurt", name: "Schwarzgurt", subtitle: "Meistergrad", beltClass: "bg-slate-950", knotClass: "bg-black" },
];

const VIDEOS_NACH_GUERTEL: Record<string, Video[]> = lernvideos.reduce((acc, v) => {
  (acc[v.guertel] ||= []).push({ title: v.titel, url: v.url, description: v.beschreibung });
  return acc;
}, {} as Record<string, Video[]>);

function BeltVisual({ stufe, compact = false }: { stufe: Guertelstufe; compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "h-8" : "h-11"} w-full flex items-center`} aria-hidden="true">
      <div className={`absolute inset-x-0 ${compact ? "h-5" : "h-7"} overflow-hidden rounded-sm border border-black/15 shadow-inner ${stufe.beltClass}`}>
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/20" />
      </div>
      <div className={`absolute left-1/2 -translate-x-1/2 ${compact ? "h-7 w-4" : "h-10 w-6"} rounded-[2px] border border-black/15 shadow-sm ${stufe.knotClass}`} />
      <div className={`absolute left-1/2 -translate-x-1/2 ${compact ? "h-2.5 w-8" : "h-3.5 w-11"} rounded-[2px] border border-black/10 ${stufe.beltClass}`} />
    </div>
  );
}

function VideoPreview({ video, belt }: { video: Video; belt: Guertelstufe }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-tkd-cyan/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-tkd-cyan focus-visible:ring-offset-2"
      aria-label={`${video.title} auf YouTube ansehen`}
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-tkd-navy via-[#102332] to-tkd-navy flex items-center justify-center">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, rgba(0, 212, 203, .45), transparent 28%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, .25), transparent 28%)" }} />
        <div className="absolute top-3 left-3 w-24 sm:w-28"><BeltVisual stufe={belt} compact /></div>
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/95 p-2.5 shadow-xl ring-1 ring-white/70">
            <img src={IMAGES.logoOriginal} alt="Jessi's Taekwondoschule" className="h-full w-full object-contain" />
          </div>
          <div className="w-12 h-12 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-tkd-cyan/30 group-hover:scale-105 transition-all">
            <Play className="w-6 h-6 text-white ml-0.5 fill-white/20" />
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-red-600 rounded-md px-2 py-1 shadow-sm"><Youtube className="w-3.5 h-3.5 text-white" /></div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-tkd-navy text-sm leading-snug mb-1 group-hover:text-tkd-cyan transition-colors">{video.title}</h3>
        {video.description && <p className="text-gray-500 text-xs leading-relaxed">{video.description}</p>}
        <div className="flex items-center gap-1 mt-3 text-tkd-cyan text-xs font-medium"><ExternalLink className="w-3 h-3" /><span>Auf YouTube ansehen</span></div>
      </div>
    </a>
  );
}

export default function Lernvideos() {
  return (
    <>
      <SEOHead title="Lernvideos – Jessi's Taekwondoschule" description="Lernvideos für Taekwondo-Techniken, Poomsae und Selbstverteidigung von Jessica Rogg." />

      <section className="relative pt-28 pb-16 bg-tkd-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tkd-navy via-tkd-navy to-tkd-cyan/10" />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-tkd-cyan/10 border border-tkd-cyan/20 rounded-full px-4 py-2 mb-6"><Youtube className="w-4 h-4 text-tkd-cyan" /><span className="text-tkd-cyan text-sm font-medium">YouTube-Kanal</span></div>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">Lernvideos</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">Wähle deinen aktuellen Gürtel und springe direkt zu den passenden Lernvideos. Neue Videos werden fortlaufend ergänzt.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F1F7F6] border-b border-tkd-cyan/10">
        <div className="container max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-tkd-cyan mb-2">Schnellzugriff</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-tkd-navy">Dein Gürtelgrad</h2>
            <p className="text-gray-600 mt-2">Ein Klick führt dich direkt zu den Videos deines nächsten Schritts.</p>
          </div>
          <nav aria-label="Gürtelgrade" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GUERTELSTUFEN.map((stufe) => (
              <a key={stufe.id} href={`#${stufe.id}`} className="group bg-white rounded-xl border border-gray-200 p-3 text-left shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-tkd-cyan/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-tkd-cyan focus-visible:ring-offset-2">
                <BeltVisual stufe={stufe} />
                <p className="mt-2 text-sm font-heading font-bold text-tkd-navy leading-tight group-hover:text-tkd-cyan">{stufe.name}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{stufe.subtitle}</p>
              </a>
            ))}
          </nav>
          <div className="flex justify-center mt-7"><ArrowDown className="w-5 h-5 text-tkd-cyan" aria-hidden="true" /></div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-5xl space-y-14 md:space-y-16">
          {GUERTELSTUFEN.map((stufe) => {
            const videos = VIDEOS_NACH_GUERTEL[stufe.id] ?? [];
            return (
              <section key={stufe.id} id={stufe.id} className="scroll-mt-28" aria-labelledby={`${stufe.id}-heading`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className="w-full sm:w-48 shrink-0"><BeltVisual stufe={stufe} /></div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] font-bold text-tkd-cyan">{stufe.subtitle}</p>
                    <h2 id={`${stufe.id}-heading`} className="text-2xl md:text-3xl font-heading font-bold text-tkd-navy">{stufe.name}</h2>
                  </div>
                </div>
                {videos.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{videos.map((video) => <VideoPreview key={video.url} video={video} belt={stufe} />)}</div>
                ) : (
                  <div className="rounded-xl border border-dashed border-tkd-cyan/35 bg-tkd-cyan/[0.035] px-6 py-7 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-tkd-cyan/10 flex items-center justify-center shrink-0"><Youtube className="w-5 h-5 text-tkd-cyan" /></div>
                    <div><h3 className="font-heading font-bold text-tkd-navy">Videos folgen</h3><p className="text-sm text-gray-600 mt-1">Für den {stufe.name} werden hier nach und nach passende Lernvideos ergänzt.</p></div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
