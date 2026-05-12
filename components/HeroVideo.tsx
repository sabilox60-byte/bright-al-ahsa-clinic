"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — simplified to single H.264 source for maximum
 * iOS Safari autoplay reliability.
 *
 * Why the simplification (after 3 failed attempts with multi-source):
 *  - Multiple <source> children with codec hints (av01, hvc1, avc1) can
 *    confuse iOS Safari into picking a source it cannot reliably decode,
 *    and Safari does NOT always fall back to the next source on decode
 *    failure — it just stalls.
 *  - Single H.264 .mp4 via direct `src` attribute is the pattern Apple,
 *    Tesla, and most premium sites use because it has the strongest
 *    autoplay-on-iOS track record.
 *
 * H.264 file is 7.5 MB (vs 3.9 MB H.265) — extra 3.6 MB is the price for
 * guaranteed autoplay. Vercel CDN caches it 30 days so subsequent visits
 * are instant.
 *
 * JS retry loop kept as defense against slow buffering / LPM / strict
 * Safari "Auto-Play" setting.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Properties (not just attributes) — Safari edge cases need these set in JS
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("x-webkit-airplay", "deny");

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !v.paused) return;
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };

    // Immediate + repeated attempts during first 4 seconds
    tryPlay();
    const retryTimer = setInterval(tryPlay, 250);
    const stopRetry = setTimeout(() => clearInterval(retryTimer), 4000);

    // Hook every readiness event
    const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"];
    events.forEach((e) => v.addEventListener(e, tryPlay));

    // Final fallback: first interaction unblocks
    const onGesture = () => {
      tryPlay();
      ["touchstart", "click", "scroll"].forEach((e) =>
        document.removeEventListener(e, onGesture)
      );
    };
    document.addEventListener("touchstart", onGesture, { passive: true });
    document.addEventListener("click", onGesture);
    document.addEventListener("scroll", onGesture, { passive: true });

    return () => {
      cancelled = true;
      clearInterval(retryTimer);
      clearTimeout(stopRetry);
      events.forEach((e) => v.removeEventListener(e, tryPlay));
      ["touchstart", "click", "scroll"].forEach((e) =>
        document.removeEventListener(e, onGesture)
      );
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src="/hero/bright-hero-h264.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
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
    />
  );
}
