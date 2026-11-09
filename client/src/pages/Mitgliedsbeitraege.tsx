import SEOHead from "@/components/SEOHead";
import { FadeIn, SectionHeading } from "@/components/SectionComponents";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function Mitgliedsbeitraege() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mitgliedsbeiträge & Gebühren | Jessi's Taekwondoschule"
        description="Transparente Preisgestaltung für Taekwondo-Kurse. Beitragsstufen, Anmeldegebühren und Rabatte für TSV-Mitglieder."
      />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-tkd-navy" />
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Mitgliedsbeiträge & <span className="text-tkd-cyan">Gebühren</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl">
              Transparente Preisgestaltung für alle Altersgruppen. Flexible Beitragsstufen je nach Ausbildungsstand.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Beitragstabelle - dark section */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#142640'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Monatliche Mitgliedsbeiträge"
              subtitle="Beitragsstufen nach Ausbildungsstand"
              light
            />
          </FadeIn>
          <div className="mobile-safe-table max-w-4xl mx-auto pb-2" tabIndex={0} aria-label="Seitlich scrollbare Tabelle der monatlichen Mitgliedsbeiträge">
            <table className="min-w-[680px] w-full text-white/80 text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-heading font-bold text-white">Beitragsstufe</th>
                  <th className="text-left py-4 px-4 font-heading font-bold text-white">Ausbildungsstand</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-white">Regulär</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-white">TSV Heimenkirch</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-white">3. Familienmitglied</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-tkd-cyan">Stufe 1</td>
                  <td className="py-4 px-4">Anfänger bis 7. Kup</td>
                  <td className="text-center py-4 px-4">39 €</td>
                  <td className="text-center py-4 px-4">35 €</td>
                  <td className="text-center py-4 px-4">30 €</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-semibold text-tkd-cyan">Stufe 2</td>
                  <td className="py-4 px-4">ab 6. Kup (Grüngurt)</td>
                  <td className="text-center py-4 px-4">49 €</td>
                  <td className="text-center py-4 px-4">45 €</td>
                  <td className="text-center py-4 px-4">40 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 max-w-3xl mx-auto space-y-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-tkd-cyan" />
                  Automatische Anpassung bei Gürtelaufstieg
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Mit Erreichen des 6. Kup (Grüngurt) erfolgt automatisch der Wechsel in die Beitragsstufe 2 mit dem
                  jeweils geltenden Mitgliedsbeitrag. Eine gesonderte Zustimmung oder erneute Vertragsunterzeichnung ist
                  hierfür nicht erforderlich.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-tkd-cyan" />
                  Rabattregelung
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Der bei Vertragsbeginn zutreffende Mitgliedsbeitrag ergibt sich aus der jeweils einschlägigen
                  Beitragsstufe. Preisnachlässe sind nicht kombinierbar. Es gilt jeweils der günstigste zutreffende
                  Einzelrabatt.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-tkd-cyan/20">
                <h3 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-tkd-cyan" />
                  Erhöhter Trainingsaufwand ab Stufe 2
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Mit Erreichen des 6. Kup (Grüngurt) erhöht sich der Trainings- und Betreuungsaufwand, insbesondere
                  durch intensivere und individuellere Prüfungsvorbereitung (z.B. vertiefte Technikschulung, strukturierte
                  Prüfungsabläufe, technische Detailkorrektionen sowie zusätzliche organisatorische Vorbereitung). Dieser
                  Mehraufwand ist im Mitgliedsbeitrag der Beitragsstufe 2 berücksichtigt.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Anmeldegebühr - light section */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Anmeldegebühr" subtitle="Einmalige Gebühr bei Vertragsabschluss" />
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-tkd-cyan mb-3">Erstes Familienmitglied</h3>
                  <p className="text-4xl font-heading font-bold text-gray-900 mb-2">80 €</p>
                  <p className="text-gray-700">
                    Beinhaltet einen Taekwondo-Anzug, ein Theorieheft sowie organisatorischen Aufnahme- und
                    Verwaltungsaufwand.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-heading font-bold text-tkd-cyan mb-3">Ab dem 2. Familienmitglied</h3>
                  <p className="text-4xl font-heading font-bold text-gray-900 mb-2">50 €</p>
                  <p className="text-gray-700">
                    Reduzierte Gebühr für weitere Familienmitglieder desselben Haushalts.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-900">Zahlungsmodalität:</strong> Die Anmeldegebühr wird zusammen mit dem ersten fälligen
                  Mitgliedsbeitrag per SEPA-Lastschrift eingezogen.
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <strong className="text-gray-900">Rückerstattung:</strong> Eine Rückerstattung der Anmeldegebühr erfolgt nur im Falle eines
                  wirksamen Widerrufs gemäß Widerrufsrecht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kooperationen & Rabatte */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading title="Kooperationen & Rabatte" subtitle="Spezielle Konditionen für Partner" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "TSV Heimenkirch",
                desc: "Mitglieder des TSV Heimenkirch erhalten einen vergünstigten Monatsbeitrag.",
              },
              {
                title: "SG Krumbach",
                desc: "Jessi's Taekwondoschule ist eine Abteilung der SG Krumbach mit enger Zusammenarbeit.",
              },
              {
                title: "BTU",
                desc: "Mitglied der Bayerischen Taekwondo Union für höchste Trainingsstandards.",
              },
              {
                title: "DTU",
                desc: "Mitglied der Deutschen Taekwondo Union für nationale und internationale Wettkämpfe.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-tkd-cyan shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Fragen */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Noch Fragen?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
              Kontaktieren Sie uns gerne für weitere Informationen zu den Beitragssätzen oder individuellen Fragen.
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
