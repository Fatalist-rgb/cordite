import { PHONE, PHONE_HREF } from "../app/site";
import DeadLink from "./DeadLink";

export default function SupportStrip() {
  return (
    <section className="support-strip">
      <div className="container support-inner">
        <div className="support-left reveal">
          <h3>Questions? Stuck on a Setup?</h3>
          <p>Our crew reloads too. Give us a call or drop a line — we&apos;ll get you running.</p>
          <a className="support-phone" href={PHONE_HREF}>{PHONE}</a>
        </div>
        <div className="support-ctas reveal" data-d="1">
          <DeadLink className="btn btn-primary">Contact Support</DeadLink>
          <DeadLink className="btn btn-dark">Create Account</DeadLink>
        </div>
      </div>
    </section>
  );
}
