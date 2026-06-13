/* Shared inline SVG icons. Line icons inherit currentColor; sizing is handled
   by context CSS where present, otherwise by the intrinsic size below. */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const line = (props: P) => ({
  viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  ...props,
});

export const Search = (p: P) => (<svg {...line(p)}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
export const User = (p: P) => (<svg {...line(p)}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>);
export const Heart = (p: P) => (<svg {...line(p)}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z" /></svg>);
export const Cart = (p: P) => (<svg {...line(p)}><circle cx="9" cy="21" r="1.6" /><circle cx="18" cy="21" r="1.6" /><path d="M2.5 3h2.2l2.3 12.4a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.5L21.5 7H6" /></svg>);
export const Menu = (p: P) => (<svg {...line(p)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
export const Close = (p: P) => (<svg {...line(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>);
export const Chevron = (p: P) => (<svg {...line(p)}><path d="m6 9 6 6 6-6" /></svg>);
export const ArrowRight = (p: P) => (<svg {...line(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowLeft = (p: P) => (<svg {...line(p)}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>);
export const Truck = (p: P) => (<svg {...line(p)}><path d="M3 16V6a1 1 0 0 1 1-1h10v11M14 8h4l3 3v5h-7" /><circle cx="7.5" cy="17.5" r="1.8" /><circle cx="17.5" cy="17.5" r="1.8" /></svg>);
export const Shield = (p: P) => (<svg {...line(p)}><path d="M12 3 5 6v6c0 4.2 2.9 7.5 7 9 4.1-1.5 7-4.8 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>);
export const Headset = (p: P) => (<svg {...line(p)}><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" /><path d="M20 16v1a4 4 0 0 1-4 4h-3" /></svg>);
export const Pin = (p: P) => (<svg {...line(p)}><path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>);
export const Phone = (p: P) => (<svg {...line(p)}><path d="M5 3h3.5l1.6 4.2-2 1.3a13 13 0 0 0 5.4 5.4l1.3-2 4.2 1.6V19a2 2 0 0 1-2.2 2A17 17 0 0 1 4 6.2 2 2 0 0 1 5 3Z" /></svg>);
export const Mail = (p: P) => (<svg {...line(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>);
export const Compare = (p: P) => (<svg {...line(p)}><path d="M4 7h11M4 7l3-3M4 7l3 3M20 17H9M20 17l-3-3M20 17l-3 3" /></svg>);

/* Filled social marks */
const fill = (p: P) => ({ viewBox: "0 0 24 24", fill: "currentColor", ...p });
export const Facebook = (p: P) => (<svg {...fill(p)}><path d="M14 9V7c0-.8.5-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v2H8v3h2v8h3v-8h2.4l.6-3H13Z" /></svg>);
export const Instagram = (p: P) => (<svg {...fill(p)}><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.3.07 1.68.07 4.93s0 3.63-.07 4.93c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.3.06-1.68.07-4.93.07s-3.63 0-4.93-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.63.07-4.93c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 3.05A6.75 6.75 0 1 0 18.75 12 6.75 6.75 0 0 0 12 5.25Zm0 11.13A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.99-11.4a1.58 1.58 0 1 1-1.58-1.57 1.58 1.58 0 0 1 1.58 1.57Z" /></svg>);
export const Youtube = (p: P) => (<svg {...fill(p)}><path d="M22.5 7.2a2.8 2.8 0 0 0-2-2C18.8 4.8 12 4.8 12 4.8s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.2 12a29 29 0 0 0 .3 4.8 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .3-4.8 29 29 0 0 0-.3-4.8ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" /></svg>);
export const XMark = (p: P) => (<svg {...fill(p)}><path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L8.5 21H5.3l7.5-8.6L5 3h6.5l4.5 6 5.5-6Zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19Z" /></svg>);
