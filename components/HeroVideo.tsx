"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the hero background video with autoplay safety net.
 *
 * iOS Safari and some Android browsers won't honor the `autoplay` attribute
 * alone in every situation. This component:
 *  1. Programmatically calls play() on mount.
 *  2. Retries play() on the first user interaction if autoplay was denied.
 *  3. Catches and swallows AbortError silently (page navigated away mid-load).
 *
 * The CSS file (.hero-video) handles object-fit, opacity, and mobile crop.
 */
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // muted + playsInline are required for autoplay on iOS — set as
    // properties too (some Safari versions only check the property, not attr).
    v.muted = true;
    v.playsInline = true;

    const tryPlay = () => {
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {
          /* autoplay denied (likely Low Power Mode). Wait for user gesture. */
        });
      }
    };

    tryPlay();

    // If autoplay was blocked, the first user gesture unblocks it.
    const onGesture = () => {
      tryPlay();
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
    };
    document.addEventListener("touchstart", onGesture, { passive: true, once: true });
    document.addEventListener("click", onGesture, { once: true });

    return () => {
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
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
      {/* H.265 MP4 first for Safari priority. Smaller than AV1 in our case. */}
      <source src="/hero/bright-hero.mp4#t=0.001" type='video/mp4; codecs="hvc1"' />
      <source src="/hero/bright-hero.webm#t=0.001" type='video/webm; codecs="av01"' />
      <source src="/hero/bright-hero-h264.mp4#t=0.001" type='video/mp4; codecs="avc1.4d4029"' />
    </video>
  );
}
