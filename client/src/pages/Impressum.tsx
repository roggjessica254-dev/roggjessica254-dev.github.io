import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/SectionComponents";

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <SEOHead title="Impressum – Jessi's Taekwondoschule" description="Impressum von Jessi's Taekwondoschule. Jessica Rogg, Wangen im Allgäu." />
      <section className="relative py-32 overflow-hidden bg-tkd-navy">
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">Impressum</h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container max-w-3xl mx-auto">
          <FadeIn>
            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Angaben gemäß § 5 DDG</h2>
                <p className="text-gray-700 leading-relaxed">
                  Jessica Rogg<br />
                  Jessi's Taekwondoschule<br />
                  Sigmannser Weg 5/1<br />
                  88239 Wangen im Allgäu
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Kontakt</h2>
                <p className="text-gray-700 leading-relaxed">
                  Telefon: <a href="tel:+491629277072" className="text-tkd-cyan hover:underline">0162 9277072</a><br />
                  E-Mail: <a href="mailto:info@jessistaekwondoschule.de" className="text-tkd-cyan hover:underline">info@jessistaekwondoschule.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV</h2>
                <p className="text-gray-700 leading-relaxed">
                  Jessica Rogg<br />
                  Sigmannser Weg 5/1<br />
                  88239 Wangen im Allgäu
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Haftung für Inhalte</h2>
                <p className="text-gray-700 leading-relaxed">
                  Die Inhalte dieser Website werden mit Sorgfalt erstellt. Gesetzliche Pflichten zur Entfernung oder Sperrung von Informationen bleiben unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Haftung für Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-gray-900 mb-3">Urheberrecht</h2>
                <p className="text-gray-700 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
