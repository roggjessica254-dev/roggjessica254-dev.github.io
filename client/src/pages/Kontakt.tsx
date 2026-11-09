import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton } from "@/components/SectionComponents";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Kontakt() {
  return (
    <div className="min-h-screen">
      <SEOHead title="Kontakt – Jessi's Taekwondoschule" description="Kontaktieren Sie Jessi's Taekwondoschule per Telefon oder E-Mail. Standorte in Heimenkirch und Kißlegg." />
      <section className="relative py-32 overflow-hidden bg-tkd-navy">
        <div className="container relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white">
              <span className="text-tkd-cyan">Kontakt</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Wir freuen uns auf Ihre Nachricht. Erreichen Sie uns per Telefon oder E-Mail.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{backgroundColor: '#E8F2F0'}}>
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Kontaktdaten</h3>
                  <div className="space-y-4">
                    <a href="tel:+491629277072" className="flex items-center gap-3 text-gray-700 hover:text-tkd-cyan transition-colors">
                      <Phone className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <span>0162 9277072</span>
                    </a>
                    <a href="mailto:info@jessistaekwondoschule.de" className="flex items-center gap-3 text-gray-700 hover:text-tkd-cyan transition-colors">
                      <Mail className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <span>info@jessistaekwondoschule.de</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Standorte</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-tkd-cyan shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-900 font-medium">Heimenkirch</p>
                        <p className="text-gray-600 text-sm">Turnhalle, Lindauer Str. 20, 88178</p>
                        <p className="text-tkd-cyan text-sm mt-1">Donnerstags</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF6B6B] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-900 font-medium">Kißlegg</p>
                        <p className="text-gray-600 text-sm">Elements, Eugen-Bolz-Str. 26, 88353</p>
                        <p className="text-[#FF6B6B] text-sm mt-1">Freitags</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Schnellkontakt</h3>
                <div className="space-y-4">

                  <a
                    href="tel:+491629277072"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan font-semibold rounded-md hover:bg-tkd-cyan/20 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Direkt anrufen
                  </a>
                  <a
                    href="mailto:info@jessistaekwondoschule.de"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 border border-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    E-Mail senden
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    Oder direkt zum Probetraining anmelden:
                  </p>
                  <div className="mt-3 text-center">
                    <CTAButton>Probetraining sichern</CTAButton>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
