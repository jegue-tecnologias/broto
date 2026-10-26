"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { asset } from "@/constants/site";

const WIDTH = 900;
const HEIGHT = 440;
const GIVE_UP_MS = 1500;

type WordmarkVideoProps = {
  tone?: "brand" | "light";
  className?: string;
};

export function WordmarkVideo({
  tone = "brand",
  className,
}: WordmarkVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "video" | "still">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (quiet.matches) {
      const stop = setTimeout(() => setState("still"), 0);
      return () => clearTimeout(stop);
    }

    let settled = false;

    const show = () => {
      if (settled) return;

      settled = true;
      setState("video");
    };

    const giveUp = () => {
      if (settled) return;

      settled = true;
      setState("still");
    };

    if (node.readyState >= 2 && !node.paused && node.currentTime > 0) show();

    node.addEventListener("timeupdate", show);
    node.addEventListener("error", giveUp);
    node.play().catch(giveUp);

    const timer = setTimeout(giveUp, GIVE_UP_MS);

    return () => {
      clearTimeout(timer);
      node.removeEventListener("timeupdate", show);
      node.removeEventListener("error", giveUp);
    };
  }, []);

  const light = tone === "light";

  const classes = ["wordmark", "wordmark-lg", `is-${state}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      <Image
        className="wm-img"
        src={asset(light ? "/wordmark-light.png" : "/wordmark.png")}
        alt="Broto"
        width={WIDTH}
        height={HEIGHT}
        priority
      />

      <video
        ref={ref}
        className="wm-video"
        src={asset(light ? "/wordmark-light.webm" : "/wordmark.webm")}
        width={WIDTH}
        height={HEIGHT}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </span>
  );
}
