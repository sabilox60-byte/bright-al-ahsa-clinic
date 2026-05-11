import Portrait from "./Portrait";
import { clinicConfig } from "@/lib/clinic-config";

export default function Reviews() {
  const r = clinicConfig.reviews;
  return (
    <section className="section" id="reviews">
      <div className="container-page">
        <div className="text-center" style={{ marginBottom: 40 }}>
          <div className="overline" style={{ color: "#b8935a" }}>
            {r.eyebrow.en}
          </div>
          <p
            className="font-prose italic"
            style={{ fontSize: 20, color: "#2a3f4f", marginTop: 14 }}
          >
            {r.pullQuote.en}
          </p>
        </div>
        <div className="grid gap-8 mobile-stack" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {r.items.map((item, i) => (
            <figure
              key={i}
              className="m-0 flex flex-col gap-6"
              style={{
                padding: 36,
                background: "#fdfbf6",
                borderRadius: 20,
                boxShadow: "0 0 0 1px #d4cdb8",
              }}
            >
              <span
                className="font-prose"
                style={{ fontSize: 72, lineHeight: 0.6, color: "#b8935a" }}
              >
                &ldquo;
              </span>
              <blockquote
                className="font-prose italic m-0"
                style={{
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: "#0a1f2e",
                }}
              >
                {item.quote.en}
              </blockquote>
              <figcaption className="flex items-center gap-3.5 mt-auto">
                <Portrait
                  variant={item.variant}
                  style={{ width: 52, height: 52 }}
                  rounded={999}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0a1f2e" }}>
                    {item.name.en}
                  </div>
                  <div style={{ fontSize: 12, color: "#6a7785", marginTop: 2 }}>
                    {item.role.en}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    color: "#b8935a",
                    letterSpacing: 2,
                    fontSize: 14,
                  }}
                >
                  ★★★★★
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 32 }}>
          <a
            href="/reviews"
            className="tlink"
            style={{
              fontSize: 14,
              color: "#2a3f4f",
              fontWeight: 600,
              letterSpacing: "0.4px",
            }}
          >
            {r.cta.en} →
          </a>
        </div>
      </div>
    </section>
  );
}
