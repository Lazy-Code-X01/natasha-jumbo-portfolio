import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1e5c3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f2f1ea",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
