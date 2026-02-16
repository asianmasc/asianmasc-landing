import { ImageResponse } from "next/og";
import { MEMBER_COUNT_DISPLAY } from "@/lib/constants";

export const runtime = "edge";
export const alt = "AsianMasc - The Online Community for Asian Men";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          {/* Logo text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: "linear-gradient(90deg, #dc2626 0%, #eab308 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 24,
            }}
          >
            AsianMasc
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: "#ffffff",
              fontWeight: 600,
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
              gap: 48,
              marginTop: 32,
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
                  fontSize: 48,
                  fontWeight: 700,
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
                  fontSize: 48,
                  fontWeight: 700,
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
                  fontSize: 48,
                  fontWeight: 700,
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
    { ...size }
  );
}
