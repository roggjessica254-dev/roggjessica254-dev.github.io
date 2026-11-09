import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/SectionComponents";
import type { ReactNode } from "react";

const ExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-tkd-cyan underline underline-offset-2 hover:text-[#0b9daf]">
    {children}
  </a>
);

export default function Datenschutz() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Datenschutz – Jessi's Taekwondoschule"
        description="Datenschutzerklärung von Jessi's Taekwondoschule."
      />
      <section className="relative overflow-hidden bg-tkd-navy py-28 sm:py-32">
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-heading text-4xl font-extrabold text-white md:text-5xl">Datenschutz</h1>
            <p className="mt-4 max-w-2xl text-white/70">Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <div className="space-y-9 text-gray-700">
              <p className="text-sm text-gray-500">Stand: November 2026</p>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">1. Verantwortliche Stelle</h2>
                <p className="leading-relaxed">
                  Jessica Rogg<br />
                  Jessi&apos;s Taekwondoschule<br />
                  Sigmannser Weg 5/1<br />
                  88239 Wangen im Allgäu<br /><br />
                  Telefon: <a className="text-tkd-cyan hover:underline" href="tel:+491629277072">0162 9277072</a><br />
                  E-Mail: <a className="text-tkd-cyan hover:underline" href="mailto:info@jessistaekwondoschule.de">info@jessistaekwondoschule.de</a>
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">2. Besuch der Website und technisch notwendige Protokolldaten</h2>
                <p className="leading-relaxed">
                  Beim Aufruf verarbeitet die technische Auslieferungs- und Hostingkette notwendige Verbindungsdaten. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, Antwortstatus sowie Angaben zu Browser und Betriebssystem gehören. Die Verarbeitung dient der Auslieferung, der Stabilität sowie der Abwehr von Störungen und Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist der sichere und zuverlässige Betrieb der Website.
                </p>
                <p className="mt-3 leading-relaxed">
                  Der von uns gesteuerte Websitecode verwendet keine Reichweitenmessung, kein Marketing-Tracking, keine Sitzungsaufzeichnung und keine Profilbildung. Umami und Amplitude sind nicht eingebunden. Zusätzlich begrenzt eine Content-Security-Policy die Ausführung von Skripten auf Dateien der eigenen Website; dadurch werden nachträglich eingebundene externe Analyse- oder Verhaltenssammler technisch blockiert. Die öffentliche Website speichert keine eigenen Komfort- oder Analysedaten in Local Storage oder Session Storage.
                </p>
                <p className="mt-3 leading-relaxed">
                  Die Anbieter veröffentlichen für technische Sicherheits- und Infrastrukturprotokolle keine einheitliche, für diese Website wählbare Besucher-Logfrist. Daten werden nach ihren Vertrags- und Sicherheitskriterien nur so lange verarbeitet, wie dies zur Bereitstellung, Sicherheit, Rechtsverteidigung oder Erfüllung gesetzlicher Pflichten erforderlich ist. Soweit wir auf solche Daten zugreifen können, veranlassen wir bei einem berechtigten Löschbegehren eine Löschung oder Einschränkung.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">3. Hosting, Formularübermittlung und E-Mail-Versand</h2>
                <p className="leading-relaxed">
                  Die Website wird über <strong>GitHub Pages</strong> der <strong>GitHub, Inc., USA</strong> (ein Unternehmen der Microsoft Corporation) als statische Website bereitgestellt. Beim Aufruf verarbeitet GitHub technisch notwendige Verbindungsdaten, insbesondere die IP-Adresse, um die Seiten auszuliefern und die Sicherheit des Dienstes zu gewährleisten. GitHub nennt für Übermittlungen in die USA das EU-US Data Privacy Framework sowie EU-Standardvertragsklauseln. Informationen: <ExternalLink href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">GitHub-Datenschutzerklärung</ExternalLink>. Die Website selbst speichert keine Formulardaten und verwendet keine Datenbank.
                </p>
                <p className="mt-3 leading-relaxed">
                  Die Angaben aus dem Probetraining-Formular werden verschlüsselt an einen kleinen Weiterleitungsdienst bei <strong>Cloudflare, Inc., USA</strong> (Cloudflare Workers) übermittelt. Dieser prüft die Angaben und übergibt sie unmittelbar an den E-Mail-Versanddienst; eine Speicherung der Formularinhalte findet dort nicht statt. Cloudflare verarbeitet dabei technisch notwendige Verbindungsdaten wie die IP-Adresse. Das <ExternalLink href="https://www.cloudflare.com/cloudflare-customer-dpa/">Cloudflare DPA</ExternalLink> beschreibt Cloudflare als Auftragsverarbeiter und nennt EU-Standardvertragsklauseln sowie das EU-US Data Privacy Framework.
                </p>
                <p className="mt-3 leading-relaxed">
                  Für die Eingangsbestätigung und die interne Formularbenachrichtigung wird <strong>Resend / Plus Five Five, Inc., USA</strong> eingesetzt. Resend verarbeitet Absender- und Empfängeradresse, E-Mail-Inhalt, Versand- und Zustelldaten als Auftragsverarbeiter. Nach seiner <ExternalLink href="https://resend.com/security/gdpr">GDPR-Information</ExternalLink> ist ein Art.-28-DPA für jedes Resend-Konto wirksam und im Konto abrufbar. Resend speichert diese Daten in den USA, nutzt EU-Standardvertragsklauseln und das EU-US Data Privacy Framework, bewahrt E-Mail- und Protokolldaten bei aktivem Konto regelmäßig 30 Tage und Sicherungskopien bis zu 7 Tage auf. Eine frühere Nachrichtlöschung kann beim Resend-Support beantragt werden.
                </p>
                <p className="mt-3 leading-relaxed">
                  Die Schulpostfächer der Domain werden nach den öffentlichen MX-Einträgen über den <strong>SiteGround-Maildienst</strong> betrieben. SiteGround verarbeitet Nachrichten und Anhänge zur Bereitstellung und Absicherung des Maildienstes. Seine <ExternalLink href="https://www.siteground.com/privacy.htm">Datenschutzerklärung</ExternalLink> nennt internationale Übermittlungen, geeignete Garantien einschließlich Standardvertragsklauseln sowie das EU-US Data Privacy Framework, soweit anwendbar. Nachrichten werden im Rahmen des in Ziffer 6 beschriebenen Verfahrens aus den betroffenen Schulpostfächern und vorhandenen Papierkörben gelöscht. Die konkrete technische Backup-Rotation des individuell gebuchten Mailpakets wird von SiteGround nicht öffentlich für dieses Postfach ausgewiesen.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">4. Probetraining-Anfrage und Kontaktwege</h2>
                <p className="leading-relaxed">
                  Bei einer Probetraining-Anfrage über das Formular verarbeiten wir Vor- und Nachname, Alter, Telefonnummer, E-Mail-Adresse, bevorzugte Erreichbarkeit, gewünschten Standort und Kurs sowie bei einem nicht belegten Kurs den Wunschtermin. Die Angaben gehen als E-Mail an unser Schulpostfach; Sie erhalten eine Bestätigung per E-Mail. Diese Angaben sind im Formular mit einem Sternchen als Pflichtangaben markiert. Ohne sie können wir die Anfrage nicht zuordnen, keinen Termin abstimmen oder keine Rückmeldung beziehungsweise Bestätigung senden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO zur Bearbeitung der von Ihnen angefragten vorvertraglichen Maßnahme.
                </p>
                <p className="mt-3 leading-relaxed">
                  Freiwillig sind der Name einer erziehungsberechtigten Person, eine Nachricht sowie – nur bei einem belegten Kurs – die Angabe zur alternativen Trainingszeit. Bei minderjährigen Interessentinnen und Interessenten kontaktieren wir die angegebene erziehungsberechtigte Person, um die Teilnahme am Probetraining zu organisieren und die vorvertragliche Anfrage zu bearbeiten. Die dafür freiwillig angegebene Kontaktinformation wird auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet, soweit die erziehungsberechtigte Person die Anfrage selbst stellt oder die vorvertragliche Maßnahme für das Kind veranlasst; andernfalls beruht die Kommunikation auf Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einer sicheren und geordneten Organisation des Kindertrainings.
                </p>
                <p className="mt-3 leading-relaxed">
                  Bei einer allgemeinen Kontaktaufnahme per E-Mail oder Telefon verarbeiten wir die jeweils übermittelten Angaben zur Beantwortung Ihres Anliegens auf Art. 6 Abs. 1 lit. b DSGVO, soweit eine vorvertragliche Anfrage vorliegt, andernfalls auf Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Kommunikation. Die Pflichtbestätigung unter dem Formular dokumentiert, dass diese Information gelesen wurde; sie ist keine Einwilligung in die reguläre Anfragebearbeitung.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">5. Warteliste bei belegten Kursen</h2>
                <p className="leading-relaxed">
                  Ist ein Kurs belegt, können Sie sich mit dem Formular auf unsere Warteliste setzen lassen, damit wir Sie über einen frei werdenden Platz informieren. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft per E-Mail an <a className="text-tkd-cyan hover:underline" href="mailto:info@jessistaekwondoschule.de">info@jessistaekwondoschule.de</a> widerrufen werden.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">6. Manueller Löschablauf und getrennte Mitgliedsdaten</h2>
                <p className="leading-relaxed">
                  Offene und unbeantwortete Probetraining-Anfragen werden regelmäßig manuell geprüft. Sobald eine Mitgliedschaft abgeschlossen wird oder feststeht, dass kein Interesse mehr besteht, wird die Anfrage unverzüglich gelöscht. Einträge der Warteliste werden unverzüglich gelöscht, wenn ein Platz vermittelt wurde, kein Platz mehr gewünscht ist oder die Einwilligung widerrufen wird. Es besteht keine automatische 30- oder 90-Tage-Löschung.
                </p>
                <p className="mt-3 leading-relaxed">
                  Der Löschablauf umfasst die zugehörige Anfrage, Antworten und PDF-Anhänge in allen für den jeweiligen Fall verwendeten Schulpostfächern – mindestens <strong>probetraining@jessistaekwondoschule.de</strong>, bei manueller Korrespondenz gegebenenfalls auch <strong>info@jessistaekwondoschule.de</strong> oder einem weiteren tatsächlich verwendeten Schulpostfach – einschließlich vorhandener Papierkörbe.
                </p>
                <p className="mt-3 leading-relaxed">
                  Mitgliedsdaten, die nach einem Vertragsabschluss für ein eigenständiges Mitgliedschaftsverhältnis erforderlich sind, werden getrennt geführt und nicht durch diesen Löschablauf verändert. Die Löschung aus dem Postfach entfernt keine bereits entstandenen Anbieterprotokolle oder Sicherungskopien; für diese gelten die in Ziffer 3 dargestellten Lösch- und Überschreibkriterien.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">7. Externe Links, Karten und Schriften</h2>
                <p className="leading-relaxed">
                  Google Maps wird nicht eingebettet. Die Standortseiten enthalten nur einen Routenlink; Google erhält Daten erst nach einem bewussten Klick. Gleiches gilt für Links zu Instagram und YouTube. Unsere Schriften werden lokal von dieser Website ausgeliefert; beim Seitenaufruf findet kein Abruf bei Google Fonts statt.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">8. Cookies und Einwilligung</h2>
                <p className="leading-relaxed">
                  Die öffentliche Website setzt keine Analyse-, Marketing- oder sonstigen einwilligungspflichtigen Cookies und keinen entsprechenden Browser-Speicher ein. Deshalb ist für die aktuell eingesetzte Technik kein Cookie-Einwilligungsbanner erforderlich. Wird künftig eine nicht notwendige Technik wie Reichweitenmessung, Marketing, eingebettete Karten oder externe Videos ergänzt, wird diese Information angepasst und eine erforderliche Einwilligung vorab eingeholt.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">9. Ihre Rechte</h2>
                <p className="leading-relaxed">
                  Sie haben das Recht auf Auskunft über Ihre personenbezogenen Daten, Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Beschwerde bei einer Aufsichtsbehörde. Bitte wenden Sie sich hierzu an die unter Ziffer 1 genannten Kontaktdaten.
                </p>
                <p className="mt-3 rounded-lg border-l-4 border-tkd-cyan bg-white/70 p-4 leading-relaxed text-gray-800">
                  <strong>Widerspruchsrecht:</strong> Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einlegen. Wir verarbeiten die Daten dann nicht weiter, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                </p>
                <p className="mt-3 leading-relaxed">
                  Erteilte Einwilligungen, insbesondere für die Warteliste, können jederzeit mit Wirkung für die Zukunft widerrufen werden. Der Widerruf berührt nicht die Rechtmäßigkeit der vor dem Widerruf aufgrund der Einwilligung erfolgten Verarbeitung.
                </p>
                <p className="mt-3 leading-relaxed">
                  Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren: <ExternalLink href="https://www.baden-wuerttemberg.datenschutz.de/">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</ExternalLink>.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl font-bold text-gray-900">10. Aktualisierung dieser Information</h2>
                <p className="leading-relaxed">
                  Wir passen diese Datenschutzerklärung an, wenn sich die Datenverarbeitung, die eingesetzte Technik, die ermittelbaren Anbieterinformationen oder die rechtlichen Anforderungen ändern.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
