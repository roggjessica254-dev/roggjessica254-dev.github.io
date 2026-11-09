import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tkd-navy border-t border-white/5">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Spalte 1: Logo + Kurzbeschreibung */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={IMAGES.tigerLogo} alt="Jessi's Taekwondoschule Logo" className="h-16 w-auto invert" />
              <div>
                <span className="font-heading font-bold text-white block">Jessi's</span>
                <span className="font-heading font-semibold text-tkd-cyan text-sm block">Taekwondoschule</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Taekwondo für Kinder, Jugendliche und Erwachsene in Heimenkirch und Kißlegg im Allgäu.
              Trainerin: Jessica Rogg, 4. DAN.
            </p>
          </div>

          {/* Spalte 2: Training */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Training</h4>
            <div className="flex flex-col gap-2">
              <Link href="/kinder-taekwondo" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Kinder (6–14 Jahre)
              </Link>
              <Link href="/jugendliche" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Jugendliche (ab 15 Jahren)
              </Link>
              <Link href="/erwachsene" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Erwachsene (ab 18 Jahren)
              </Link>
              <Link href="/probetraining" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Probetraining
              </Link>
            </div>
          </div>

          {/* Spalte 3: Standorte */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Standorte</h4>
            <div className="flex flex-col gap-2">
              <Link href="/taekwondo-heimenkirch" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Heimenkirch
              </Link>
              <Link href="/taekwondo-kisslegg" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Kißlegg
              </Link>
            </div>
          </div>

          {/* Spalte 4: Infos */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Infos</h4>
            <div className="flex flex-col gap-2">
              <Link href="/mitgliedsbeitraege" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Mitgliedsbeiträge
              </Link>
              <Link href="/downloads" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Downloads
              </Link>
              <Link href="/faq" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/aktuelles" className="text-white/60 hover:text-tkd-cyan transition-colors text-sm">
                Aktuelles
              </Link>
            </div>
          </div>

          {/* Spalte 5: Kontakt */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+491629277072" className="flex items-center gap-2 text-sm text-white/60 hover:text-tkd-cyan transition-colors">
                <Phone className="w-4 h-4 text-tkd-cyan shrink-0" />
                0162 9277072
              </a>
              <a href="mailto:info@jessistaekwondoschule.de" className="flex items-center gap-2 text-sm text-white/60 hover:text-tkd-cyan transition-colors">
                <Mail className="w-4 h-4 text-tkd-cyan shrink-0" />
                info@jessistaekwondo<wbr />schule.de
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Jessi's Taekwondoschule. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
