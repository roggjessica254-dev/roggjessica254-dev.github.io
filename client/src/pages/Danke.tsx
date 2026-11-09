import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/SectionComponents";
import { CheckCircle, Mail, ArrowLeft } from "lucide-react";

export default function Danke() {
  const warteliste = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("warteliste");
  return (
    <div className="min-h-screen flex items-center">
      <SEOHead title="Danke für deine Anfrage – Jessi's Taekwondoschule" description="Vielen Dank für deine Probetraining-Anfrage. Wir freuen uns, dich beim Probetraining begrüßen zu dürfen!" />
      <section className="py-32 bg-tkd-navy w-full">
        <div className="container max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
              {warteliste ? "Du stehst auf unserer Warteliste!" : "Vielen Dank für deine Anfrage!"}
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {warteliste
                ? "Vielen Dank für dein Interesse! Der gewünschte Kurs ist im Moment voll. Wir melden uns bei dir, sobald ein Platz frei wird, und vereinbaren dann gemeinsam einen Termin fürs Probetraining. Du erhältst in Kürze eine Bestätigungs-E-Mail mit allen Infos."
                : "Wir freuen uns, dich (oder dein Kind) beim Probetraining begrüßen zu dürfen! Du erhältst in Kürze eine Bestätigungs-E-Mail. Bei Fragen kannst du dich jederzeit gerne bei uns melden."}
            </p>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-left mb-8">
              <h2 className="text-lg font-heading font-bold text-white mb-4">Was du zum Probetraining mitbringen solltest:</h2>
              <div className="space-y-3">
                {[
                  "Bequeme Sportkleidung (kein Anzug nötig)",
                  "Etwas zu trinken",
                  "Gute Laune und Neugier",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-tkd-cyan shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-tkd-cyan/20 mb-8">
              <p className="text-white/60 text-sm mb-3">
                Hast du Fragen? Wir sind gerne für dich da:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:probetraining@jessistaekwondoschule.de"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan font-semibold rounded-md hover:bg-tkd-cyan/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  probetraining@jessistaekwondoschule.de
                </a>
              </div>
            </div>

            <Link href="/" className="inline-flex items-center gap-2 text-tkd-cyan hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
