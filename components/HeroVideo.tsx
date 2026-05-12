"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — responsive (art-directed).
 *
 * Renders TWO videos:
 *   - Mobile portrait (1080×1500) → shown on screens ≤ 767px
 *   - Desktop landscape (1920×1080) → shown on screens ≥ 768px
 *
 * Why this pattern (instead of one cropped video):
 *   - Mobile portrait videos have perfect framing on iPhone (no crop loss)
 *   - Decision-makers open on iPhone first — quality there is critical
 *   - Premium sites (Apple, Tesla, etc.) art-direct hero media per device
 *
 * Why dangerouslySetInnerHTML:
 *   React's <video muted /> renders muted as a JS property but not always
 *   as an HTML attribute at parse time. iOS Safari checks the literal
 *   HTML attribute at parse time to decide autoplay eligibility — if
 *   the attribute isn't there at parse, Safari denies autoplay forever.
 *   Writing the raw HTML guarantees the attribute is present at parse.
 *
 * Why preload="none" on the hidden one:
 *   Browser will still parse both <video> tags. Setting preload="none"
 *   on both prevents wasted bandwidth before our JS picks the active
 *   one and promotes it to preload="auto" + .load() + .play().
 */
export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const desktopVideo = root.querySelector<HTMLVideoElement>(".hero-video-desktop");
    const mobileVideo = root.querySelector<HTMLVideoElement>(".hero-video-mobile");

    const activate = (active: HTMLVideoElement, inactive: HTMLVideoElement) => {
      // Belt-and-braces property assignment for Safari edge cases
      active.muted = true;
      active.defaultMuted = true;
      active.playsInline = true;
      active.preload = "auto";

      // Make sure the inactive one doesn't waste bandwidth
      inactive.preload = "none";
      inactive.pause();
      // Strip src to fully release decoder buffer on iOS
      inactive.removeAttribute("src");
      inactive.load();

      // Reload the active one with preload=auto, then play
      active.load();

      let cancelled = false;
      const tryPlay = () => {
        if (cancelled || !active.paused) return;
        const p = active.play();
        if (p !== undefined) p.catch(() => {});
      };

      tryPlay();
      const retryTimer = setInterval(tryPlay, 250);
      const stopRetry = setTimeout(() => clearInterval(retryTimer), 4000);

      const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"];
      events.forEach((e) => active.addEventListener(e, tryPlay));

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
        events.forEach((e) => active.removeEventListener(e, tryPlay));
        ["touchstart", "click", "scroll"].forEach((e) =>
          document.removeEventListener(e, onGesture)
        );
      };
    };

    if (!desktopVideo || !mobileVideo) return;
    let cleanup: (() => void) | undefined;

    const applyForCurrent = () => {
      cleanup?.();
      if (mobileQuery.matches) {
        cleanup = activate(mobileVideo, desktopVideo);
      } else {
        cleanup = activate(desktopVideo, mobileVideo);
      }
    };

    applyForCurrent();
    mobileQuery.addEventListener("change", applyForCurrent);

    return () => {
      cleanup?.();
      mobileQuery.removeEventListener("change", applyForCurrent);
    };
  }, []);

  // Render both videos as raw HTML so iOS Safari sees muted+autoplay+
  // playsinline as parse-time attributes (React property rendering is
  // unreliable for this iOS Safari check).
  const html = `
    <video
      class="hero-video hero-video-desktop"
      src="/hero/bright-hero-h264.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/hero/bright-hero-poster.jpg"
      aria-hidden="true"
      webkit-playsinline="true"
      x-webkit-airplay="deny"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;"
    ></video>
    <video
      class="hero-video hero-video-mobile"
      src="/hero/bright-hero-mobile.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/hero/bright-hero-mobile-poster.jpg"
      aria-hidden="true"
      webkit-playsinline="true"
      x-webkit-airplay="deny"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center center;z-index:0;"
    ></video>
  `;

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
