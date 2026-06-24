import type { Metadata } from "next";
import { Teko, Montserrat } from "next/font/google";
import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mont",
  display: "swap",
});

const SITE = "https://cordite-reloading.vercel.app";
const DESC =
  "Cordite builds precision ammunition reloading equipment in the USA - progressive presses, dies, powder measures, components and the support to run them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Cordite - Precision Reloading Equipment & Components",
    template: "%s / Cordite",
  },
  description: DESC,
  applicationName: "Cordite",
  keywords: [
    "reloading equipment", "progressive press", "ammunition reloading", "reloading dies",
    "powder measures", "brass", "bullets", "primers", "precision reloading", "Cordite",
  ],
  authors: [{ name: "Paliy" }],
  creator: "Paliy",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Cordite",
    title: "Cordite - Precision Reloading Equipment & Components",
    description: DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cordite - Precision Reloading Equipment & Components",
    description: DESC,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${teko.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
