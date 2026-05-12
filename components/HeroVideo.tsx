"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — written as raw HTML to guarantee the `muted`
 * attribute is in the DOM at parse time.
 *
 * THE BUG WE'RE FIXING: React's <video muted /> renders the muted state
 * as a JS property on the element, not always as an HTML attribute in the
 * parsed DOM. iOS Safari checks the attribute at HTML parse time to
 * decide whether to allow autoplay — if the attribute isn't there at
 * parse time, Safari decides "this video has audio, autoplay denied"
 * BEFORE React hydrates or our useEffect runs. No amount of JS .play()
 * can recover from that initial deny.
 *
 * By using dangerouslySetInnerHTML, the <video> element is parsed by
 * the browser EXACTLY as written — autoplay + muted + playsinline are
 * all literal HTML attributes, satisfying Safari's parse-time check.
 *
 * Source: https://medium.com/@BoltAssaults/autoplay-muted-html5-video-safari-ios-10-in-react-673ae50ba1f5
 */
export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = containerRef.current?.querySelector("video") as HTMLVideoElement | null;
    if (!v) return;

    // Belt-and-braces: also set properties (some Safari edges only check these)
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !v.paused) return;
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    };

    tryPlay();
    const retryTimer = setInterval(tryPlay, 250);
    const stopRetry = setTimeout(() => clearInterval(retryTimer), 4000);

    const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"];
    events.forEach((e) => v.addEventListener(e, tryPlay));

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
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{
        __html: `<video
          class="hero-video"
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
        ></video>`,
      }}
    />
  );
}
