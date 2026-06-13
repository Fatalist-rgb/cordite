import { Truck, Shield, Headset } from "./icons";

const ITEMS = [
  { Icon: Truck, title: "Fast, Tracked Shipping", text: "Free over $250, and most orders leave the dock in one to two days." },
  { Icon: Shield, title: "Made in the USA", text: "Designed, machined, and tested at our Arizona works." },
  { Icon: Headset, title: "Lifetime Support", text: "Talk to people who reload — by phone, not a chatbot." },
];

export default function TrustBand() {
  return (
    <section className="trust-band">
      <div className="container trust-inner">
        {ITEMS.map(({ Icon, title, text }) => (
          <div className="trust-item reveal" key={title}>
            <span className="trust-icon"><Icon /></span>
            <div className="trust-text">
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
