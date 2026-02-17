import { ImageResponse } from "next/og";
import { MEMBER_COUNT_DISPLAY } from "@/lib/constants";

export const runtime = "edge";
export const alt = "AsianMasc - The Online Community for Asian Men";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  try {
    // Fetch Inter Black (900 weight) - the thickest weight
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
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
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
            background: "radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(234, 179, 8, 0.3) 0%, transparent 70%)",
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
          {/* Logo text - BLACK weight (thickest) */}
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              background: "linear-gradient(90deg, #dc2626 0%, #eab308 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            AsianMasc
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 34,
              color: "#ffffff",
              fontWeight: 400,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            The Online Community for Asian Men
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 56,
              marginTop: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #dc2626 0%, #eab308 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {MEMBER_COUNT_DISPLAY}
              </div>
              <div style={{ fontSize: 20, color: "#9ca3af" }}>Members</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #dc2626 0%, #eab308 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                24/7
              </div>
              <div style={{ fontSize: 20, color: "#9ca3af" }}>Active</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #dc2626 0%, #eab308 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Free
              </div>
              <div style={{ fontSize: 20, color: "#9ca3af" }}>To Join</div>
            </div>
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
