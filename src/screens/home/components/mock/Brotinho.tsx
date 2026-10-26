import { FaceFeatures, Sprig } from "@/components/Icons";

export function ChatFace() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#8FA383" />
      <g transform="translate(50 50)">
        <Sprig />
      </g>
      <g transform="translate(50 52) scale(1.15)">
        <FaceFeatures />
      </g>
    </svg>
  );
}
