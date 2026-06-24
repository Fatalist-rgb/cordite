"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

const DURATION = 7000;

type Slide = {
  bg: string;
  badge: string;
  gold?: boolean;
  title: string;
  body: string;
  ctas: { label: string; href: string; variant: "primary" | "secondary" | "gold" }[];
};

const SLIDES: Slide[] = [
  {
    bg: "/images/hero-decapping.jpg",
    badge: "New / Made in the USA",
    gold: true,
    title: "Auto-Align Decapping Die",
    body:
      "Self-centering from .32 ACP to .338 Lapua. The floating shuttle keeps the pin true to the flash hole, and the hardened tool-steel tips run for tens of thousands of rounds.",
    ctas: [
      { label: "Shop the Die", href: "#featured", variant: "gold" },
      { label: "Watch the Demo", href: "#presses", variant: "secondary" },
    ],
  },
  {
    bg: "/images/hero-start.jpg",
    badge: "New to Reloading?",
    title: "Start Here. We'll Walk You Through It.",
    body:
      "Not sure where to begin? Our press bundles arrive with everything you need to load your first few thousand rounds - and a crew on call when the questions start.",
    ctas: [{ label: "Shop Starter Kits", href: "#presses", variant: "primary" }],
  },
  {
    bg: "/images/hero-primer.jpg",
    badge: "Just Launched",
    gold: true,
    title: "Rapid Primer Filler",
    body:
      "Load pickup tubes without the fuss. One tool handles large or small primers with a quick changeover - tubes topped off in seconds, so your time stays at the press.",
    ctas: [
      { label: "See It", href: "#featured", variant: "gold" },
      { label: "All New Gear", href: "#featured", variant: "secondary" },
    ],
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  const prog = useRef<HTMLDivElement>(null);

  const go = (n: number) => setI((n + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const p = prog.current;
    if (p) {
      p.classList.remove("running");
      void p.offsetWidth;
      p.classList.add("running");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setI((c) => (c + 1) % SLIDES.length), DURATION);
    return () => window.clearTimeout(timer.current);
  }, [i]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured">
      {SLIDES.map((s, idx) => (
        <div className={`hero-slide${idx === i ? " active" : ""}`} key={idx} aria-hidden={idx !== i}>
          <div className="hero-bg">
            <img src={s.bg} alt="" loading={idx === 0 ? "eager" : "lazy"} />
          </div>
          <div className="hero-slide-inner">
            <div className="hero-content">
              <span className={`hero-badge${s.gold ? " gold" : ""}`}>{s.badge}</span>
              <h1>{s.title}</h1>
              <p>{s.body}</p>
              <div className="hero-ctas">
                {s.ctas.map((c) => (
                  <a key={c.label} href={c.href} className={`btn btn-${c.variant}`}>{c.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(i - 1)}><ArrowLeft /></button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={() => go(i + 1)}><ArrowRight /></button>

      <div className="hero-dots" role="tablist">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`dot${idx === i ? " active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={idx === i}
            role="tab"
            onClick={() => go(idx)}
          />
        ))}
      </div>

      <div className="hero-progress" ref={prog} />
    </section>
  );
}
