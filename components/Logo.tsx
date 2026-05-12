import Link from "next/link";
import { clinicConfig } from "@/lib/clinic-config";

export default function Logo({ dark = false, size = 22 }: { dark?: boolean; size?: number }) {
  const color = dark ? "#ffffff" : "#0a1f2e";
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 no-underline">
      <svg width={size + 4} height={size + 4} viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M6 16 C 6 10, 11 5, 16 5 C 23 5, 27 12, 22 18 C 18 23, 10 22, 8 16 Z"
          stroke={color}
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M14 19 C 18 16, 23 17, 25 22 C 26 26, 22 28, 18 26 C 15 25, 13 22, 14 19 Z"
          stroke="#b29362"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
      <span
        className="font-display"
        style={{
          fontSize: size + 2,
          fontWeight: 400,
          color,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {clinicConfig.brand.name.en}
        <span style={{ color: "#b29362", letterSpacing: 0, marginLeft: 4 }}>·</span>
      </span>
    </Link>
  );
}
