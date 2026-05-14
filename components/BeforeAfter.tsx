import Image from "next/image";
import ChapterMark from "./ChapterMark";
import ScrollReveal from "./ScrollReveal";
import { clinicConfig } from "@/lib/clinic-config";

/**
 * Bright Before/After — real patient photos with written consent.
 *
 * Each case shows two real photos (day 1 vs day 10) anchored with short
 * Arabic captions on the image, followed by long-form Arabic testimonials
 * in letterpress cards. PDPL-aligned: faces shown only when patient has
 * signed written consent + the disclaimer below confirms that.
 */

type Testimonial = {
  patientNumber: string;
  quote: string;
  initials: string;
  location: string;
  treatment: string;
  days: string;
};

const testimonials: Testimonial[] = [
  {
    patientNumber: "№ 014",
    quote:
      "كنت أحسّ بشرتي باهتة وفيها تعب واضح، وحتى ملامحي ما كانت طالعة مرتاحة. كنت مترددة بالبداية، بس لما شفت حالتي بالصور فهمت قد إني كنت محتاجة عناية صحيحة ومناسبة لبشرتي.",
    initials: "م. ع.",
    location: "الخبر",
    treatment: "تجديد البشرة · يوم ١",
    days: "اليوم ١ · الاستشارة",
  },
  {
    patientNumber: "№ 014",
    quote:
      "بعد عشرة أيام فقط، ملامحي رجعت مرتاحة وبشرتي صافية وفيها إشراقة طبيعية. ما توقّعت إنّ التجربة تكون بهالسرعة وبهالجودة، والفريق كان متفهّم وكل خطوة شرحوها لي قبل ما يبدوون.",
    initials: "م. ع.",
    location: "الخبر",
    treatment: "تجديد البشرة · اليوم العاشر",
    days: "اليوم ١٠ · النتيجة",
  },
];

export default function BeforeAfter() {
  const b = clinicConfig.beforeAfter;

  return (
    <section
      className="section"
      id="gallery"
      style={{ background: "#f0ece1", position: "relative", zIndex: 2 }}
    >
      <div className="container-page">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div
            className="grid gap-10 items-end mobile-stack"
            style={{ gridTemplateColumns: "1.1fr 1fr" }}
          >
            <div>
              <ChapterMark roman={b.chapterRoman} title={b.chapterTitle.en} />
              <h2 className="h-xl" style={{ marginTop: 24 }}>
                {b.headlinePartA.en}
                <br />
                <em style={{ fontStyle: "italic", color: "#b29362" }}>
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
                color: "#7f8487",
                maxWidth: 380,
              }}
            >
              Real patient photos, shared with written consent. Saudi privacy
              respected — every visible patient signed a release. Names withheld
              by request.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-state contrast — REAL photos with Arabic captions */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div
            className="grid gap-6 mobile-stack"
            style={{
              gridTemplateColumns: "1fr 1fr",
              marginTop: 56,
              alignItems: "center",
            }}
          >
            {/* BEFORE */}
            <div className="relative" style={{ borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/media/gallery/skin-rejuvenation-before.webp"
                alt="Before — initial consultation"
                width={1400}
                height={1045}
                priority
                style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
              />
              <span
                className="chip"
                style={{ position: "absolute", top: 16, left: 16 }}
              >
                قبل
              </span>
              <div
                dir="rtl"
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  background: "rgba(253, 251, 246, 0.94)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#0a1f2e",
                  textAlign: "right",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    color: "#8f7548",
                    letterSpacing: "0.08em",
                  }}
                >
                  اليوم الأول · الاستشارة
                </span>
                <div
                  style={{
                    marginTop: 4,
                    fontFamily: "var(--font-amiri), serif",
                    fontSize: 15,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  «كنت مترددة بالبداية.»
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div
              className="relative"
              style={{ marginTop: 40, borderRadius: 16, overflow: "hidden" }}
            >
              <Image
                src="/media/gallery/skin-rejuvenation-after.webp"
                alt="After — 10 days follow-up"
                width={1400}
                height={1045}
                priority
                style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
              />
              <span
                className="chip chip-dark"
                style={{ position: "absolute", top: 16, left: 16 }}
              >
                بعد · ١٠ أيام
              </span>
              <div
                dir="rtl"
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  background: "rgba(253, 251, 246, 0.94)",
                  backdropFilter: "blur(4px)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#0a1f2e",
                  textAlign: "right",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 10,
                    color: "#8f7548",
                    letterSpacing: "0.08em",
                  }}
                >
                  اليوم العاشر · النتيجة
                </span>
                <div
                  style={{
                    marginTop: 4,
                    fontFamily: "var(--font-amiri), serif",
                    fontSize: 15,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  «ملامحي طالعة مرتاحة.»
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Letterpress testimonial cards — voice layer, Arabic */}
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
                dir="rtl"
                style={{
                  background: "#ffffff",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow:
                    "0 0 0 1px rgba(178,147,98,0.25), 0 18px 56px rgba(10,31,46,0.08)",
                  padding: 28,
                  textAlign: "right",
                }}
              >
                <header
                  style={{
                    paddingBottom: 14,
                    borderBottom: "1px dotted rgba(178,147,98,0.4)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 18,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      color: "#8f7548",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    ✦ مريضة {t.patientNumber}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: "#7f8487",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.days}
                  </span>
                </header>
                <blockquote
                  className="font-prose italic"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.7,
                    color: "#0a1f2e",
                    margin: 0,
                    position: "relative",
                    fontFamily: "var(--font-amiri), serif",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: -16,
                      right: -8,
                      fontSize: 48,
                      color: "rgba(178,147,98,0.35)",
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
                    borderTop: "1px dotted rgba(178,147,98,0.4)",
                    paddingTop: 14,
                    marginTop: 18,
                  }}
                >
                  <div
                    className="font-serif"
                    style={{
                      fontSize: 14,
                      color: "#0a1f2e",
                      fontWeight: 500,
                    }}
                  >
                    — {t.initials} · {t.location}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#7f8487",
                      marginTop: 4,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t.treatment}
                  </div>
                </footer>
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
              borderTop: "1px dotted rgba(178,147,98,0.45)",
            }}
          >
            <p
              className="font-prose italic"
              style={{
                fontSize: 14,
                color: "#7f8487",
                maxWidth: 540,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              All photos and testimonials shared with written consent. Patient
              initials and case numbers used in place of full names by request —
              Saudi privacy by default. Results vary by person, treatment plan,
              and follow-through.
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
