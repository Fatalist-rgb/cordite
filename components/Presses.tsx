import { PHONE, PHONE_HREF, SHOWROOM } from "../app/site";
import { ArrowRight, Compare } from "./icons";
import DeadLink from "./DeadLink";

const PRESSES = [
  { name: "CR-5", img: "/images/press-rl550.jpg", tag: "The versatile progressive. Over 160 caliber setups." },
  { name: "CR-8", img: "/images/press-xl750.svg", tag: "Our best-seller. Up to 800 rounds an hour." },
  { name: "CR-12", img: "/images/press-rl1100.jpg", tag: "Industrial build for high, steady volume." },
  { name: "CX-10", img: "/images/press-super1050.jpg", tag: "The high-output powerhouse. 1,000+ rounds an hour." },
  { name: "CP-20", img: "/images/press-cp2000.jpg", tag: "Commercial-grade case processing, end to end." },
  { name: "SD-3", img: "/images/press-squaredeal.jpg", tag: "Compact pistol progressive. 400–500 an hour." },
];

export default function Presses() {
  return (
    <section className="machines" id="presses">
      <div className="container machines-inner">
        <div className="section-head">
          <div className="machines-head-top reveal">
            <span className="eyebrow">Reloading Presses</span>
            <h2>Pick Your Press</h2>
          </div>
          <p className="machines-lede reveal" data-d="1">
            We build on one idea: treat people the way you&apos;d want to be treated. That means
            gear engineered to outlast you — and a team that stands behind every machine.
          </p>
          <ul className="machines-facts">
            <li className="reveal" data-d="1">Engineered, assembled, and bench-tested in the USA at our Arizona works.</li>
            <li className="reveal" data-d="2">Backed by a crew who reload themselves, not a script. Reach them at <a href={PHONE_HREF}>{PHONE}</a>.</li>
            <li className="reveal" data-d="3">On the shelf and ready to ship — or come handle one at our showroom, {SHOWROOM}.</li>
          </ul>
        </div>

        <div className="machines-grid">
          {PRESSES.map((p, idx) => (
            <DeadLink className="machine-card reveal" data-d={(idx % 3) + 1} key={p.name} aria-label={`Shop the ${p.name} press`}>
              <div className="machine-card-img"><img src={p.img} alt={`${p.name} reloading press`} loading="lazy" /></div>
              <div className="machine-card-body">
                <span className="machine-card-name">{p.name}</span>
                <p className="machine-card-tag">{p.tag}</p>
                <span className="card-cta">Shop Now <ArrowRight /></span>
              </div>
            </DeadLink>
          ))}
        </div>

        <div className="machines-hint">Swipe for more <ArrowRight /></div>

        <div className="machines-foot reveal">
          <DeadLink className="btn btn-primary"><Compare /> Compare All Presses</DeadLink>
        </div>
      </div>
    </section>
  );
}
