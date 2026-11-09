import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading } from "@/components/SectionComponents";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Für wen ist Taekwondo geeignet?",
    a: "Taekwondo ist für alle Altersgruppen geeignet, unabhängig von Geschlecht oder Fitnesslevel. Bei uns trainieren Kinder ab 6 Jahren (Kindergruppe 1: 6 bis 9 Jahre, Kindergruppe 2: 10 bis 14 Jahre) sowie Jugendliche und Erwachsene ab 15 Jahren. Keinerlei Vorkenntnisse sind nötig.",
  },
  {
    q: "Wann kann mein Kind anfangen?",
    a: "Ab 6 Jahren kann Ihr Kind einsteigen. Es gibt keine Altersgrenze nach oben. Ein Einstieg ist jederzeit möglich. Sie müssen nicht auf einen bestimmten Termin warten.",
  },
  {
    q: "Was muss mein Kind zum Probetraining mitbringen?",
    a: "Bequeme Sportbekleidung und etwas zu trinken. Mehr braucht es nicht. Einen Taekwondo-Anzug (Dobok) benötigen Sie erst, wenn Ihr Kind sich für eine Mitgliedschaft entscheidet. Der erste Dobok ist beim Vertragsabschluss inklusive.",
  },
  {
    q: "Braucht mein Kind Vorkenntnisse?",
    a: "Nein, keinerlei Vorkenntnisse sind nötig. Jedes Kind wird dort abgeholt, wo es steht. Unsere Trainerin Jessica geht individuell auf jedes Kind ein.",
  },
  {
    q: "Wie läuft das Probetraining ab?",
    a: "Das Probetraining ist nur nach vorheriger Buchung über unser Online-Formular möglich. Nach der Buchung erhalten Sie eine Bestätigungs-E-Mail mit allen wichtigen Informationen. Am Trainingstag kommen Sie einfach zur vereinbarten Zeit in die Sporthalle. Ihr Kind trainiert eine komplette Einheit gemeinsam mit der Gruppe. Sie dürfen selbstverständlich zuschauen. Nach dem Training nehmen wir uns gerne Zeit für Ihre Fragen. Das Probetraining ist komplett kostenlos und unverbindlich.",
  },
  {
    q: "An welchen Standorten wird trainiert?",
    a: "Wir trainieren an zwei Standorten: In Heimenkirch (Turnhalle, Lindauer Str. 20) jeden Donnerstag und in Kißlegg (Kursräume von Elements, Eugen-Bolz-Str. 26) jeden Freitag.",
  },
  {
    q: "Ist Taekwondo gefährlich für Kinder?",
    a: "Nein. Sicherheit hat bei uns höchste Priorität. Das Training ist altersgerecht aufgebaut und wird von einer erfahrenen Trainerin geleitet. Bei den jüngeren Kindern steht spielerisches Lernen im Vordergrund, nicht Kampf.",
  },
  {
    q: "Was kostet die Mitgliedschaft?",
    a: "Der monatliche Beitrag richtet sich nach Ausbildungsstand und Mitgliedschaft. Stufe 1 (Anfänger bis 7. Kup): Regulär 39 Euro, TSV Heimenkirch 35 Euro, 3. Familienmitglied 30 Euro. Stufe 2 (ab 6. Kup, Grüngurt): Regulär 49 Euro, TSV Heimenkirch 45 Euro, 3. Familienmitglied 40 Euro. Das Probetraining ist in jedem Fall kostenlos und unverbindlich.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-lg overflow-hidden shadow-sm transition-colors duration-300 ${open ? "bg-[#142640] border border-[#1e3a5f]" : "bg-white border border-gray-200"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors ${open ? "bg-[#142640] hover:bg-[#1a3050]" : "bg-white hover:bg-gray-50"}`}
      >
        <span className={`font-heading font-semibold pr-4 transition-colors ${open ? "text-white" : "text-gray-900"}`}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-tkd-cyan shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <p className={`p-5 pt-0 leading-relaxed border-t transition-colors ${open ? "text-white/85 border-white/10" : "text-gray-700 border-gray-100"}`}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <SEOHead title="Häufige Fragen (FAQ) – Jessi's Taekwondoschule" description="Antworten auf häufige Fragen zu Taekwondo für Kinder: Alter, Vorkenntnisse, Probetraining, Standorte und mehr." />
      <section className="relative py-32 overflow-hidden bg-tkd-navy">
        <div className="container relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white">
              Häufige <span className="text-tkd-cyan">Fragen</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um Taekwondo und unser Training.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <p className="text-gray-700 font-medium mb-4">Noch Fragen? Kontaktieren Sie uns direkt.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton>Probetraining sichern</CTAButton>
                <CTAButton href="/kontakt" variant="outline">Kontakt aufnehmen</CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
