import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading } from "@/components/SectionComponents";
import { IMAGES } from "@/lib/images";
import { Zap, Heart, Users, Award, Brain, Shield } from "lucide-react";

export default function Erwachsene() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Taekwondo für Erwachsene – Jessi's Taekwondoschule Kißlegg"
        description="Taekwondo für Erwachsene ab 18 Jahren in Kißlegg. Fitness, Selbstverteidigung, mentale Stärke und Gemeinschaft. Einstieg jederzeit möglich. Jetzt Probetraining!"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.erwachseneTrainingNeu} alt="Erwachsene beim Taekwondo-Training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkd-navy/95 via-tkd-navy/85 to-tkd-navy/60" />
        </div>
        <div className="container relative z-10 pt-28 pb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-semibold rounded-full mb-4">
              Ab 18 Jahren
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Taekwondo für <span className="text-tkd-cyan">Erwachsene</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
              Fitness, Selbstverteidigung und mentale Stärke, in einer unterstützenden Gemeinschaft. Einstieg jederzeit möglich.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton>Probetraining vereinbaren</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Warum Taekwondo für Erwachsene */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Warum Taekwondo für Erwachsene?"
              subtitle="Mehr als nur ein Sport, eine Lebensweise"
            />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fitness & Kraft", desc: "Ganzkörpertraining für Ausdauer, Kraft und Flexibilität. Taekwondo hält fit, unabhängig vom Alter oder Fitnesslevel." },
              { icon: Heart, title: "Stressabbau", desc: "Das Training hilft, den Alltag loszulassen und Stress abzubauen. Bewegung und Fokus tun Körper und Geist gut." },
              { icon: Shield, title: "Selbstverteidigung", desc: "Praktische Selbstverteidigungstechniken vermitteln Sicherheit im Alltag, ohne Aggression zu fördern." },
              { icon: Brain, title: "Mentale Stärke", desc: "Taekwondo schult Konzentration, Disziplin und innere Ruhe. Qualitäten, die im Beruf und Privatleben wertvoll sind." },
              { icon: Users, title: "Gemeinschaft", desc: "Trainiere mit Gleichgesinnten in einer unterstützenden Gruppe. Neue Bekanntschaften und gemeinsame Ziele warten." },
              { icon: Award, title: "Persönliche Ziele", desc: "Arbeite an deinen Gürtelprüfungen und erreiche neue Meilensteine, in deinem eigenen Tempo." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 h-full shadow-sm">
                  <item.icon className="w-8 h-8 text-tkd-cyan mb-4" />
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trainingsablauf */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="So läuft das Training ab" subtitle="Aufbau einer typischen Trainingseinheit" />
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Aufwärmen", desc: "Wir beginnen mit Dehnübungen und leichten Cardio-Elementen, um den Körper auf das Training vorzubereiten." },
              { step: "2", title: "Techniktraining", desc: "Fokus auf Kicks, Schläge und Blöcke. Wir arbeiten an Präzision, Geschwindigkeit und korrekter Form." },
              { step: "3", title: "Partnerübungen", desc: "Praktische Anwendung in kontrollierten Szenarien mit Partnern. Sicherheit steht an erster Stelle." },
              { step: "4", title: "Kondition & Kraft", desc: "Gezieltes Training für Ausdauer und Muskelaufbau, angepasst an dein Fitnesslevel." },
              { step: "5", title: "Cool-Down", desc: "Abschließendes Dehnen und Entspannung zur Regeneration und mentalen Ruhe." },
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

      {/* Was du brauchst */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Was du brauchst" subtitle="Einfach starten, keine Vorkenntnisse erforderlich" />
          </FadeIn>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="space-y-4">
              {[
                "Sportkleidung (T-Shirt, Jogginghose oder Shorts)",
                "Etwas zu trinken",
                "Offenheit und Motivation",
                "Keine Vorkenntnisse erforderlich. Wir starten bei null!",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-tkd-cyan rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-tkd-navy text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainingszeiten */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Trainingszeiten" subtitle="Erwachsenentraining in Kißlegg" />
          </FadeIn>
          <div className="max-w-md mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm text-center">
                <h3 className="text-2xl font-heading font-bold text-tkd-cyan mb-2">Kißlegg</h3>
                <p className="text-gray-500 text-sm mb-6">Kursräume von Elements · Eugen-Bolz-Straße 26</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Jugendliche & Erwachsene · ab 15 Jahren</p>
                <p className="text-3xl font-heading font-bold text-gray-900">Freitag</p>
                <p className="text-tkd-cyan text-xl font-semibold mt-1">17:45 – 18:45 Uhr</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <CTAButton>Probetraining vereinbaren</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Bereit, deine Reise zu starten?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Komm zu einem kostenlosen Probetraining und erlebe selbst, wie Taekwondo dein Leben bereichern kann.
            </p>
            <CTAButton>Kostenloses Probetraining sichern</CTAButton>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
