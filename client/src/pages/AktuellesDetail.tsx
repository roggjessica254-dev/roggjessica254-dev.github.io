import { Link, useParams } from "wouter";
import { Calendar, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn, MediaPlaceholder } from "@/components/SectionComponents";
import SEOHead from "@/components/SEOHead";
import { aktuellesPosts, youtubeId } from "@/lib/content";
import { Youtube } from "lucide-react";

export default function AktuellesDetail() {
  const params = useParams<{ id: string }>();
  const post = aktuellesPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-gray-900 mb-4">Beitrag nicht gefunden</h1>
          <Link href="/aktuelles" className="text-tkd-cyan hover:underline">Zurück zur Übersicht</Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${post.title} – Jessi's Taekwondoschule`}
        description={post.previewText}
      />

      {/* Hero Bild */}
      <section className="relative pt-20 lg:pt-24">
        <div className="relative h-72 lg:h-[28rem] overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className={`w-full h-full ${post.imageFit === "contain" ? "object-contain bg-[#eff6f6]" : "object-cover"}`}
              style={{ objectPosition: post.imagePosition ?? 'center 30%' }}
            />
          ) : (
            <MediaPlaceholder label="Beitragsbild folgt" className="w-full h-full" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-tkd-navy/80 via-tkd-navy/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="container">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-tkd-cyan/20 border border-tkd-cyan/40 text-tkd-cyan text-xs font-medium rounded-full">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/10 border border-white/20 text-white text-xs font-medium rounded-full">
                  <MapPin className="w-3 h-3" />
                  {post.location}
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-heading font-black text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: "#F1F7F6" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              {/* Einleitung */}
              <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8 p-6 bg-white rounded-xl border-l-4 border-tkd-cyan shadow-sm">
                {post.previewText}
              </p>

              {/* Haupttext */}
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <div className="prose prose-gray max-w-none">
                  {paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0"
                      dangerouslySetInnerHTML={{
                        __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Bildergalerie */}
              {post.gallery.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Impressionen</h2>
                  <div className={`grid gap-4 ${post.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {post.gallery.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden shadow-md group">
                        <img
                          src={img.src}
                          alt={`${post.title} – Bild ${i + 1}`}
                          loading="lazy"
                          className={`w-full ${img.fit === "contain" ? "object-contain bg-[#eff6f6]" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                          style={{ height: post.gallery.length === 1 && img.fit === "contain" ? "auto" : (post.gallery.length === 1 ? '400px' : '300px'), objectPosition: img.position ?? post.imagePosition ?? 'center top' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* YouTube-Videos (nur Link, kein Laden von YouTube ohne Klick) */}
              {post.videos.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-4">Videos</h2>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {post.videos.map((v, i) => (
                      <a
                        key={i}
                        href={youtubeId(v.url) ? `https://www.youtube.com/watch?v=${youtubeId(v.url)}` : v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:border-tkd-cyan/50 hover:shadow-md transition-all"
                      >
                        <span className="shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                          <Youtube className="w-6 h-6 text-white" />
                        </span>
                        <span className="font-heading font-semibold text-gray-900">{v.title}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Die Videos öffnen sich auf YouTube.</p>
                </div>
              )}

              {/* Abschluss */}
              <div className="bg-tkd-navy rounded-xl p-6 text-center">
                <p className="text-white/80 mb-4">
                  Wir sind stolz auf unsere Sportler und freuen uns auf weitere gemeinsame Erfolge!
                </p>
                <Link
                  href="/probetraining"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B6B] text-white font-heading font-semibold rounded-md hover:bg-[#e85555] transition-colors"
                >
                  Jetzt Probetraining anfragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Zurück-Link */}
      <section className="py-8" style={{ backgroundColor: "#E8F2F0" }}>
        <div className="container">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-tkd-cyan transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>
        </div>
      </section>
    </div>
  );
}
