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
          color: "#6a7785",
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
        background: "#f8f6f0",
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

      {/* ── Readability overlay — gradient ensures text stays legible ───── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(248,246,240,0.96) 0%, rgba(248,246,240,0.88) 35%, rgba(248,246,240,0.55) 60%, rgba(248,246,240,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Bright building's night-purple ambient glow ──────────────────── */}
      <span className="hero-twilight-glow" aria-hidden style={{ top: "12%", left: "-15%", zIndex: 2 }} />
      <span
        className="hero-twilight-glow"
        aria-hidden
        style={{
          top: "55%",
          right: "-12%",
          width: 360,
          height: 360,
          animationDelay: "-3s",
          zIndex: 2,
        }}
      />

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
        <div className="fade-up" style={{ maxWidth: 620 }}>
          <div className="overline" style={{ color: "#b8935a", marginBottom: 18 }}>
            {clinicConfig.hero.eyebrow.en}
          </div>
          <h1 className="h-display hero-line-rise" style={{ lineHeight: 1.12, paddingBottom: 8 }}>
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
              color: "#2a3f4f",
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
              color: "#2a3f4f",
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
                    style={{ width: 1, height: 40, background: "#d4cdb8" }}
                    aria-hidden
                  />
                )}
                <StatMark num={s.value.en} label={s.label.en} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
