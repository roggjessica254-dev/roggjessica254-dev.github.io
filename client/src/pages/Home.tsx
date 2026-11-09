import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { FadeIn, CTAButton, SectionHeading, DiagonalDivider, MediaPlaceholder } from "@/components/SectionComponents";
import { Shield, Brain, Target, Users, Clock, MapPin, Star, ChevronRight, CheckCircle, TrendingUp, Award, Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { aktuellesPosts } from "./Aktuelles";
import { IMAGES } from "@/lib/images";

function AnimatedCounter({ target, label, sublabel, icon: Icon }: { target: number; label: string; sublabel: string; icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="w-16 h-16 bg-tkd-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-tkd-cyan" />
      </div>
      <div className="text-5xl font-heading font-black text-white mb-1">
        {count}<span className="text-tkd-cyan">+</span>
      </div>
      <p className="text-white font-heading font-bold text-lg mb-1">{label}</p>
      <p className="text-white/60 text-sm">{sublabel}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Taekwondo Kinder Allgäu – Heimenkirch & Kißlegg"
        description="Taekwondo für Kinder, Jugendliche und Erwachsene in Heimenkirch & Kißlegg. Kostenloses Probetraining. Jessica Rogg, 4. DAN."
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <MediaPlaceholder label="Hintergrundbild folgt" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkd-navy/95 via-tkd-navy/80 to-tkd-navy/50" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-semibold rounded-full mb-6">
                Taekwondo im Allgäu
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
                Taekwondo für{" "}
                <span className="text-[#FF6B6B]">Kinder</span>,{" "}
                <span className="text-tkd-cyan">Jugendliche</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-white/80">
                  & Erwachsene im Allgäu
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Taekwondo in Heimenkirch und Kißlegg, für Kinder ab 6 Jahren, Jugendliche und Erwachsene. Wir fördern Selbstvertrauen, Respekt und Konzentration. Geleitet von Jessica Rogg, 4. DAN und mehrfache Deutsche Meisterin.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton>Kostenloses Probetraining sichern</CTAButton>
                <CTAButton href="/ueber-uns" variant="outline">Mehr erfahren</CTAButton>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-2 lg:mt-0">
              <div className="relative">
                <div className="w-full max-w-md mx-auto h-[23rem] sm:h-[28rem] lg:h-[32rem] rounded-lg shadow-2xl overflow-hidden bg-[#0c0d13]">
                  <img
                    src={IMAGES.jessicaHeroKick}
                    alt="Jessica Rogg beim Taekwondo-Kick"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 lg:-left-4 bg-tkd-navy/90 backdrop-blur-sm border border-tkd-cyan/20 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-tkd-cyan/20 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-tkd-cyan" />
                    </div>
                    <div>
                      <p className="text-white font-heading font-bold text-sm">Jessica Rogg</p>
                      <p className="text-tkd-cyan text-xs">4. DAN Schwarzgurt</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== QUICK FACTS ===== */}
      <section className="bg-tkd-navy py-6 border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Ab 6 Jahren", desc: "Kinder bis Erwachsene" },
              { icon: MapPin, label: "2 Standorte", desc: "Heimenkirch & Kißlegg" },
              { icon: Clock, label: "Einstieg jederzeit", desc: "Keine Vorkenntnisse nötig" },
              { icon: CheckCircle, label: "Gratis Probetraining", desc: "Unverbindlich testen" },
            ].map((fact, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tkd-cyan/10 rounded-lg flex items-center justify-center shrink-0">
                    <fact.icon className="w-5 h-5 text-tkd-cyan" />
                  </div>
                  <div>
                    <p className="text-white font-heading font-bold text-sm">{fact.label}</p>
                    <p className="text-white/50 text-xs">{fact.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-20 lg:py-28" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Was Taekwondo Ihrem Kind gibt"
              subtitle="Mehr als nur ein Sport, eine Schule fürs Leben"
            />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Selbstvertrauen",
                desc: "Kinder lernen, selbstbewusst aufzutreten und sich zu behaupten. Jede Prüfung, jeder neue Gürtel stärkt das Vertrauen in die eigenen Fähigkeiten.",
                color: "[#FF6B6B]",
              },
              {
                icon: Brain,
                title: "Konzentration & Fokus",
                desc: "Komplexe Bewegungsabläufe schulen Motorik und Konzentration. Fähigkeiten, die Kindern auch in der Schule und im Alltag zugutekommen.",
                color: "tkd-cyan",
              },
              {
                icon: Target,
                title: "Respekt & Gemeinschaft",
                desc: "Taekwondo lehrt respektvollen Umgang miteinander und Fairness. Kinder finden Freunde und werden Teil einer starken Gemeinschaft.",
                color: "tkd-gold",
              },
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-tkd-cyan/40 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 bg-${benefit.color}/10`}>
                    <benefit.icon className={`w-7 h-7 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3" aria-label={benefit.title}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ALTERSSTUFEN ===== */}
      <section className="py-20 lg:py-28 relative" style={{backgroundColor: '#0F2133'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="Unsere Altersstufen"
              subtitle="Altersgerechtes Training, mit Spiel und Spaß zum Ziel"
              light
            />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Kinder */}
            <FadeIn delay={0.1}>
              <Link href="/kinder-taekwondo" className="group block">
                <div className="relative overflow-hidden rounded-lg border border-white/5 hover:border-[#FF6B6B]/30 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={IMAGES.kinderTrainingNeu} alt="Kinder beim Taekwondo-Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tkd-navy via-tkd-navy/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] text-xs font-semibold rounded-full mb-3">
                      6–14 Jahre
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Kinder Taekwondo</h3>
                    <p className="text-white/80 text-sm mb-3">Technik, Selbstbehauptung und Disziplin mit dem Gürtelsystem.</p>
                    <span className="inline-flex items-center text-[#FF6B6B] text-sm font-semibold group-hover:gap-2 transition-all">
                      Mehr erfahren <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Jugendliche */}
            <FadeIn delay={0.2}>
              <Link href="/jugendliche" className="group block">
                <div className="relative overflow-hidden rounded-lg border border-white/5 hover:border-tkd-cyan/30 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={IMAGES.jugendlicheTrainingNeu} alt="Jugendliche beim Taekwondo-Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tkd-navy via-tkd-navy/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-tkd-cyan/20 text-tkd-cyan text-xs font-semibold rounded-full mb-3">
                      Ab 15 Jahren
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">Jugendliche</h3>
                    <p className="text-white/80 text-sm mb-3">Wettkampf, Prüfungen und intensive Technikschulung.</p>
                    <span className="inline-flex items-center text-tkd-cyan text-sm font-semibold group-hover:gap-2 transition-all">
                      Mehr erfahren <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Erwachsene */}
            <FadeIn delay={0.3}>
              <Link href="/erwachsene" className="group block">
                <div className="relative overflow-hidden rounded-lg border border-white/5 hover:border-[#FF6B6B]/30 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={IMAGES.erwachseneTrainingNeu} alt="Erwachsene beim Taekwondo-Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tkd-navy via-tkd-navy/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#FF6B6B]/20 text-[#FF6B6B] text-xs font-semibold rounded-full mb-3">
                      Ab 18 Jahren
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white mb-2">Erwachsene</h3>
                    <p className="text-white/80 text-sm mb-3">Fitness, Selbstverteidigung und Wettkampfsport für Erwachsene.</p>
                    <span className="inline-flex items-center text-[#FF6B6B] text-sm font-semibold group-hover:gap-2 transition-all">
                      Mehr erfahren <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== PROBETRAINING ABLAUF ===== */}
      <section className="py-20 lg:py-28 relative" style={{backgroundColor: '#F1F7F6'}}>
        <div className="container">
          <FadeIn>
            <SectionHeading
              title="So einfach geht's"
              subtitle="In 3 Schritten zum kostenlosen Probetraining"
            />
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Anmelden", desc: "Füllen Sie das kurze Formular aus und vereinbaren Sie Ihren Wunschtermin." },
              { step: "2", title: "Vorbeikommen", desc: "Bringen Sie Sportkleidung und etwas zu trinken mit. Mehr braucht es nicht." },
              { step: "3", title: "Mitmachen", desc: "Ihr Kind trainiert eine Stunde kostenlos mit und entscheidet selbst, ob es weitermachen möchte." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-tkd-cyan/10 border-2 border-tkd-cyan rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-heading font-extrabold text-tkd-cyan">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
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

      {/* ===== COUNTER / VERTRAUEN ===== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#0D1B2A' }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-medium rounded-full mb-4">
                Unsere Gemeinschaft
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
                Jessi's Taekwondoschule in Zahlen
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            <FadeIn delay={0.1}>
              <AnimatedCounter target={101} label="Aktive Mitglieder" sublabel="in Heimenkirch & Kißlegg" icon={Users} />
            </FadeIn>
            <FadeIn delay={0.2}>
              <AnimatedCounter target={113} label="Gürtelprüfungen" sublabel="erfolgreich abgelegt" icon={Award} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== NEUIGKEITEN ===== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F1F7F6' }}>
        <div className="container">
          <FadeIn>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="inline-block px-3 py-1 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-medium rounded-full mb-3">
                  Aktuelles
                </span>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                  Neuigkeiten aus Jessi's Taekwondoschule
                </h2>
              </div>
              <Link href="/aktuelles" className="inline-flex items-center gap-2 text-tkd-cyan font-semibold hover:gap-3 transition-all">
                Alle Berichte <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aktuellesPosts.slice(0, 3).map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ objectPosition: 'center top' }} />
                    ) : (
                      <MediaPlaceholder label="Beitragsbild folgt" className="w-full h-full" />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-tkd-navy/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        <MapPin className="w-3 h-3 text-tkd-cyan" />
                        {post.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 text-tkd-cyan" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-3 leading-snug">{post.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.previewText}</p>
                    <Link href={`/aktuelles/${post.id}`} className="inline-flex items-center gap-2 text-tkd-cyan font-semibold text-sm hover:gap-3 transition-all">
                      Bericht lesen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 lg:py-28 bg-tkd-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-tkd-navy-light to-tkd-navy" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-tkd-navy/90 to-tkd-navy/80" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-6">
              Bereit für den ersten <span className="text-tkd-cyan">Kick</span>?
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Melden Sie Ihr Kind jetzt zum kostenlosen Probetraining an und erleben Sie, wie Taekwondo Selbstvertrauen, Disziplin und Freude vereint.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton>Kostenloses Probetraining sichern</CTAButton>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
