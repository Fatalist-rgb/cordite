"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="news-form"
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
    >
      <div className="news-row">
        <input
          type="email"
          required
          placeholder="Your email address"
          aria-label="Email address"
          disabled={done}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          {done ? "Done" : "Subscribe"}
        </button>
      </div>
      <span className="news-note">
        {done
          ? "You're on the list - watch your inbox."
          : "Sale alerts, new gear, and reloading tips. No spam."}
      </span>
    </form>
  );
}
