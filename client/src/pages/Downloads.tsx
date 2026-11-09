import SEOHead from "@/components/SEOHead";
import { FadeIn, SectionHeading, CTAButton } from "@/components/SectionComponents";
import { downloads, ferienzeiten } from "@/lib/content";
import { Download, Play, FileText, Calendar, AlertCircle } from "lucide-react";

export default function Downloads() {
  const pdfDownloads = downloads.map(d => ({ title: d.titel, desc: d.beschreibung || "", url: d.datei }));
  const ferienHeimenkirch = ferienzeiten.heimenkirch;
  const ferienKisslegg = ferienzeiten.kisslegg;

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Downloads & Ferienzeiten | Jessi's Taekwondoschule"
        description="Kostenlose Downloads: Jahresplaner, Zeltlager-Infos, Ferienzeiten und Video-Anleitungen für Taekwondo-Schüler."
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-tkd-navy" />
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Downloads & <span className="text-tkd-cyan">Ferienzeiten</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl">
              Wichtige Informationen, Dokumente und Trainingsausfallzeiten auf einen Blick.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 lg:py-16" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <a href="#ferienzeiten" className="block bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:border-tkd-cyan/30 transition-all group">
                <Calendar className="w-8 h-8 text-tkd-cyan mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Ferienzeiten</h3>
                <p className="text-gray-600 text-sm">Trainingsausfälle &amp; besondere Termine</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <a href="#downloads" className="block bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:border-tkd-cyan/30 transition-all group">
                <Download className="w-8 h-8 text-tkd-cyan mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">PDF Downloads</h3>
                <p className="text-gray-600 text-sm">Wichtige Dokumente & Formulare</p>
              </a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <a href="#videos" className="block bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:border-tkd-cyan/30 transition-all group">
                <Play className="w-8 h-8 text-tkd-cyan mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 text-sm">Anleitungen & Tipps</p>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ferienzeiten - dark section for contrast */}
      <section id="ferienzeiten" className="py-20 lg:py-28" style={{backgroundColor: '#142640'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title={ferienzeiten.ueberschrift} subtitle="Trainingsausfallzeiten und besondere Termine auf einen Blick" light />
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Heimenkirch */}
            <FadeIn>
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#FF6B6B]" />
                  Heimenkirch
                </h3>
                <div className="space-y-3">
                  {ferienHeimenkirch.map((item, i) => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b border-white/10 last:border-0">
                      <span className="text-white/70 text-sm">{item.grund}</span>
                      <span className="text-tkd-cyan font-semibold text-sm">{item.datum}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Kißlegg */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#FF6B6B]" />
                  Kißlegg
                </h3>
                <div className="space-y-3">
                  {ferienKisslegg.map((item, i) => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b border-white/10 last:border-0">
                      <span className="text-white/70 text-sm">{item.grund}</span>
                      <span className="text-tkd-cyan font-semibold text-sm">{item.datum}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white/5 rounded-lg p-6 border border-white/10">
            <FadeIn>
              <p className="text-white/70 text-center leading-relaxed">
                <strong className="text-white">Wichtig:</strong> An offiziellen Feiertagen findet kein Training statt. Bei Fragen zu den Ferienzeiten kontaktiert uns gerne!
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PDF Downloads */}
      <section id="downloads" className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="PDF Downloads" subtitle="Wichtige Dokumente und Informationen" />
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pdfDownloads.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col h-full hover:border-tkd-cyan/30 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText className="w-6 h-6 text-tkd-cyan shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-tkd-cyan text-tkd-navy font-heading font-semibold rounded-md hover:bg-tkd-cyan/90 transition-colors w-full"
                  >
                    <Download className="w-4 h-4" />
                    PDF herunterladen
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials - dark section */}
      <section id="videos" className="py-20 lg:py-28" style={{backgroundColor: '#142640'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Video Tutorials" subtitle="Hilfreiche Anleitungen und Tipps" light />
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 text-center">
                <Play className="w-12 h-12 text-tkd-cyan mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-white mb-3">Gürtel richtig binden</h3>
                <p className="text-white/70 mb-6">
                  Schau dir unser Video-Tutorial an und lerne, wie du deinen Taekwondo-Gürtel richtig bindest.
                </p>
                <a
                  href="https://www.instagram.com/jessis_taekwondoschule/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] text-white font-heading font-semibold rounded-md hover:bg-[#FF6B6B]/90 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Zum Instagram-Video
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA - light section */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Noch Fragen zu den Downloads oder Ferienzeiten?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktiere uns gerne – wir helfen dir weiter!
            </p>
            <CTAButton href="/kontakt">Kontakt aufnehmen</CTAButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
