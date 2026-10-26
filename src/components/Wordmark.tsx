import Image from "next/image";

import { asset } from "@/constants/site";

type WordmarkProps = {
  size?: "sm" | "lg";
  tone?: "dark" | "light";
  className?: string;
};

const WIDTH = 900;
const HEIGHT = 440;

export function Wordmark({
  size = "sm",
  tone = "dark",
  className,
}: WordmarkProps) {
  const classes = ["wordmark", `wordmark-${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <Image
        className="wm-img"
        src={asset(tone === "light" ? "/wordmark-light.png" : "/wordmark.png")}
        alt="Broto"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
    </span>
  );
}
