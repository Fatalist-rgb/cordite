import { PHONE, PHONE_HREF, EMAIL, ADDRESS } from "../app/site";
import DeadLink from "./DeadLink";
import SubscribeForm from "./SubscribeForm";
import { Facebook, Instagram, Youtube, XMark } from "./icons";

const QUICK = ["Contact Us", "Dealer Locator", "Support & Videos", "Shipping & Policies", "My Account", "Request Catalog", "Gift Card Balance", "Quick Help"];
const SUPPORT = ["CR-5", "CR-8", "CR-12", "CX-10", "CP-20", "SD-3", "All Manuals", "Video Library"];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info f-brand">
            <div className="wordmark">Cor<b>dite</b></div>
            <p style={{ marginBottom: 18 }}>Precision reloading equipment — engineered, assembled, and tested in the USA.</p>
            <p><span className="label">Address</span>{ADDRESS}</p>
            <p><span className="label">Phone</span><a href={PHONE_HREF}>{PHONE}</a></p>
            <p><span className="label">Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            {QUICK.map((l) => <DeadLink key={l}>{l}</DeadLink>)}
          </div>

          <div className="footer-links">
            <h5>Press Support</h5>
            {SUPPORT.map((l) => <DeadLink key={l}>{l}</DeadLink>)}
          </div>

          <div className="footer-news">
            <h5>Stay in the Loop</h5>
            <p>
              Showroom: Mon–Fri 9–5, Sat 9–1, closed Sunday.<br />
              Phone orders &amp; support: Mon–Fri 7am–5pm.
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="footer-bottom">
          <span className="by">© 2026 Cordite. All rights reserved. · Built by <strong>Paliy</strong></span>
          <div className="footer-social">
            <DeadLink aria-label="Facebook"><Facebook /></DeadLink>
            <DeadLink aria-label="Instagram"><Instagram /></DeadLink>
            <DeadLink aria-label="YouTube"><Youtube /></DeadLink>
            <DeadLink aria-label="X"><XMark /></DeadLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
