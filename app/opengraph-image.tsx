import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Cordite - Precision Reloading Equipment & Components";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (f: string) => readFileSync(join(process.cwd(), "app/_fonts", f));

const reticle = `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="520" viewBox="0 0 520 520">
<g fill="none" stroke="#2f7fd4" stroke-width="3" opacity="0.5">
<circle cx="260" cy="260" r="250" opacity="0.35"/><circle cx="260" cy="260" r="185" opacity="0.55"/><circle cx="260" cy="260" r="120" opacity="0.8"/>
<path d="M260 0V120M260 400V520M0 260H120M400 260H520" opacity="0.6"/>
</g>
<circle cx="260" cy="260" r="9" fill="#e0a812"/>
</svg>`;
const reticleUri = `data:image/svg+xml;base64,${Buffer.from(reticle).toString("base64")}`;

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", position: "relative", padding: "72px 76px",
          backgroundColor: "#0c0e11", color: "#fff", fontFamily: "Montserrat",
          backgroundImage: "linear-gradient(135deg, #11151a 0%, #0a0c0e 60%, #0c0e11 100%)",
        }}
      >
        <img src={reticleUri} width={520} height={520} style={{ position: "absolute", right: -110, top: 70 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, backgroundColor: "#085bb0" }} />
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, color: "#9fb3c8", fontWeight: 600 }}>
            PRECISION RELOADING / MADE IN THE USA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontFamily: "Teko", fontSize: 210, lineHeight: 1, letterSpacing: 2 }}>
            <span style={{ color: "#ffffff" }}>COR</span>
            <span style={{ color: "#2f7fd4" }}>DITE</span>
          </div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 36, color: "#d8d2c6", maxWidth: 820 }}>
            Progressive presses, dies &amp; components - and the crew to run them.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", height: 5, width: 280, backgroundImage: "linear-gradient(90deg, #085bb0 0%, #c8920a 100%)", borderRadius: 3 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
            <div style={{ display: "flex", color: "#8c97a3" }}>cordite-reloading.vercel.app</div>
            <div style={{ display: "flex", color: "#e0a812", fontWeight: 600 }}>Built by Paliy</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Teko", data: font("Teko-700.woff"), weight: 700, style: "normal" },
        { name: "Montserrat", data: font("Montserrat-400.woff"), weight: 400, style: "normal" },
        { name: "Montserrat", data: font("Montserrat-700.woff"), weight: 700, style: "normal" },
      ],
    }
  );
}
