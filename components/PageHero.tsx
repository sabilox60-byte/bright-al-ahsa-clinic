import Portrait from "./Portrait";
import ChapterMark from "./ChapterMark";
import Image from "next/image";
import { type PortraitVariant } from "@/lib/clinic-config";

interface PageHeroProps {
  roman: string;
  eyebrow: string;
  title: string;
  titleEm: string;
  sub: string;
  variant?: PortraitVariant;
  /** Optional cinematic banner (21:8). When set, replaces the Portrait side panel. */
  image?: string;
  /** CSS object-position for fine-tuning crop (default: "center"). */
  imagePosition?: string;
}

export default function PageHero({
  roman,
  eyebrow,
  title,
  titleEm,
  sub,
  variant = "terracotta",
  image,
  imagePosition = "center",
}: PageHeroProps) {
  if (image) {
    return (
      <section
        style={{
          background: "#f6f5f4",
          borderBottom: "1px solid #ece5d4",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Cinematic 21:8 banner */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "21 / 8",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: imagePosition }}
          />
          {/* Soft top + bottom gradient — keeps subject crisp, eases transition to text */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,31,46,0.12) 0%, rgba(10,31,46,0) 22%, rgba(10,31,46,0) 70%, rgba(246,245,244,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Title block — sits below banner */}
        <div className="container-page" style={{ padding: "56px 0 64px" }}>
          <ChapterMark roman={roman} title={eyebrow} />
          <h1
            className="h-display"
            style={{ marginTop: 20, fontSize: "clamp(40px, 5.6vw, 68px)" }}
          >
            {title}
            <br />
            <em style={{ fontStyle: "italic", color: "#b29362" }}>{titleEm}</em>
          </h1>
          <p
            className="font-prose italic"
            style={{
              fontSize: 19,
              color: "#2a3f4f",
              marginTop: 20,
              maxWidth: 720,
              lineHeight: 1.55,
            }}
          >
            {sub}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "64px 0 56px",
        background: "#f6f5f4",
        borderBottom: "1px solid #ece5d4",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="container-page grid gap-10 items-end page-hero-grid"
        style={{ gridTemplateColumns: "1.4fr 0.6fr" }}
      >
        <div>
          <ChapterMark roman={roman} title={eyebrow} />
          <h1
            className="h-display"
            style={{ marginTop: 20, fontSize: "clamp(40px, 5.6vw, 68px)" }}
          >
            {title}
            <br />
            <em style={{ fontStyle: "italic", color: "#b29362" }}>{titleEm}</em>
          </h1>
          <p
            className="font-prose italic"
            style={{
              fontSize: 19,
              color: "#2a3f4f",
              marginTop: 20,
              maxWidth: 580,
              lineHeight: 1.55,
            }}
          >
            {sub}
          </p>
        </div>
        <Portrait
          variant={variant}
          className="page-hero-portrait"
          style={{ width: 220, height: 220, borderRadius: 24, marginLeft: "auto" }}
          rounded={24}
        />
      </div>
    </section>
  );
}
