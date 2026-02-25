import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The BenjaminFCC Dating Playbook - AsianMasc Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-900-normal.woff"
    );
    if (response.ok) {
      return await response.arrayBuffer();
    }
  } catch {
    // Fall back to no custom font
  }
  return null;
}

export default async function Image() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          position: "relative",
          fontFamily: fontData ? "Inter" : "system-ui",
        }}
      >
        {/* Accent gradient circles */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Presents */}
          <div
            style={{
              fontSize: 18,
              color: "#D4AF37",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            AsianMasc Community Presents
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            The BenjaminFCC
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: "linear-gradient(90deg, #D4AF37 0%, #F4D03F 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Dating Playbook
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 24,
              color: "#9ca3af",
              fontWeight: 400,
            }}
          >
            Raw Insights & Field-Tested Advice • 10 Chapters
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Inter",
              data: fontData,
              style: "normal",
              weight: 900,
            },
          ]
        : undefined,
    }
  );
}
