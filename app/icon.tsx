import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#1e5c3d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f2f1ea",
          fontSize: 20,
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
