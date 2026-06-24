import DeadLink from "./DeadLink";
import { ArrowRight } from "./icons";

const CATS = [
  { label: "Caliber Conversion", img: "/images/cat-conversion.jpg" },
  { label: "Case Prep & Cleaning", img: "/images/cat-caseprep.jpg" },
  { label: "Powder Measures", img: "/images/cat-powder.jpg" },
  { label: "Parts & Maintenance", img: "/images/cat-parts.jpg" },
  { label: "Dies & Tools", img: "/images/cat-dies.jpg" },
  { label: "Components", img: "/images/cat-components.jpg" },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Shop by Category</span>
          <h2>Everything Else You Need</h2>
        </div>
        <div className="cat-grid">
          {CATS.map((c, idx) => (
            <DeadLink className="cat-tile reveal" data-d={(idx % 3) + 1} key={c.label} aria-label={c.label}>
              <div className="cat-tile-bg"><img src={c.img} alt="" loading="lazy" /></div>
              <div className="cat-tile-label">
                <h3>{c.label}</h3>
                <span className="cat-arrow"><ArrowRight /></span>
              </div>
            </DeadLink>
          ))}
        </div>
      </div>
    </section>
  );
}
