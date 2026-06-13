"use client";
import { useState } from "react";
import { BRAND, PHONE, FREE_SHIP } from "../app/site";
import {
  Search, User, Heart, Cart, Menu, Close, Chevron, ArrowRight,
} from "./icons";

const dead = (e: React.MouseEvent) => e.preventDefault();

type Mega = { title: string; links: string[] }[];

const NAV: {
  label: string; href: string; deal?: boolean; mega?: Mega; wide?: boolean;
}[] = [
  {
    label: "Learn", href: "#", wide: true,
    mega: [
      { title: "Reloading Basics", links: ["Intro to Reloading", "Reloading Articles", "Glossary", "Press Setup Guides", "Bench & Mounts"] },
      { title: "Video Library", links: ["CR-5 Walkthrough", "CR-8 Walkthrough", "CR-12 Walkthrough", "Maintenance Clips", "Troubleshooting"] },
    ],
  },
  { label: "Deals", href: "#featured", deal: true },
  {
    label: "Presses", href: "#presses",
    mega: [
      { title: "Progressives", links: ["CR-5", "CR-8", "CR-12", "CX-10", "SD-3"] },
      { title: "Case Processing", links: ["CP-20", "Motor Drives", ".50 BMG", "Bench Accessories"] },
      { title: "By Goal", links: ["Bundle & Save Kits", "Conversion Kits", "Upgrades", "Replacement Parts"] },
    ],
  },
  { label: "Kits", href: "#presses" },
  { label: "Upgrades", href: "#featured" },
  { label: "Parts", href: "#categories" },
  {
    label: "Components", href: "#categories",
    mega: [
      { title: "Projectiles", links: ["Pistol Bullets", "Rifle Bullets", "Match Grade", "Plated & Coated"] },
      { title: "Brass & Primers", links: ["Pistol Brass", "Rifle Brass", "Large Primers", "Small Primers"] },
      { title: "Powder", links: ["Pistol Powder", "Rifle Powder", "Powder Measures", "Scales"] },
    ],
  },
  { label: "Gear", href: "#categories" },
  { label: "Catalog", href: "#" },
  {
    label: "More", href: "#", wide: true,
    mega: [
      { title: "Company", links: ["Support & Videos", "Dealer Locator", "Shipping & Policies", "Sponsorships", "Contact Us"] },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="promo-bar">
        <div className="promo-inner">
          <span><strong>Free shipping</strong> on every order over ${FREE_SHIP} · limited time</span>
          <div className="promo-links">
            <a href="#" onClick={dead}>Sign In</a>
            <a href="#" onClick={dead}>Create Account</a>
            <a href="#footer">Contact</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="header-row">
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu />
          </button>

          <a href="#top" className="brand" aria-label={`${BRAND} home`}>
            <span className="wordmark">Cor<b>dite</b></span>
          </a>

          <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Search presses, dies, components…" aria-label="Search" />
            <button type="submit" aria-label="Search"><Search /></button>
          </form>

          <div className="header-actions">
            <a href="#" onClick={dead} className="icon-btn"><User /><span className="label-hide">Account</span></a>
            <a href="#" onClick={dead} className="icon-btn"><Heart /><span className="label-hide">Saved</span></a>
            <a href="#" onClick={dead} className="icon-btn">
              <Cart /><span className="count">0</span><span className="label-hide">Cart</span>
            </a>
          </div>
        </div>

        <nav className="nav-bar" aria-label="Primary">
          <div className="nav-inner">
            {NAV.map((item) => (
              <div className="nav-item" key={item.label}>
                <a href={item.href} className={`nav-link${item.deal ? " is-deal" : ""}`} onClick={item.href === "#" ? dead : undefined}>
                  {item.label}
                  {item.mega && <Chevron className="chev" />}
                </a>
                {item.mega && (
                  <div className={`mega${item.wide ? " mega-wide" : ""}`}>
                    {item.mega.map((col) => (
                      <div className="mega-col" key={col.title}>
                        <h5>{col.title}</h5>
                        {col.links.map((l) => (
                          <a href="#" onClick={dead} key={l}>{l}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`scrim${open ? " open" : ""}`} onClick={close} />
      <aside className={`mobile-nav${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-head">
          <span className="wordmark">Cor<b>dite</b></span>
          <button className="close-btn" aria-label="Close menu" onClick={close}><Close /></button>
        </div>
        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`m-link${item.deal ? " is-deal" : ""}`}
            onClick={(e) => { if (item.href === "#") dead(e); close(); }}
          >
            {item.label}
            <ArrowRight style={{ width: 18, height: 18 }} />
          </a>
        ))}
        <a className="m-link" href="#footer" onClick={close}>Support<ArrowRight style={{ width: 18, height: 18 }} /></a>
      </aside>
    </>
  );
}
