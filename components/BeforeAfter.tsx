import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import ScrollReveal from "./ScrollReveal";
import { clinicConfig } from "@/lib/clinic-config";

/**
 * Compliant Before/After — no patient faces (PDPL + SFDA constraint).
 *
 * Format: anonymous letterpress testimonial paired with ambient mood imagery.
 * Layered psychology:
 *  · Time anchoring ("Day 1 / Day 28 / Day 90") = scientific feel
 *  · Patient № = social proof with privacy
 *  · Family-trust triggers ("called my sister", "my mother") = Khaleeji-specific
 *  · Initials only = anonymity preserved, identity hinted
 */

const testimonials = [
  {
    patientNumber: "№ 247",
    quote:
      "I waited three months before booking. I waited 24 hours after the first session to call my sister.",
    initials: "A.M.",
    location: "Riyadh",
    treatment: "Three Hydrafacial sessions",
    days: "Day 1 · Day 28 · Day 90",
    portraitVariant: "sand" as const,
  },
  {
    patientNumber: "№ 392",
    quote:
      "My mother came with me to the first visit. By the third, she had booked her own.",
    initials: "R.K.",
    location: "Riyadh",
    treatment: "Dermal filler · two visits",
    days: "Day 1 · Day 14",
    portraitVariant: "terracotta" as const,
  },
];

export default function BeforeAfter() {
  const b = clinicConfig.beforeAfter;

  return (
    <section
      className="section"
      id="gallery"
      style={{ background: "#ede5d3", position: "relative", zIndex: 2 }}
    >
      <div className="container-page">
        <ScrollReveal variant="fade-up">
          <div className="grid gap-10 items-end mobile-stack" style={{ gridTemplateColumns: "1.1fr 1fr" }}>
            <div>
              <ChapterMark roman={b.chapterRoman} title={b.chapterTitle.en} />
              <h2 className="h-xl" style={{ marginTop: 24 }}>
                {b.headlinePartA.en}
                <br />
                <em style={{ fontStyle: "italic", color: "#b8935a" }}>
                  {b.headlineEm.en}
                </em>
              </h2>
              <p
                className="font-prose"
                style={{
                  fontSize: 18,
                  color: "#2a3f4f",
                  marginTop: 18,
                  maxWidth: 460,
                }}
              >
                {b.description.en}
              </p>
            </div>
            <p
              className="font-prose italic"
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "#6a7785",
                maxWidth: 380,
              }}
            >
              No filters. No patient photographs. We publish words and time —
              what the work actually felt like, marked in days.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards — letterpress format */}
        <div
          className="grid gap-8 mobile-stack"
          style={{
            gridTemplateColumns: "1fr 1fr",
            marginTop: 56,
          }}
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 100}>
              <article
                style={{
                  background: "#fdfbf6",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow:
                    "0 0 0 1px rgba(184,147,90,0.25), 0 18px 56px rgba(10,31,46,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header strip — letterpress feel */}
                <header
                  style={{
                    padding: "16px 24px",
                    borderBottom: "1px dotted rgba(184,147,90,0.4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: "#9a7847",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✦ Patient {t.patientNumber}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: "#6a7785",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.days}
                  </span>
                </header>

                {/* Body — mood image + quote */}
                <div
                  className="ba-card-inner"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.4fr",
                    minHeight: 280,
                  }}
                >
                  <Portrait
                    variant={t.portraitVariant}
                    style={{ width: "100%", height: "100%", minHeight: 280 }}
                    rounded={0}
                  />
                  <div
                    style={{
                      padding: 28,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 18,
                    }}
                  >
                    <blockquote
                      className="font-prose italic"
                      style={{
                        fontSize: 19,
                        lineHeight: 1.5,
                        color: "#0a1f2e",
                        margin: 0,
                        position: "relative",
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          top: -14,
                          left: -8,
                          fontSize: 48,
                          color: "rgba(184,147,90,0.35)",
                          fontFamily: "var(--font-source-serif), serif",
                          lineHeight: 1,
                        }}
                      >
                        &ldquo;
                      </span>
                      <span style={{ position: "relative" }}>{t.quote}</span>
                    </blockquote>
                    <footer
                      style={{
                        borderTop: "1px dotted rgba(184,147,90,0.4)",
                        paddingTop: 14,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: 12,
                      }}
                    >
                      <div>
                        <div
                          className="font-serif"
                          style={{
                            fontSize: 14,
                            color: "#0a1f2e",
                            fontWeight: 500,
                          }}
                        >
                          — {t.initials}, {t.location}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#6a7785",
                            marginTop: 4,
                            letterSpacing: "0.04em",
                          }}
                        >
                          {t.treatment}
                        </div>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA + disclaimer */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div
            style={{
              marginTop: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 32,
              borderTop: "1px dotted rgba(184,147,90,0.45)",
            }}
          >
            <p
              className="font-prose italic"
              style={{
                fontSize: 14,
                color: "#6a7785",
                maxWidth: 480,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              All testimonials shared with written consent. Names withheld at
              patient request — Saudi privacy by default. Results vary by
              person, treatment, and follow-through.
            </p>
            <a
              href="/gallery"
              className="btn-dark"
              style={{ display: "inline-flex" }}
            >
              {b.cta.en} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
