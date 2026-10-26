"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

import { Close, Download } from "@/components/Icons";

const SLOP = 6;

type Shot = { src: string; w: number; h: number };

type ZoomProps = {
  shots: Shot[];
  start: number;
  closeLabel: string;
  saveLabel: string;
  onClose: () => void;
};

export function Zoom({
  shots,
  start,
  closeLabel,
  saveLabel,
  onClose,
}: ZoomProps) {
  const pager = useRef<HTMLDivElement>(null);
  const moved = useRef(false);
  const [page, setPage] = useState(start);

  useEffect(() => {
    const node = pager.current;
    if (!node) return;

    node.scrollLeft = start * node.clientWidth;
  }, [start]);

  useEffect(() => {
    const node = pager.current;
    if (!node) return;

    const escala = () => node.getBoundingClientRect().width / node.offsetWidth || 1;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");

    let dragging = false;
    let from = 0;
    let at = 0;
    let side = 0;
    let last = 0;

    const onMove = (event: PointerEvent) => {
      if (!dragging) return;

      const dx = event.clientX - from;
      if (!moved.current && Math.abs(dx) < SLOP) return;

      moved.current = true;

      const antes = node.scrollLeft;
      node.scrollLeft = at - dx / escala();

      const gap = event.timeStamp - last;
      if (gap > 0) side = (node.scrollLeft - antes) / gap;
      last = event.timeStamp;
    };

    const onUp = () => {
      if (!dragging) return;

      dragging = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);

      const step = node.clientWidth;
      const alvo = Math.min(
        Math.max(Math.round((node.scrollLeft + side * 160) / step), 0),
        shots.length - 1,
      );

      node.scrollTo({
        left: alvo * step,
        behavior: quiet.matches ? "auto" : "smooth",
      });
      setPage(alvo);
    };

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      dragging = true;
      moved.current = false;
      from = event.clientX;
      at = node.scrollLeft;
      side = 0;
      last = event.timeStamp;

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    };

    node.addEventListener("pointerdown", onDown);

    return () => {
      node.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [shots.length]);

  const onStage = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (moved.current) {
      moved.current = false;
      return;
    }

    const shot = event.currentTarget.querySelector("img");
    if (!shot) return;

    const r = shot.getBoundingClientRect();
    const dentro =
      event.clientX >= r.left &&
      event.clientX <= r.right &&
      event.clientY >= r.top &&
      event.clientY <= r.bottom;

    if (!dentro) onClose();
  };

  const goTo = (i: number) => {
    const node = pager.current;
    if (!node) return;

    const quiet = window.matchMedia("(prefers-reduced-motion: reduce)");

    node.scrollTo({
      left: i * node.clientWidth,
      behavior: quiet.matches ? "auto" : "smooth",
    });
    setPage(i);
  };

  return (
    <div className="scr-zoom">
      <span className="scr-zoom-back" aria-hidden="true" onClick={onClose} />

      <div className="scr-zoom-pager" ref={pager} onClick={onStage}>
        {shots.map((shot) => (
          <span key={shot.src} className="scr-zoom-stage">
            <Image
              src={shot.src}
              alt=""
              width={shot.w}
              height={shot.h}
              draggable={false}
            />
          </span>
        ))}
      </div>

      {shots.length > 1 ? (
        <div className="scr-zoom-panel">
          <span className="scr-zoom-veil" />

          <div className="scr-zoom-thumbs">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                className={i === page ? "is-on" : undefined}
                aria-label={String(i + 1)}
                aria-pressed={i === page}
                onClick={() => goTo(i)}
              >
                <Image
                  src={shot.src}
                  alt=""
                  width={shot.w}
                  height={shot.h}
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {shots.length > 1 ? (
        <div className="scr-zoom-count">
          <span>
            {page + 1} / {shots.length}
          </span>
        </div>
      ) : null}

      <div className="scr-zoom-bar">
        <button
          type="button"
          className="scr-zoom-act"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <Close />
        </button>

        <a
          className="scr-zoom-act"
          href={shots[page].src}
          download
          aria-label={saveLabel}
        >
          <Download />
        </a>
      </div>
    </div>
  );
}
