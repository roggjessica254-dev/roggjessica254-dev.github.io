import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading, MediaPlaceholder } from "@/components/SectionComponents";
import { Award, Heart, Users, Star } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function UeberUns() {
  return (
    <div className="min-h-screen">
      <SEOHead title="Über uns – Jessica Rogg, 4. DAN | Jessi's Taekwondoschule" description="Lernen Sie Jessica Rogg kennen: 4. DAN, mehrfache Deutsche Meisterin und Physiotherapeutin. Die Philosophie hinter Jessi's Taekwondoschule." />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <MediaPlaceholder label="Titelbild folgt" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkd-navy/95 via-tkd-navy/85 to-tkd-navy/60" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Über <span className="text-tkd-cyan">uns</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-xl">
              Lernen Sie Jessica Rogg und die Philosophie hinter Jessi's Taekwondoschule kennen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Jessica */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="aspect-[2/3] max-w-md mx-auto rounded-lg shadow-xl overflow-hidden bg-[#0c0d13]">
                <img
                  src={IMAGES.jessicaHeroKick}
                  alt="Jessica Rogg beim Taekwondo-Kick"
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="inline-block px-4 py-1.5 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-semibold rounded-full mb-4">
                Trainerin & Gründerin
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Jessica Rogg
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jessica Rogg trägt den <strong className="text-gray-900">4. DAN (Schwarzgurt)</strong> im Taekwondo und trainiert <strong className="text-gray-900">seit über 20 Jahren</strong>. Sie ist eine <strong className="text-gray-900">erfahrene Trainerin</strong> mit mehrfachen Deutschen und Internationalen Meisterschaften und bringt neben ihrer sportlichen Expertise auch ihre Ausbildung als Physiotherapeutin in das Training ein.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Mit Jessi's Taekwondoschule hat sie einen Ort geschaffen, an dem Kinder und Jugendliche nicht nur Kampfkunst lernen, sondern auch Werte wie Respekt, Disziplin und Selbstvertrauen entwickeln. Ihr Ziel: Jeder Schüler soll mit einem Lächeln aus dem Training gehen und gestärkt in den Alltag zurückkehren.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, label: "4. DAN Schwarzgurt" },
                  { icon: Star, label: "20+ Jahre Taekwondo" },
                  { icon: Heart, label: "Physiotherapeutin" },
                  { icon: Users, label: "Erfahrene Trainerin" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-tkd-cyan shrink-0" />
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trainerteam */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Unser Trainerteam" subtitle="Kompetenz. Erfahrung. Leidenschaft." />
          </FadeIn>
          <div className="max-w-4xl mx-auto mb-12">
            <FadeIn>
              <p className="text-gray-700 text-center leading-relaxed mb-8">
                Bei Jessi's Taekwondoschule steht Qualität an erster Stelle. Unser Trainerteam vereint jahrzehntelange Erfahrung, nationale und internationale Wettkampferfolge sowie pädagogische Kompetenz – vom Kindertraining bis zum Leistungssport.
              </p>
            </FadeIn>
          </div>

          {/* Jessica */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <div className="grid md:grid-cols-[13rem_1fr] gap-6 items-start">
                <img src={IMAGES.christianJessicaDan} alt="Jessica Rogg mit Christian Rogg nach ihrer DAN-Prüfung" className="w-full aspect-[3/4] object-cover rounded-md" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Jessica Rogg</h3>
                  <p className="text-tkd-cyan font-semibold mb-4">Inhaberin | 4. DAN Taekwondo | Physiotherapeutin</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Jessica Rogg ist Gründerin und Inhaberin von Jessi's Taekwondoschule. Sie blickt auf über 10 Jahre aktiven Leistungssport auf Turnieren zurück und war mehrere Jahre Mitglied im Kader der Bayerischen Taekwondo Union (BTU).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Als erfahrene Trainerin verbindet sie leistungsorientiertes Training mit moderner Trainingslehre und ihrem Fachwissen als Physiotherapeutin. Mit dem 4. DAN Taekwondo steht sie für höchste fachliche Kompetenz und eine klare Trainingsphilosophie.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Christian */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <div className="grid md:grid-cols-[13rem_1fr] gap-6 items-start">
                <img src={IMAGES.christianBeach} alt="Christian Rogg beim Taekwondo am Strand" className="w-full aspect-[3/4] object-cover object-[center_52%] rounded-md" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Christian Rogg</h3>
                  <p className="text-tkd-cyan font-semibold mb-4">4. DAN Taekwondo | 1. DAN Allkampf</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Christian Rogg verfügt über mehr als 30 Jahre Trainererfahrung im Taekwondo. Er führte 16 Jahre lang erfolgreich eine eigene Taekwondoschule und coachte zahlreiche Sportler auf nationaler und internationaler Ebene – mit mehrfachen Medaillenerfolgen.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Seine enorme Erfahrung, taktische Kompetenz und sein Blick für individuelle Entwicklung machen ihn zu einer tragenden Säule unseres Trainerteams.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Manuela */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Manuela Rogg</h3>
              <p className="text-tkd-cyan font-semibold mb-4">1. DAN Taekwondo | Kinder- und Jugendtraining</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Manuela Rogg leitete gemeinsam mit Christian Rogg über 16 Jahre eine eigene Taekwondoschule. Mit über 30 Jahren Trainererfahrung ist sie spezialisiert auf altersgerechtes Kinder- und Jugendtraining.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sie versteht es, Disziplin, Spaß und Wertevermittlung kindgerecht zu verbinden und schafft eine Trainingsatmosphäre, in der sich Kinder sicher und gestärkt entwickeln können.
              </p>
            </FadeIn>
          </div>

          {/* Marcel */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <div className="grid md:grid-cols-[13rem_1fr] gap-6 items-start">
                <img src={IMAGES.trainerteamMarcelJoshua} alt="Trainerteam mit Marcel Rogg und Joshua Lampert" className="w-full aspect-[3/4] object-cover rounded-md" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Marcel Rogg</h3>
                  <p className="text-tkd-cyan font-semibold mb-4">3. DAN Taekwondo | Leistungssport</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Marcel Rogg bringt über 10 Jahre Wettkampferfahrung im Leistungssport mit. Er war mehrere Jahre Mitglied im Kader der Bayerischen Taekwondo Union (BTU) und verfügt über umfassende Erfahrung im Turnierbereich.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Als Trainer vermittelt er praxisnahes Wettkampfverständnis, Dynamik und moderne Trainingsmethoden.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Joshua */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <div className="grid md:grid-cols-[13rem_1fr] gap-6 items-start">
                <img src={IMAGES.trainerteamMarcelJoshua} alt="Trainerteam mit Marcel Rogg und Joshua Lampert" className="w-full aspect-[3/4] object-cover rounded-md" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Joshua Lampert</h3>
                  <p className="text-tkd-cyan font-semibold mb-4">4. DAN Taekwondo | Leistungssport</p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Joshua Lampert verfügt über mehr als 10 Jahre aktive Wettkampferfahrung und war mehrere Jahre Mitglied im Kader der Bayerischen Taekwondo Union (BTU).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Mit dem 4. DAN Taekwondo zählt er zu den technisch und taktisch erfahrensten Trainern im Team. Er steht für leistungsorientiertes Training, Präzision und konsequente Weiterentwicklung.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Philosophie im Trainerteam */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <FadeIn>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Unsere Philosophie</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Wir vereinen:</p>
              <ul className="text-gray-700 space-y-2 mb-4">
                <li>✓ Über 100 Jahre gebündelte Trainererfahrung</li>
                <li>✓ Nationale & internationale Wettkampferfolge</li>
                <li>✓ Pädagogische Kompetenz im Kinderbereich</li>
                <li>✓ Leistungsorientiertes Training auf hohem Niveau</li>
                <li>✓ Werte wie Respekt, Disziplin und Zielstrebigkeit</li>
              </ul>
              <p className="text-gray-900 font-semibold">Jessi's Taekwondoschule steht für Qualität – vom ersten Probetraining bis zum Schwarzgurt.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Kooperationen - dark section */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#142640'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Kooperationen & Verbände" subtitle="Zusammenarbeit mit etablierten Organisationen" light />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "SG Krumbach",
                desc: "Jessi's Taekwondoschule ist eine Abteilung der SG Krumbach und arbeitet eng mit dem Verein zusammen.",
              },
              {
                title: "TSV Heimenkirch",
                desc: "Enge Zusammenarbeit mit dem TSV Heimenkirch. Mitglieder erhalten Rabatte auf die Mitgliedsbeiträge.",
              },
              {
                title: "BTU (Bayerische Taekwondo Union)",
                desc: "Mitglied der BTU für höchste Trainingsstandards und regionale Wettkämpfe.",
              },
              {
                title: "DTU (Deutsche Taekwondo Union)",
                desc: "Mitglied der DTU für nationale und internationale Wettkampfmöglichkeiten.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-lg font-heading font-bold text-tkd-cyan mb-3">{item.title}</h3>
                  <p className="text-white/85 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie - light section */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Unsere Philosophie" subtitle="Was uns antreibt und was wir vermitteln" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Respekt", desc: "Gegenseitiger Respekt ist die Grundlage unseres Trainings. Wir behandeln jeden so, wie wir selbst behandelt werden möchten." },
              { title: "Disziplin", desc: "Disziplin bedeutet nicht Strenge, sondern die Fähigkeit, sich Ziele zu setzen und konsequent darauf hinzuarbeiten." },
              { title: "Freude", desc: "Training soll Spaß machen. Nur wer mit Freude dabei ist, lernt nachhaltig und bleibt langfristig motiviert." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center h-full">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <CTAButton>Jetzt Probetraining sichern</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
