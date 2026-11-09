import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading } from "@/components/SectionComponents";
import { Users, Zap, Award, Heart } from "lucide-react";

export default function Schulprojekte() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Schulprojekte & Workshops | Jessi's Taekwondoschule"
        description="Taekwondo-Projekte für Schulen: Workshops, Trainingseinheiten und Sportprogramme für Schüler aller Altersgruppen."
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-tkd-navy" />
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Schulprojekte & <span className="text-tkd-cyan">Workshops</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl">
              Taekwondo-Programme speziell für Schulen und Bildungseinrichtungen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Überblick */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Was wir anbieten"
              subtitle="Maßgeschneiderte Programme für Schulen"
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Schulklassen",
                desc: "Taekwondo-Trainingseinheiten für komplette Schulklassen im Sportunterricht.",
              },
              {
                icon: Zap,
                title: "Workshops",
                desc: "Intensive Workshops zu Selbstverteidigung, Fitness und mentaler Stärke.",
              },
              {
                icon: Award,
                title: "Prüfungen",
                desc: "Gürtelprüfungen und Zertifizierungen für Schüler im Schulkontext.",
              },
              {
                icon: Heart,
                title: "Wertevermittlung",
                desc: "Fokus auf Respekt, Disziplin und Selbstvertrauen für persönliches Wachstum.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center h-full">
                  <item.icon className="w-8 h-8 text-tkd-cyan mx-auto mb-3" />
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Vorteile für Schulen"
              subtitle="Warum Taekwondo in der Schule sinnvoll ist"
            />
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "Körperliche Fitness",
                desc: "Ganzheitliches Training für Ausdauer, Kraft und Flexibilität.",
              },
              {
                title: "Mentale Entwicklung",
                desc: "Aufbau von Selbstvertrauen, Konzentration und emotionaler Stabilität.",
              },
              {
                title: "Soziale Kompetenzen",
                desc: "Förderung von Respekt, Teamfähigkeit und gegenseitiger Unterstützung.",
              },
              {
                title: "Disziplin & Struktur",
                desc: "Vermittlung von Verantwortungsbewusstsein und strukturiertem Handeln.",
              },
              {
                title: "Selbstverteidigung",
                desc: "Praktische Sicherheitskompetenzen und Selbstschutz für Schüler.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-tkd-cyan/10 border border-tkd-cyan/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-tkd-cyan font-heading font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="So funktioniert's"
              subtitle="Unser Prozess für Schulprojekte"
            />
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title: "Kontakt & Beratung",
                desc: "Sie kontaktieren uns mit Ihren Anforderungen und Zielen. Wir besprechen die Möglichkeiten.",
              },
              {
                step: "2",
                title: "Planung",
                desc: "Gemeinsam planen wir das Projekt: Dauer, Inhalte, Termine und Rahmenbedingungen.",
              },
              {
                step: "3",
                title: "Durchführung",
                desc: "Unser erfahrenes Trainerteam führt das Projekt durch und passt es an die Gruppe an.",
              },
              {
                step: "4",
                title: "Feedback & Abschluss",
                desc: "Nach dem Projekt erhalten Sie Feedback und können optional Zertifikate ausstellen.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-tkd-cyan/10 border border-tkd-cyan/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-tkd-cyan font-heading font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Interessiert an einem Schulprojekt?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Kontaktieren Sie uns unverbindlich für ein Beratungsgespräch. Wir freuen uns auf die Zusammenarbeit mit Ihrer Schule!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+491629277072"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-tkd-cyan text-tkd-navy font-heading font-bold rounded-md hover:bg-tkd-cyan/90 transition-colors"
              >
                Anrufen: 0162 9277072
              </a>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
