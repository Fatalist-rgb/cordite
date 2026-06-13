"use client";
import { useEffect } from "react";

/* Drives the .reveal scroll-in animations. Adds `.js` so content is only
   hidden when JS is active (no-JS / SEO see everything). Uses IntersectionObserver
   plus a getBoundingClientRect + interval fallback, because some embedded
   renderers never fire IO or throttle it heavily. */
export default function ScrollFx() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right")
    );
    const vh = () => window.innerHeight || document.documentElement.clientHeight;
    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < vh() * 0.92 && r.bottom > 0;
    };
    const show = (el: HTMLElement) => el.classList.add("in-view");

    // Reveal whatever is already on-screen synchronously (no above-the-fold flash).
    els.forEach((el) => { if (inView(el)) show(el); });

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { show(e.target as HTMLElement); io!.unobserve(e.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => { if (!el.classList.contains("in-view")) io!.observe(el); });
    }

    const poll = window.setInterval(() => {
      let remaining = false;
      els.forEach((el) => {
        if (el.classList.contains("in-view")) return;
        if (inView(el)) show(el); else remaining = true;
      });
      if (!remaining) window.clearInterval(poll);
    }, 250);

    return () => { io?.disconnect(); window.clearInterval(poll); };
  }, []);
  return null;
}
