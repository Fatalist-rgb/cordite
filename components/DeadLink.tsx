"use client";
import type { AnchorHTMLAttributes } from "react";
/* A placeholder anchor for sections that don't have a destination page yet.
   Prevents the jump-to-top that a bare href="#" causes. Usable from server
   components (which can't attach their own event handlers). */
export default function DeadLink(
  props: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">
) {
  return <a href="#" {...props} onClick={(e) => e.preventDefault()} />;
}
