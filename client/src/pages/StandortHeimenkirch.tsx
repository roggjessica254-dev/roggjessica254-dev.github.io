import { FadeIn, CTAButton, SectionHeading } from "@/components/SectionComponents";
import SEOHead from "@/components/SEOHead";
import { MapPin, Clock, Car, ShowerHead, CheckCircle, Navigation } from "lucide-react";

export default function StandortHeimenkirch() {
  return (
    <div className="min-h-screen">
      <SEOHead title="Taekwondo Heimenkirch – Jessi's Taekwondoschule" description="Taekwondo-Training in Heimenkirch. Turnhalle Lindauer Str. 20. Kinder, Jugendliche und Erwachsene. Jeden Donnerstag. Kostenloses Probetraining!" />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-tkd-navy">
        <div className="container relative z-10">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-semibold rounded-full mb-4">
              Standort
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Taekwondo in <span className="text-tkd-cyan">Heimenkirch</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
              Trainiert wird in der Turnhalle Heimenkirch – jeden Donnerstag.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeIn>
              <div className="space-y-8">
                {/* Adresse */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-tkd-cyan shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-gray-900">Turnhalle Heimenkirch</h3>
                      <p className="text-gray-500">Lindauer Str. 20, 88178 Heimenkirch</p>
                    </div>
                  </div>
                </div>

                {/* Trainingszeiten */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-tkd-cyan" />
                    <h3 className="text-lg font-heading font-bold text-gray-900">Trainingszeiten (Donnerstag)</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { kurs: "Kindergruppe 1 (6–9 J.)", zeit: "17:00 – 18:00 Uhr" },
                      { kurs: "Kindergruppe 2 (10–14 J.)", zeit: "18:00 – 19:00 Uhr" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-start gap-1 py-2 border-b border-gray-100 last:border-0 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-gray-700 text-sm">{item.kurs}</span>
                        <span className="text-tkd-cyan font-semibold text-sm">{item.zeit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infos */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Vor Ort</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <span className="text-gray-700 text-sm">Parkplätze direkt vor der Turnhalle</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ShowerHead className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <span className="text-gray-700 text-sm">Duschen und Umkleiden vorhanden</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <span className="text-gray-700 text-sm">Kein barrierefreier Zugang</span>
                    </div>
                  </div>
                </div>

                <CTAButton>Probetraining in Heimenkirch</CTAButton>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Lindauer%20Str.%2020%2C%2088178%20Heimenkirch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Route zur Taekwondoschule in Heimenkirch in Google Maps öffnen"
                className="group flex min-h-[320px] h-full flex-col justify-between rounded-lg border border-tkd-cyan/20 bg-tkd-navy p-6 text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-tkd-cyan/40 sm:min-h-[400px] sm:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tkd-cyan/15 text-tkd-cyan">
                  <MapPin className="h-7 w-7" />
                </span>
                <span className="block">
                  <span className="mb-2 block font-heading text-2xl font-bold">Route planen</span>
                  <span className="mb-6 block max-w-sm text-sm leading-relaxed text-white/75">
                    Lindauer Str. 20, 88178 Heimenkirch. Google Maps wird erst nach deinem Klick geöffnet.
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-tkd-navy transition-colors group-hover:bg-tkd-cyan">
                    <Navigation className="h-4 w-4" />
                    Route in Google Maps öffnen
                  </span>
                </span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
