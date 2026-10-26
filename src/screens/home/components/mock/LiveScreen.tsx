"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { Zoom } from "./Zoom";

const HERO = 340;
const CARD = 302;
const SLOP = 6;
const DECAY = 0.94;
const STOP = 0.4;

type LiveScreenProps = {
  children: ReactNode;
  overlay: ReactNode;
  footer: ReactNode;
  shots: { src: string; w: number; h: number }[];
  closeLabel: string;
  saveLabel: string;
};

export function LiveScreen({
  children,
  overlay,
  footer,
  shots,
  closeLabel,
  saveLabel,
}: LiveScreenProps) {
  const scroller = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<number | null>(null);

  useEffect(() => {
    const node = scroller.current;
    if (!node) return;

    const shell = node.parentElement;
    const bar = node.querySelector<HTMLElement>(".scr-bar");
    const top = shell?.querySelector<HTMLElement>(".scr-top");
    const tabs = [...node.querySelectorAll<HTMLElement>("[data-jump]")];
    const marks = [...node.querySelectorAll<HTMLElement>("[data-sec]")];
    const carousel = node.querySelector<HTMLElement>(".scr-carousel");
    const dots = [...node.querySelectorAll<HTMLElement>(".scr-dots i")];

    let bars = 158;

    if (bar) {
      bars = bar.offsetHeight;
      bar.style.marginBottom = `-${bars}px`;
    }

    const foot = shell?.querySelector<HTMLElement>(".scr-footer");
    if (foot) node.style.paddingBottom = `${foot.offsetHeight}px`;

    const topOf = (el: HTMLElement) => {
      let y = 0;
      let cur: HTMLElement | null = el;

      while (cur && cur !== node) {
        y += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }

      return y;
    };

    let spots: { id: string; y: number }[] = [];

    const measure = () => {
      if (bar) bars = bar.offsetHeight;

      spots = marks.map((mark) => ({
        id: mark.dataset.sec ?? "",
        y: topOf(mark),
      }));
    };

    const read = () => {
      const y = node.scrollTop;
      const over = y > HERO - bars;

      bar?.classList.toggle("is-on", over);
      top?.classList.toggle("is-on", over);

      let current = "";

      for (const spot of spots) {
        if (spot.y - bars - 24 > y) break;
        current = spot.id;
      }

      for (const tab of tabs) {
        tab.classList.toggle("is-on", tab.dataset.jump === current);
      }
    };

    const onSlide = () => {
      if (!carousel) return;

      const page = Math.round(carousel.scrollLeft / CARD);
      dots.forEach((dot, i) => dot.classList.toggle("is-on", i === page));
    };

    const escala = () => node.getBoundingClientRect().width / node.offsetWidth || 1;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");

    let dragging = false;
    let moved = false;
    let axis: "x" | "y" | null = null;
    let lane: HTMLElement = node;
    let fromX = 0;
    let fromY = 0;
    let atX = 0;
    let atY = 0;
    let speed = 0;
    let side = 0;
    let last = 0;
    let glide = 0;

    const onMove = (event: PointerEvent) => {
      if (!dragging) return;

      const dx = event.clientX - fromX;
      const dy = event.clientY - fromY;

      if (!axis) {
        if (Math.abs(dx) < SLOP && Math.abs(dy) < SLOP) return;

        axis = Math.abs(dx) > Math.abs(dy) && lane !== node ? "x" : "y";
        moved = true;
      }

      const gap = event.timeStamp - last;

      if (axis === "x") {
        const antes = lane.scrollLeft;
        lane.scrollLeft = atX - dx / escala();

        if (gap > 0) side = (lane.scrollLeft - antes) / gap;
        last = event.timeStamp;
        return;
      }

      const antes = node.scrollTop;
      node.scrollTop = atY - dy / escala();

      if (gap > 0) speed = (node.scrollTop - antes) / gap;
      last = event.timeStamp;
    };

    const onUp = () => {
      if (!dragging) return;

      dragging = false;
      shell?.classList.remove("is-grab");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);

      if (!moved) return;

      const suave = quiet.matches ? "auto" : "smooth";

      if (axis === "x") {
        if (lane === carousel) {
          const page = Math.round((lane.scrollLeft + side * 160) / CARD);
          const alvo = Math.min(Math.max(page, 0), dots.length - 1);

          lane.scrollTo({ left: alvo * CARD, behavior: suave });
          return;
        }

        lane.scrollBy({ left: side * 180, behavior: suave });
        return;
      }

      if (quiet.matches || Math.abs(speed) < STOP) return;

      let rest = speed * 16;

      const run = () => {
        node.scrollTop += rest;
        rest *= DECAY;

        if (Math.abs(rest) > STOP) glide = requestAnimationFrame(run);
      };

      glide = requestAnimationFrame(run);
    };

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 || event.pointerType === "touch") return;

      cancelAnimationFrame(glide);

      const alvo = event.target;
      const row =
        alvo instanceof Element
          ? alvo.closest<HTMLElement>(".scr-carousel, .scr-ref, .scr-tabs")
          : null;

      dragging = true;
      moved = false;
      axis = null;
      lane = row ?? node;
      fromX = event.clientX;
      fromY = event.clientY;
      atX = row ? row.scrollLeft : 0;
      atY = node.scrollTop;
      speed = 0;
      side = 0;
      last = event.timeStamp;

      shell?.classList.add("is-grab");
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    const onClick = (event: MouseEvent) => {
      if (moved) {
        moved = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const alvo = event.target;
      if (!(alvo instanceof Element)) return;

      const shot = alvo.closest<HTMLElement>("[data-zoom]");

      if (shot?.dataset.zoom) {
        setZoom(Number(shot.dataset.zoom));
        return;
      }

      const tab = alvo.closest<HTMLElement>("[data-jump]");
      if (!tab) return;

      const spot = spots.find((item) => item.id === tab.dataset.jump);
      if (!spot) return;

      node.scrollTo({ top: spot.y - bars, behavior: "smooth" });
    };

    const onResize = () => {
      measure();
      read();
    };

    measure();
    read();
    node.addEventListener("scroll", read, { passive: true });
    node.addEventListener("click", onClick, true);
    node.addEventListener("pointerdown", onDown);
    window.addEventListener("resize", onResize);
    carousel?.addEventListener("scroll", onSlide, { passive: true });

    return () => {
      cancelAnimationFrame(glide);
      node.removeEventListener("scroll", read);
      node.removeEventListener("click", onClick, true);
      node.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      carousel?.removeEventListener("scroll", onSlide);
    };
  }, []);

  return (
    <div className="phone-screen is-live">
      <div className="scr" ref={scroller}>
        {children}
      </div>

      {overlay}
      {footer}

      {zoom !== null ? (
        <Zoom
          shots={shots}
          start={zoom}
          closeLabel={closeLabel}
          saveLabel={saveLabel}
          onClose={() => setZoom(null)}
        />
      ) : null}
    </div>
  );
}
