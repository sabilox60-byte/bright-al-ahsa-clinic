import HeroIllustration from "./HeroIllustration";
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
    <section className="relative" style={{ padding: "72px 0 96px", minHeight: "calc(100vh - 80px)" }}>
      <ScrollIndicator locale="en" />
      <div
        className="container-page grid items-center gap-16 mobile-stack"
        style={{ gridTemplateColumns: "1.1fr 0.9fr" }}
      >
        <div className="fade-up">
          <div className="overline" style={{ color: "#b8935a", marginBottom: 18 }}>
            {clinicConfig.hero.eyebrow.en}
          </div>
          <h1 className="h-display" style={{ lineHeight: 1.12, paddingBottom: 8 }}>
            {clinicConfig.hero.headlinePartA.en}
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "#0a1f2e",
                display: "inline-block",
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
              marginTop: 56,
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
              color: "#6a7785",
              marginTop: 18,
              marginBottom: 36,
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
        <div className="relative flex justify-end hero-illustration">
          <HeroIllustration maxSize={460} />
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: -24,
              background: "#fdfbf6",
              borderRadius: 14,
              padding: "14px 18px",
              boxShadow: "0 0 0 1px #d4cdb8, 0 8px 24px rgba(10,31,46,0.08)",
              fontSize: 13,
              maxWidth: 240,
              zIndex: 3,
            }}
          >
            <div
              className="font-prose italic"
              style={{ color: "#0a1f2e", fontSize: 16, lineHeight: 1.4 }}
            >
              {clinicConfig.hero.pullQuote.en}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#6a7785",
                marginTop: 8,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              {clinicConfig.hero.pullQuoteAttribution.en}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: -12,
              right: -12,
              background: "#0a1f2e",
              color: "#fdfbf6",
              borderRadius: 999,
              width: 84,
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "0 0 0 4px #f8f6f0",
              zIndex: 3,
            }}
          >
            <span
              className="font-prose italic"
              style={{ fontSize: 11, color: "#b8935a" }}
            >
              est.
            </span>
            <span className="font-serif" style={{ fontSize: 24, fontWeight: 600 }}>
              {clinicConfig.brand.established}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
