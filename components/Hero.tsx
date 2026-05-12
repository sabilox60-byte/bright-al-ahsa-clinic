import MaaroofRibbon from "./MaaroofRibbon";
import SisterShare from "./SisterShare";
import ScrollIndicator from "./ScrollIndicator";
import { clinicConfig } from "@/lib/clinic-config";

function StatMark({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div
        className="font-serif"
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: "#0a1f2e",
          lineHeight: 1.1,
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#7f8487",
          marginTop: 6,
          letterSpacing: "0.3px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative hero-section"
      style={{
        minHeight: "calc(100vh - 80px)",
        overflow: "hidden",
        background: "#f6f5f4",
      }}
    >
      {/* ── Full-width background video (autoplay + mute + loop) ─────────── */}
      {/* Drop bright-hero.mp4 into /public/hero/ to activate. */}
      {/* Poster image shows while loading, freezes for prefers-reduced-motion. */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero/bright-hero-poster.jpg"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center right",
          zIndex: 0,
        }}
      >
        <source src="/hero/bright-hero.mp4" type="video/mp4" />
        <source src="/hero/bright-hero.webm" type="video/webm" />
      </video>

      {/* Overlay + twilight glows removed — video is the visual hero now.
          Text readability is handled via .hero-textreadable text-shadow below. */}

      <ScrollIndicator locale="en" />

      {/* ── Main content (text + CTAs + stats) — overlaid on left 50% ──── */}
      <div
        className="container-page relative hero-content"
        style={{
          zIndex: 3,
          paddingTop: 72,
          paddingBottom: 96,
        }}
      >
        <div className="fade-up hero-textreadable" style={{ maxWidth: 620 }}>
          <div className="overline" style={{ color: "#b29362", marginBottom: 18 }}>
            {clinicConfig.hero.eyebrow.en}
          </div>
          <h1 className="h-display hero-line-rise" style={{ lineHeight: 1.12, paddingBottom: 8, color: "#0a1f2e" }}>
            <span>{clinicConfig.hero.headlinePartA.en}</span>
            <br />
            <em
              className="hero-em-underline"
              style={{
                fontStyle: "italic",
                color: "#0a1f2e",
                paddingBottom: 4,
              }}
            >
              {clinicConfig.hero.headlineEm.en}
            </em>
          </h1>
          <p
            className="font-prose italic hero-lead-italic"
            style={{
              fontSize: 22,
              lineHeight: 1.5,
              color: "#0a1f2e",
              marginTop: 48,
              maxWidth: 540,
            }}
          >
            {clinicConfig.hero.leadItalic.en}
          </p>
          <p
            className="font-prose hero-lead"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "#0a1f2e",
              marginTop: 18,
              marginBottom: 32,
              maxWidth: 540,
            }}
          >
            {clinicConfig.hero.lead.en}
          </p>
          <div className="flex gap-3 flex-wrap items-center">
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {clinicConfig.hero.primaryCta.en}
            </a>
            <a href="/services" className="btn-ghost hero-cta-secondary">
              {clinicConfig.hero.secondaryCta.en}
            </a>
            <SisterShare locale="en" />
          </div>
          <div style={{ marginTop: 22 }}>
            <MaaroofRibbon locale="en" />
          </div>
          <div className="mt-12 flex gap-9 items-center flex-wrap hero-stats">
            {clinicConfig.hero.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-9">
                {i > 0 && (
                  <span
                    style={{ width: 1, height: 40, background: "#ece5d4" }}
                    aria-hidden
                  />
                )}
                <StatMark num={s.value.en} label={s.label.en} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating Est. badge — top-right of section (over the video) ──── */}
      <div
        className="hero-est-badge"
        style={{
          position: "absolute",
          top: 120,
          right: "5%",
          background: "#0a1f2e",
          color: "#ffffff",
          borderRadius: 999,
          width: 92,
          height: 92,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "0 0 0 4px rgba(246,245,244,0.6), 0 12px 32px rgba(10,31,46,0.25)",
          zIndex: 4,
        }}
      >
        <span
          className="font-prose italic"
          style={{ fontSize: 11, color: "#b29362", letterSpacing: "0.06em" }}
        >
          est.
        </span>
        <span className="font-serif" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1 }}>
          {clinicConfig.brand.established}
        </span>
      </div>

      {/* ── Floating pull-quote card — bottom-right of section ───────────── */}
      <div
        className="hero-quote-card"
        style={{
          position: "absolute",
          bottom: 96,
          right: "5%",
          maxWidth: 300,
          background: "#ffffff",
          borderRadius: 14,
          padding: "18px 22px",
          boxShadow: "0 0 0 1px rgba(236,229,212,0.7), 0 12px 32px rgba(10,31,46,0.12)",
          zIndex: 4,
        }}
      >
        <div
          className="font-prose italic"
          style={{ color: "#0a1f2e", fontSize: 16, lineHeight: 1.45 }}
        >
          {clinicConfig.hero.pullQuote.en}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#7f8487",
            marginTop: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {clinicConfig.hero.pullQuoteAttribution.en}
        </div>
      </div>
    </section>
  );
}
