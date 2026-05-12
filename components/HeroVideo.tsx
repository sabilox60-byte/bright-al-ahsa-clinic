"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video with aggressive iOS Safari autoplay strategy.
 *
 * iOS Safari's autoplay-when-muted requirement is well documented but
 * notoriously flaky in practice. Strategies layered:
 *  1. preload="auto" — Safari needs enough buffered data before play() succeeds
 *  2. muted + playsInline set as properties (not just attributes) in JS
 *  3. webkit-playsinline + x-webkit-airplay attributes (older iOS)
 *  4. Retry play() every 250ms for 4s (covers slow first-load buffering)
 *  5. Trigger play() on every media-loading event (loadedmetadata, canplay,
 *     loadeddata, canplaythrough) — first one to succeed wins
 *  6. Fallback: first scroll/touch/click unblocks
 *
 * NOTE: Low Power Mode on iOS hard-blocks autoplay at the system level.
 * No web-side fix can override it; user must disable LPM in Settings.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Properties (not just attributes) — some Safari versions only check these
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
        p.catch(() => {
          /* swallow — retry loop or user-gesture handler will fire again */
        });
      }
    };

    // 1) Try immediately
    tryPlay();

    // 2) Retry every 250ms for 4 seconds (8 attempts total) — handles cases
    //    where iOS Safari hasn't buffered enough yet to start playback
    const retryTimer = setInterval(tryPlay, 250);
    const stopRetry = setTimeout(() => clearInterval(retryTimer), 4000);

    // 3) Hook into every media-readiness event
    const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"];
    events.forEach((e) => v.addEventListener(e, tryPlay));

    // 4) First user gesture unblocks if all else fails (LPM, Safari setting)
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
    >
      <source src="/hero/bright-hero.mp4#t=0.001" type='video/mp4; codecs="hvc1"' />
      <source src="/hero/bright-hero.webm#t=0.001" type='video/webm; codecs="av01"' />
      <source src="/hero/bright-hero-h264.mp4#t=0.001" type='video/mp4; codecs="avc1.4d4029"' />
    </video>
  );
}
