export default function GrainOverlay() {
  return (
    <svg className="grain-overlay" width="100%" height="100%" aria-hidden="true">
      <filter id="grain-texture">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-texture)" />
    </svg>
  );
}
