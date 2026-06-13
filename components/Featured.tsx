import DeadLink from "./DeadLink";
import { ArrowRight } from "./icons";

const PRODUCTS = [
  { name: "Rapid Primer Filler", eyebrow: "Upgrade", img: "/images/feat-primerfiller.svg", tag: "New", gold: true },
  { name: "Auto-Align Decapping Die", eyebrow: "Dies & Tools", img: "/images/feat-decapping.svg", tag: "New" },
  { name: "Case Feeder", eyebrow: "Press Upgrade", img: "/images/feat-casefeeder.jpg" },
  { name: "CR-8 Upgrade Kit", eyebrow: "Press Upgrade", img: "/images/feat-upgradekit.svg" },
];

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className="featured-head">
          <div className="featured-head-left reveal">
            <span className="eyebrow">Featured Gear</span>
            <h2>Moving Off the Shelf</h2>
          </div>
          <DeadLink className="view-all reveal" data-d="1">View All Products <ArrowRight /></DeadLink>
        </div>

        <div className="featured-grid">
          {PRODUCTS.map((p, idx) => (
            <DeadLink className="product-card reveal" data-d={(idx % 4) + 1} key={p.name} aria-label={`Shop ${p.name}`}>
              <div className="product-card-img">
                {p.tag && <span className={`product-tag${p.gold ? " gold" : ""}`}>{p.tag}</span>}
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="product-card-body">
                <span className="product-eyebrow">{p.eyebrow}</span>
                <h3 className="product-name">{p.name}</h3>
                <span className="card-cta">Shop Now <ArrowRight /></span>
              </div>
            </DeadLink>
          ))}
        </div>
      </div>
    </section>
  );
}
