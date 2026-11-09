import { Link } from "wouter";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { FadeIn, MediaPlaceholder } from "@/components/SectionComponents";
import SEOHead from "@/components/SEOHead";

export { aktuellesPosts } from "@/lib/content";
import { aktuellesPosts } from "@/lib/content";

export default function Aktuelles() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Aktuelles | Jessi's Taekwondoschule"
        description="Berichte über Gürtelprüfungen, Trainings und Veranstaltungen aus Heimenkirch und Kißlegg – Jessi's Taekwondoschule im Allgäu."
      />

      {/* Hero */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1a2d42 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-tkd-cyan blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#FF6B6B] blur-3xl" />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-tkd-cyan/10 border border-tkd-cyan/30 text-tkd-cyan text-sm font-medium rounded-full mb-4">
                Neuigkeiten
              </span>
              <h1 className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
                Aktuelles aus Jessi's Taekwondoschule
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Berichte über Gürtelprüfungen, Trainings und Veranstaltungen aus Heimenkirch und Kißlegg.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Beitrags-Übersicht */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aktuellesPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  <Link
                    href={`/aktuelles/${post.id}`}
                    className="relative h-64 overflow-hidden block group"
                    aria-label={`${post.title} lesen`}
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full h-full ${post.imageFit === "contain" ? "object-contain bg-[#eff6f6]" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                        style={{ objectPosition: post.imagePosition ?? 'center top' }}
                      />
                    ) : (
                      <MediaPlaceholder label="Beitragsbild folgt" className="w-full h-full" />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-tkd-navy/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        <MapPin className="w-3 h-3 text-tkd-cyan" />
                        {post.location}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 text-tkd-cyan" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-lg font-heading font-bold text-gray-900 mb-3 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.previewText}
                    </p>
                    <Link
                      href={`/aktuelles/${post.id}`}
                      className="inline-flex items-center gap-2 text-tkd-cyan font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Bericht lesen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4">
              Werde Teil unserer Gemeinschaft
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Erlebe Taekwondo in Heimenkirch oder Kißlegg – melde dich jetzt für ein kostenloses Probetraining an.
            </p>
            <Link
              href="/probetraining"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B6B] text-white font-heading font-semibold rounded-md hover:bg-[#e85555] transition-colors"
            >
              Kostenloses Probetraining sichern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
