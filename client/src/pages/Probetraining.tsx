import { useState } from "react";
import { useLocation } from "wouter";
import SEOHead from "@/components/SEOHead";
import { FadeIn, SectionHeading, MediaPlaceholder } from "@/components/SectionComponents";
import { Phone, CheckCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { probetraining, terminPaare as ladeTerminPaare } from "@/lib/content";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export default function Probetraining() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    alter: "",
    erziehungsberechtigter: "",
    phone: "",
    email: "",
    erreichbarkeit: "",
    standort: "",
    kurs: "",
    erstesProbetraining: "",
    zweitesProbetraining: "",
    nachricht: "",
    privacyAccepted: false,
    // Interessentenliste-Felder
    interessentenliste: false,
    zweiteTrainingszeit: "" as "" | "ja" | "nein" | "vielleicht",
  });
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const standortDaten = probetraining.standorte.find(st => st.name === formData.standort);
  const kursDaten = standortDaten?.kurse.find(k => k.name === formData.kurs);

  // Verfügbare Kurse basierend auf Standort
  const getAvailableKurse = () => (standortDaten?.kurse ?? []).map(k => k.name);

  // Trainingszeit basierend auf Standort und Kurs
  const getTrainingszeit = () => kursDaten?.zeit || null;

  // Probetermine des Standorts (gelten für alle Kurse); Folgetermin = 7 Tage später
  const getAvailableTerminPaare = () => (formData.standort ? ladeTerminPaare(formData.standort) : []);

  const getZweiteTerminOptionen = () => {
    const paar = getAvailableTerminPaare().find(p => p.erstes === formData.erstesProbetraining);
    return paar ? [paar.zweites + (paar.hinweis ? ` (${paar.hinweis})` : "")] : [];
  };

  // Kurs voll -> Warteliste
  const isKursVoll = () => !!kursDaten?.voll;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.vorname.trim()) {
      toast.error("Bitte geben Sie Ihren Vornamen ein.");
      return;
    }
    if (!formData.nachname.trim()) {
      toast.error("Bitte geben Sie Ihren Nachnamen ein.");
      return;
    }
    if (!formData.alter.trim()) {
      toast.error("Bitte geben Sie das Alter ein.");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Bitte geben Sie Ihre Telefonnummer ein.");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }
    if (!formData.erreichbarkeit) {
      toast.error("Bitte wählen Sie, wann Sie am besten erreichbar sind.");
      return;
    }
    if (!formData.standort) {
      toast.error("Bitte wählen Sie einen Standort.");
      return;
    }
    if (!formData.kurs) {
      toast.error("Bitte wählen Sie einen Kurs.");
      return;
    }
    // Nur Termin-Pflichtfeld wenn Kurs NICHT voll
    if (!isKursVoll() && !formData.erstesProbetraining) {
      toast.error("Bitte wählen Sie einen Wunschtermin für das 1. Probetraining.");
      return;
    }
    if (!formData.privacyAccepted) {
      toast.error("Bitte akzeptieren Sie die Datenschutzerklärung.");
      return;
    }
    
    if (isKursVoll() && !formData.interessentenliste) {
      toast.error("Bitte bestätige, dass du auf die Warteliste möchtest.");
      return;
    }
    if (!FORM_ENDPOINT) {
      toast.error("Das Formular ist noch nicht eingerichtet. Bitte melde dich telefonisch oder per E-Mail.");
      return;
    }

    setSubmitting(true);
    const voll = isKursVoll();
    const paar = getAvailableTerminPaare().find(p => p.erstes === formData.erstesProbetraining);
    const antwortMap: Record<string, string> = { ja: "Ja", nein: "Nein", vielleicht: "Vielleicht" };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          art: voll ? "warteliste" : "probetraining",
          vorname: formData.vorname.trim(),
          nachname: formData.nachname.trim(),
          alter: formData.alter.trim(),
          erziehungsberechtigter: formData.erziehungsberechtigter.trim(),
          telefon: formData.phone.trim(),
          email: formData.email.trim(),
          erreichbarkeit: formData.erreichbarkeit,
          standort: formData.standort,
          kurs: formData.kurs,
          trainingszeit: getTrainingszeit() || "",
          erstesProbetraining: voll ? "" : formData.erstesProbetraining,
          zweitesProbetraining: voll ? "" : (paar?.zweites || formData.zweitesProbetraining),
          terminHinweis: voll ? "" : (paar?.hinweis || ""),
          alternativeTrainingszeit: voll && formData.zweiteTrainingszeit ? antwortMap[formData.zweiteTrainingszeit] : "",
          nachricht: formData.nachricht.trim(),
          website: honeypot,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Fehler beim Senden. Bitte versuche es erneut.");
      }
      navigate(voll ? "/danke?warteliste=1" : "/danke");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Fehler beim Senden. Bitte versuche es erneut.");
      setSubmitting(false);
    }
  };

  const terminPaare = getAvailableTerminPaare();
  const zweiteTerminOptionen = getZweiteTerminOptionen();
  const kursVoll = isKursVoll();

  return (
    <div className="min-h-screen">
      <SEOHead title="Kostenloses Probetraining – Jessi's Taekwondoschule" description="Jetzt kostenloses Probetraining sichern! Taekwondo in Heimenkirch und Kißlegg. Einfach anmelden, vorbeikommen und mitmachen. Unverbindlich!" />
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-tkd-navy" />
        <div className="absolute inset-0 opacity-40">
          <MediaPlaceholder label="Hintergrundbild folgt" className="w-full h-full" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white">
              Kostenloses <span className="text-tkd-cyan">Probetraining</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Vereinbare ganz einfach und unkompliziert ein Probetraining bei uns. Wir freuen uns auf dich!
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-tkd-cyan/20 border border-tkd-cyan/50 rounded-lg">
              <svg className="w-5 h-5 text-tkd-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span className="text-white font-semibold text-sm">Das Probetraining ist ausschließlich nach vorheriger Terminvereinbarung möglich.</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form + Steps */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div>
              <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm sm:p-8">
                <div className="mb-5 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p className="text-amber-800 text-sm font-medium">Das Probetraining ist ausschließlich nach vorheriger Terminvereinbarung möglich. Wähle deinen Wunschtermin direkt im Formular.</p>
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Probetraining anfragen</h2>
                <p className="-mt-3 mb-6 text-sm leading-relaxed text-gray-600">Felder mit <span aria-hidden="true">*</span> sind erforderlich, damit wir deine Anfrage bearbeiten, einen Termin abstimmen und dir antworten können. Angaben ohne Sternchen sind freiwillig.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Vorname *</label>
                      <input
                        type="text"
                        required
                        value={formData.vorname}
                        onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Nachname *</label>
                      <input
                        type="text"
                        required
                        value={formData.nachname}
                        onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Alter *</label>
                      <input
                        type="text"
                        required
                        value={formData.alter}
                        onChange={(e) => setFormData({ ...formData, alter: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="z.B. 6 Jahre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Erziehungsberechtigte/r <span className="font-normal text-gray-500">(optional)</span></label>
                      <input
                        type="text"
                        value={formData.erziehungsberechtigter}
                        onChange={(e) => setFormData({ ...formData, erziehungsberechtigter: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="Martha Mustermann"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Telefonnummer *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="0170 1234567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">E-Mail-Adresse *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                        placeholder="maxmustermann@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Standort */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5 font-medium">Wo möchtest du das Probetraining machen? *</label>
                    <select
                      required
                      value={formData.standort}
                      onChange={(e) => {
                        setFormData({ 
                          ...formData, 
                          standort: e.target.value,
                          kurs: "",
                          erstesProbetraining: "",
                          zweitesProbetraining: "",
                          interessentenliste: false,
                          zweiteTrainingszeit: "",
                        });
                      }}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      {probetraining.standorte.map((st) => (
                        <option key={st.name} value={st.name}>{st.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Kurs */}
                  {formData.standort && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">Wähle deinen Kurs *</label>
                      <select
                        required
                        value={formData.kurs}
                        onChange={(e) => {
                          setFormData({ 
                            ...formData, 
                            kurs: e.target.value,
                            erstesProbetraining: "",
                            zweitesProbetraining: "",
                            interessentenliste: false,
                            zweiteTrainingszeit: "",
                          });
                        }}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                      >
                        <option value="">Bitte wählen</option>
                        {getAvailableKurse().map((kurs) => (
                          <option key={kurs} value={kurs}>{kurs}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Trainingszeit-Hinweis nach Kursauswahl */}
                  {formData.kurs && getTrainingszeit() && (
                    <div className="rounded-lg bg-tkd-cyan/10 border border-tkd-cyan/30 px-4 py-3 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-tkd-cyan shrink-0" />
                      <p className="text-sm text-gray-800">
                        <span className="font-semibold">Trainingszeit:</span> {getTrainingszeit()}
                      </p>
                    </div>
                  )}

                  {/* Infobox: Kurs voll – Interessentenliste */}
                  {kursVoll && (
                    <div className="rounded-xl border-2 border-orange-300 bg-orange-50 p-5 space-y-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-orange-800 font-bold text-base leading-snug">
                            Dieser Kurs ist aktuell leider voll belegt.
                          </p>
                          <p className="text-orange-700 text-sm mt-1 leading-relaxed">
                            Trag dich auf unsere Warteliste ein – wir melden uns bei dir, sobald ein Platz frei wird. Ein Probetermin wird dann gemeinsam vereinbart.
                          </p>
                        </div>
                      </div>

                      {/* Checkbox: Interessentenliste */}
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.interessentenliste}
                          onChange={(e) => setFormData({ ...formData, interessentenliste: e.target.checked })}
                          className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
                        />
                        <span className="text-orange-800 text-sm font-medium leading-relaxed group-hover:text-orange-900">
                          Ich möchte auf die Warteliste und informiert werden, sobald ein Platz frei wird. Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen. *
                        </span>
                      </label>

                      {/* Zusatzfrage: zweite Trainingszeit */}
                      <div className="pt-1">
                        <p className="text-orange-800 text-sm font-semibold mb-2">
                          Würde bei ausreichender Nachfrage grundsätzlich Interesse an einer alternativen Trainingszeit bestehen?
                        </p>
                        <div className="space-y-2">
                          {[
                            { value: "ja", label: "Ja" },
                            { value: "nein", label: "Nein" },
                            { value: "vielleicht", label: "Vielleicht" },
                          ].map((opt) => (
                            <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="radio"
                                name="zweiteTrainingszeit"
                                value={opt.value}
                                checked={formData.zweiteTrainingszeit === opt.value}
                                onChange={(e) => setFormData({ ...formData, zweiteTrainingszeit: e.target.value as "ja" | "nein" | "vielleicht" })}
                                className="w-4 h-4 accent-orange-500"
                              />
                              <span className="text-orange-800 text-sm">{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Termin-Auswahl – nur wenn Kurs nicht voll ist */}
                  {formData.kurs && !kursVoll && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">1. Probetraining – Wunschtermin wählen *</label>
                      <select
                        required
                        value={formData.erstesProbetraining}
                        onChange={(e) => {
                          const gewaehltesPaar = terminPaare.find(p => p.erstes === e.target.value);
                          setFormData({ 
                            ...formData, 
                            erstesProbetraining: e.target.value, 
                            zweitesProbetraining: gewaehltesPaar ? gewaehltesPaar.zweites : ""
                          });
                        }}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors"
                      >
                        <option value="">Bitte wählen</option>
                        {terminPaare.map((paar, idx) => (
                          <option key={idx} value={paar.erstes}>{paar.erstes}{paar.hinweis ? ` – ${paar.hinweis}` : ""}</option>
                        ))}
                      </select>
                      {terminPaare.length === 0 && (
                        <p className="text-sm text-orange-700 mt-2">Aktuell sind keine Probetermine eingetragen. Ruf uns gerne an oder schreib uns – wir finden einen Termin.</p>
                      )}
                    </div>
                  )}

                  {/* 2. Probetraining - nur sichtbar wenn 1. Probetraining ausgewählt und Kurs nicht voll */}
                  {formData.erstesProbetraining && !kursVoll && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5 font-medium">2. Probetraining – Folgetermin</label>
                      <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-sm">
                        {zweiteTerminOptionen[0] || "–"}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Der 2. Probetraining-Termin ist automatisch eine Woche nach dem 1. Termin.</p>
                    </div>
                  )}

                  {/* Erreichbarkeit */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Wann kann ich dich am besten erreichen? *</label>
                    <div className="space-y-2">
                      {[
                        "vor 08:00 Uhr",
                        "von 08:00 Uhr bis 12:00 Uhr",
                        "von 12:00 Uhr bis 13:00 Uhr",
                        "von 13:00 Uhr bis 16:00 Uhr",
                        "ab 16:00 Uhr",
                      ].map((option, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="erreichbarkeit"
                            value={option}
                            checked={formData.erreichbarkeit === option}
                            onChange={(e) => setFormData({ ...formData, erreichbarkeit: e.target.value })}
                            className="w-4 h-4 accent-[#00C5D9]"
                          />
                          <span className="text-gray-700 text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5 font-medium">Deine Nachricht an uns <span className="font-normal text-gray-500">(optional)</span></label>
                    <textarea
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:border-tkd-cyan focus:ring-1 focus:ring-tkd-cyan outline-none transition-colors resize-none"
                      placeholder="Deine Nachricht (optional)"
                    />
                  </div>

                  {/* Spamschutz: für Menschen unsichtbar */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
                    <label>Website<input type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></label>
                  </div>

                  {/* DSGVO */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 accent-[#00C5D9] cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                      Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-tkd-cyan hover:underline">Datenschutzerklärung</a> gelesen. Die mit <span aria-hidden="true">*</span> gekennzeichneten Angaben werden benötigt, um meine Probetraining-Anfrage zu bearbeiten. Bei vollen Kursen gilt die Einwilligung für die Warteliste nur, wenn ich diese oben ausdrücklich auswähle. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#2563EB] text-white font-heading font-bold rounded-md hover:bg-[#1D4ED8] transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Wird gesendet..." : kursVoll ? "Auf die Warteliste eintragen" : "Probetraining anfragen"}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center mb-3">Oder direkt anrufen:</p>
                  <a
                    href="tel:+491629277072"
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    0162 9277072
                  </a>
                </div>
              </div>
            </div>

            {/* Steps + Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">So läuft ein Probetraining ab</h2>
                  <div className="space-y-5">
                    {[
                      { step: "1", title: "Anmeldung", desc: "Fülle das Probetraining-Formular aus und wähle deinen Wunschtermin direkt. Bei Fragen melden wir uns bei dir." },
                      { step: "2", title: "Terminvereinbarung", desc: "Du wählst deinen Wunschtermin direkt im Formular. Dein Termin ist damit verbindlich reserviert." },
                      { step: "3", title: "Vorbereitung", desc: "Bringen Sie Sportkleidung und etwas zu trinken mit. Einen Anzug brauchen Sie noch nicht." },
                      { step: "4", title: "Training", desc: "Ihr Kind trainiert eine komplette Einheit mit und kann alles ausprobieren. Sie dürfen gerne zuschauen." },
                      { step: "5", title: "Nach dem Probetraining", desc: "Nach dem ersten Probetraining erfolgt eine kurze persönliche Besprechung mit dem Trainer. Dabei wird besprochen, wie das Training gefallen hat und offene Fragen werden geklärt. Ein zweites Probetraining ist möglich, bevor eine Entscheidung über eine Mitgliedschaft getroffen werden muss." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-[#00C5D9]/10 border border-[#00C5D9]/30 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-[#00C5D9] font-heading font-bold text-sm">{item.step}</span>
                        </div>
                        <div>
                          <h3 className="text-base font-heading font-bold text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">Was Sie mitbringen sollten</h3>
                  <div className="space-y-2">
                    {[
                      "Bequeme Sportkleidung",
                      "Etwas zu trinken",
                      "Gute Laune und Neugier",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#00C5D9] shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-[#00C5D9]/20 shadow-sm">
                  <p className="text-[#00C5D9] font-heading font-bold text-lg mb-2">100% kostenlos & unverbindlich</p>
                  <p className="text-gray-700 text-sm">
                    Das Probetraining ist komplett kostenlos. Es gibt keine versteckten Kosten und keine Verpflichtung. Ihr Kind entscheidet selbst, ob es weitermachen möchte.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
