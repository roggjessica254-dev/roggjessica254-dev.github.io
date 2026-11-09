import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading } from "@/components/SectionComponents";
import { IMAGES } from "@/lib/images";
import { Shield, Zap, Award, BookOpen, Target, Users, CheckCircle, Star } from "lucide-react";

export default function KinderTaekwondo() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kinder Taekwondo (6–14 Jahre) – Jessi's Taekwondoschule"
        description="Taekwondo für Kinder von 6 bis 14 Jahren in zwei Altersgruppen. Selbstbehauptung, Technik, Disziplin und das Gürtelsystem als Motivation. Heimenkirch & Kißlegg. Jetzt Probetraining!"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.kinderTrainingNeu} alt="Kinder beim Taekwondo-Training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkd-navy/95 via-tkd-navy/85 to-tkd-navy/60" />
        </div>
        <div className="container relative z-10 pt-28 pb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 bg-[#FF6B6B]/20 border border-[#FF6B6B]/30 text-[#FF6B6B] text-sm font-semibold rounded-full mb-4">
              6–14 Jahre
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Kinder <span className="text-[#FF6B6B]">Taekwondo</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
              Selbstbehauptung, Technik und Disziplin. Das Gürtelsystem als Motivationsstruktur für nachhaltige Entwicklung.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton>Probetraining für Kinder</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Zwei Kindergruppen */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Zwei Altersgruppen, ein Ziel"
              subtitle="Altersgerechtes Training für jede Entwicklungsstufe"
            />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
                <div className="inline-block px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] text-sm font-bold rounded-full mb-4">
                  Kindergruppe 1
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">6–9 Jahre</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  In dieser Gruppe steht spielerisches Lernen im Vordergrund. Die Kinder entwickeln Koordination, Gleichgewicht und erste Techniken in einem kindgerechten Rahmen.
                </p>
                <div className="space-y-2">
                  {["Grundtechniken und Formen", "Koordination und Motorik", "Erste Regeln und Werte", "Kleingruppentraining"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FF6B6B] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
                <div className="inline-block px-3 py-1 bg-tkd-cyan/10 text-tkd-cyan text-sm font-bold rounded-full mb-4">
                  Kindergruppe 2
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">10–14 Jahre</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ältere Kinder trainieren intensiver und lernen komplexere Techniken. Wettkampfvorbereitung und Selbstbehauptung rücken stärker in den Fokus.
                </p>
                <div className="space-y-2">
                  {["Fortgeschrittene Techniken", "Selbstbehauptung und Selbstverteidigung", "Wettkampfvorbereitung", "Gürtelsystem und Prüfungen"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-tkd-cyan shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Was Kinder lernen */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Was Kinder bei uns lernen" subtitle="Ganzheitliche Entwicklung durch Kampfkunst" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Selbstbehauptung", desc: "Kinder lernen, sich verbal und körperlich zu behaupten. Nicht um zu kämpfen, sondern um Konflikte selbstbewusst zu lösen." },
              { icon: Zap, title: "Technik & Koordination", desc: "Kicks, Blocks und Formen schulen die Motorik, Schnelligkeit und das Körperbewusstsein auf einem neuen Level." },
              { icon: Target, title: "Disziplin & Fokus", desc: "Strukturiertes Training mit klaren Regeln fördert Konzentration und Durchhaltevermögen, auch für die Schule." },
              { icon: Award, title: "Gürtelsystem", desc: "Vom Weißgurt zum Schwarzgurt: Jede Prüfung ist ein Meilenstein, der Fortschritt sichtbar macht und motiviert." },
              { icon: BookOpen, title: "Werte fürs Leben", desc: "Respekt, Höflichkeit, Integrität und Durchhaltevermögen. Taekwondo-Werte, die weit über die Matte hinausgehen." },
              { icon: Users, title: "Teamgeist", desc: "Partnerübungen und gemeinsame Ziele stärken den Zusammenhalt und fördern soziale Kompetenzen." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 h-full shadow-sm">
                  <item.icon className="w-8 h-8 text-[#FF6B6B] mb-4" />
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gürtelsystem */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Das <span className="text-[#FF6B6B]">Gürtelsystem</span> als Motivationsmotor
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Im Taekwondo durchlaufen Kinder ein klar strukturiertes Gürtelsystem. Jede Farbe steht für ein neues Level an Können und Wissen. Regelmäßige Prüfungen geben Kindern greifbare Ziele und das Gefühl, etwas erreicht zu haben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dieses System fördert nicht nur die sportliche Entwicklung, sondern auch die Fähigkeit, sich langfristige Ziele zu setzen und konsequent darauf hinzuarbeiten. Eine Kompetenz, die in allen Lebensbereichen wertvoll ist.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Weiß", "Gelb", "Grün", "Blau", "Braun", "Schwarz"].map((belt, i) => {
                  const colors = ["bg-white text-gray-800 border border-gray-300", "bg-yellow-400 text-black", "bg-green-600 text-white", "bg-blue-700 text-white", "bg-amber-800 text-white", "bg-black text-white border border-white/20"];
                  return (
                    <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${colors[i]}`}>
                      {belt}
                    </span>
                  );
                })}
              </div>
              <CTAButton>Jetzt starten</CTAButton>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img src={IMAGES.kinderTrainingNeu} alt="Kinder trainieren Taekwondo" className="aspect-[4/3] rounded-lg shadow-xl w-full object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trainingszeiten */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Trainingszeiten" subtitle="Wöchentliches Training an zwei Standorten" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Heimenkirch */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-[#FF6B6B] mb-6">Heimenkirch</h3>
                <p className="text-gray-500 text-sm mb-6">Turnhalle Heimenkirch</p>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Kindergruppe 1 · 6–9 Jahre</p>
                    <p className="text-xl font-heading font-bold text-gray-900">Donnerstag</p>
                    <p className="text-[#FF6B6B] font-semibold">17:00 – 18:00 Uhr</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Kindergruppe 2 · 10–14 Jahre</p>
                    <p className="text-xl font-heading font-bold text-gray-900">Donnerstag</p>
                    <p className="text-[#FF6B6B] font-semibold">18:00 – 19:00 Uhr</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            {/* Kißlegg */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-heading font-bold text-[#FF6B6B] mb-6">Kißlegg</h3>
                <p className="text-gray-500 text-sm mb-6">Kursräume von Elements</p>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Kindergruppe 1 · 6–9 Jahre</p>
                    <p className="text-xl font-heading font-bold text-gray-900">Freitag</p>
                    <p className="text-[#FF6B6B] font-semibold">15:30 – 16:30 Uhr</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Kindergruppe 2 · 10–14 Jahre</p>
                    <p className="text-xl font-heading font-bold text-gray-900">Freitag</p>
                    <p className="text-[#FF6B6B] font-semibold">16:30 – 17:30 Uhr</p>
                    <p className="text-xs text-orange-600 font-semibold mt-1">⚠ Kurs aktuell voll. Warteliste möglich.</p>
                  </div>
                </div>
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

      {/* Trainingsansatz */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Stark für den Alltag" subtitle="Was Kinder im Training entwickeln" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Konzentration & Ausdauer", text: "Klare Abläufe, Formen und regelmäßige Übungseinheiten helfen Kindern, fokussiert zu bleiben und dranzubleiben." },
              { title: "Respektvolle Selbstbehauptung", text: "Kinder lernen, Grenzen wahrzunehmen, sich klar auszudrücken und Konflikte ohne Gewalt zu lösen." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
