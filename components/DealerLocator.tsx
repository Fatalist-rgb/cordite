"use client";
import { useState } from "react";
import { Pin, Search } from "./icons";

type Dealer = {
  id: string; name: string; addr: string; miles: number; phone: string; x: number; y: number; flagship?: boolean;
};

const DEALERS: Dealer[] = [
  { id: "hq", name: "Cordite Showroom", addr: "1450 Forge Works Rd, Scottsdale, AZ", miles: 0, phone: "(800) 555-0148", x: 300, y: 150, flagship: true },
  { id: "canyon", name: "Canyon State Shooting", addr: "220 Pinnacle Pkwy, Phoenix, AZ", miles: 22, phone: "(602) 555-0173", x: 150, y: 178 },
  { id: "desert", name: "High Desert Outfitters", addr: "880 Mesa Ridge Dr, Mesa, AZ", miles: 14, phone: "(480) 555-0119", x: 360, y: 214 },
  { id: "summit", name: "Summit Range Supply", addr: "47 Tempe Mill Ave, Tempe, AZ", miles: 18, phone: "(480) 555-0162", x: 222, y: 246 },
  { id: "frontier", name: "Frontier Arms & Reloading", addr: "12 Old Pueblo Rd, Tucson, AZ", miles: 96, phone: "(520) 555-0188", x: 318, y: 348 },
];

export default function DealerLocator() {
  const [searched, setSearched] = useState(true);
  const [active, setActive] = useState<string>("hq");
  const [zip, setZip] = useState("");

  return (
    <section className="dealer" id="dealers">
      <div className="container dealer-inner">
        <div className="section-head reveal">
          <span className="eyebrow">Find a Dealer</span>
          <h2>Try One in Person</h2>
          <p>
            Better yet — put your hands on a Cordite before you buy. Drop in your ZIP and we&apos;ll
            point you to the nearest authorized dealer.
          </p>
        </div>

        <div className="dealer-panel reveal" data-d="1">
          <div className="dealer-search">
            <h4>Authorized Dealers</h4>
            <p>Enter a ZIP or city to sort by distance.</p>
            <form className="zip-row" onSubmit={(e) => { e.preventDefault(); setSearched(true); }}>
              <input
                inputMode="numeric"
                placeholder="ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                aria-label="ZIP code"
              />
              <button type="submit" className="btn btn-primary btn-sm" aria-label="Search dealers">
                <Search />
              </button>
            </form>

            <div className="dealer-list">
              {searched &&
                DEALERS.map((d) => (
                  <div
                    key={d.id}
                    className={`dealer-item${active === d.id ? " active" : ""}`}
                    onMouseEnter={() => setActive(d.id)}
                    onClick={() => setActive(d.id)}
                  >
                    <span className="miles">{d.miles === 0 ? "Flagship" : `${d.miles} mi`}</span>
                    <h6>{d.name}</h6>
                    <p>{d.addr}<br />{d.phone}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="dealer-map" role="img" aria-label="Map of nearby dealers">
            <svg viewBox="0 0 520 420" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#eef1f3" /><stop offset="1" stopColor="#e2e7ea" />
                </linearGradient>
              </defs>
              <rect width="520" height="420" fill="url(#land)" />
              {/* abstract water + parks */}
              <path d="M0 300 q120 -40 250 10 t270 -6 V420 H0 Z" fill="#dbe6ec" />
              <circle cx="90" cy="90" r="46" fill="#e6ece2" />
              <rect x="380" y="60" width="90" height="70" rx="12" fill="#e6ece2" />
              {/* roads */}
              <g stroke="#cdd5da" strokeWidth="6" fill="none" strokeLinecap="round">
                <path d="M-10 150 H530" /><path d="M-10 250 H530" />
                <path d="M180 -10 V430" /><path d="M340 -10 V430" />
                <path d="M-10 60 L530 360" opacity="0.6" />
              </g>
              <g stroke="#d7dee2" strokeWidth="3" fill="none">
                <path d="M-10 200 H530" /><path d="M260 -10 V430" /><path d="M90 -10 V430" />
              </g>
              {/* pins */}
              {DEALERS.map((d) => (
                <g
                  key={d.id}
                  className={`map-pin${active === d.id ? " active" : ""}`}
                  transform={`translate(${d.x},${d.y})`}
                  onMouseEnter={() => setActive(d.id)}
                  onClick={() => setActive(d.id)}
                >
                  <circle className="pulse" cx="0" cy="0" r="8" fill={d.flagship ? "#c8920a" : "#085bb0"} opacity="0" />
                  <path
                    d="M0 6 C-9 -6 -14 -12 -14 -20 A14 14 0 1 1 14 -20 C14 -12 9 -6 0 6 Z"
                    fill={d.flagship ? "#c8920a" : "#085bb0"}
                    stroke="#fff"
                    strokeWidth="2.5"
                  />
                  <circle cx="0" cy="-20" r="5" fill="#fff" />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
