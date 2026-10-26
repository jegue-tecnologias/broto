"use client";

import Image from "next/image";
import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import {
  Bolt,
  Close,
  Expand,
  Gallery,
  HelpCircle,
  Info,
  PlantMark,
  Right,
} from "@/components/Icons";
import { asset } from "@/constants/site";

import { Zoom } from "./Zoom";

const MAX = 3;

const SHOTS = [
  { src: "/jiboia-1.webp", w: 296, h: 296 },
  { src: "/jiboia-2.webp", w: 296, h: 296 },
  { src: "/jiboia-3.webp", w: 296, h: 296 },
];

type Labels = {
  close: string;
  help: string;
  flash: string;
  hintTitle: string;
  hintLine1: string;
  hintLine2: string;
  left1: string;
  left2: string;
  full: string;
  analyze: string;
  gallery: string;
  shutter: string;
  tips: string;
  tipsTitle: string;
  tipsSubtitle: string;
  tipsAction: string;
  tipsExtra: string;
  tipsItems: { title: string; text: string }[];
  zoomClose: string;
  zoomSave: string;
};

export function CameraScreen({ labels }: { labels: Labels }) {
  const [taken, setTaken] = useState(0);
  const [flash, setFlash] = useState(false);
  const [zoom, setZoom] = useState<number | null>(null);
  const [tips, setTips] = useState(false);
  const card = useRef<HTMLDivElement>(null);

  const fechaDicas = () => {
    const node = card.current;
    if (node) node.style.transform = "";
    setTips(false);
  };

  const arrasta = (event: ReactPointerEvent<HTMLDivElement>) => {
    const node = card.current;
    if (!node || event.button !== 0) return;

    const esc =
      Number(getComputedStyle(node).getPropertyValue("--esc")) || 0.8;
    const base = node.getBoundingClientRect().height;
    const inicio = event.clientY;
    let dy = 0;

    const move = (passo: PointerEvent) => {
      dy = Math.max(0, passo.clientY - inicio);
      node.style.transition = "none";
      node.style.transform = "scale(" + esc + ") translateY(" + dy / esc + "px)";
    };

    const solta = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", solta);

      node.style.transition = "transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)";

      if (dy > base * 0.3) {
        node.style.transform =
          "scale(" + esc + ") translateY(" + base / esc + "px)";
        window.setTimeout(fechaDicas, 200);
        return;
      }

      node.style.transform = "";
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", solta);
  };

  const shots = SHOTS.slice(0, taken).map((shot) => ({
    ...shot,
    src: asset(shot.src),
  }));

  const left = MAX - taken;

  const hint =
    taken === 0
      ? null
      : left === 0
        ? labels.full
        : left === 1
          ? labels.left1
          : labels.left2;

  return (
    <div className="phone-screen is-live">
      <div className="cam">
        <div className="cam-view">
          <div className="cam-plant">
            <PlantMark tone="muted" />
          </div>

          <div className="cam-guide" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>

          <div className="cam-top">
            <span className="cam-circle" aria-label={labels.close}>
              <Close />
            </span>

            <span className="cam-actions">
              <span className="cam-circle" aria-label={labels.help}>
                <HelpCircle />
              </span>

              <button
                type="button"
                className={flash ? "cam-circle is-on" : "cam-circle"}
                aria-label={labels.flash}
                aria-pressed={flash}
                onClick={() => setFlash((on) => !on)}
              >
                <Bolt />
              </button>
            </span>
          </div>

          <div className="cam-hint">
            <p className="cam-hint-title">{labels.hintTitle}</p>
            <p className="cam-hint-text">
              {hint ?? (
                <>
                  {labels.hintLine1}
                  <br />
                  {labels.hintLine2}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="cam-bottom">
          {taken > 0 ? (
            <div className="cam-strip">
              {shots.map((shot, i) => (
                <span key={shot.src} className="cam-slot">
                  <button
                    type="button"
                    className="cam-thumb"
                    aria-label={String(i + 1)}
                    onClick={() => setZoom(i)}
                  >
                    <Image
                      src={shot.src}
                      alt=""
                      width={shot.w}
                      height={shot.h}
                      draggable={false}
                    />
                  </button>

                  <span className="cam-expand" aria-hidden="true">
                    <Expand />
                  </span>
                </span>
              ))}

              <span className="cam-slot">
                <span className="cam-analyze">
                  <Right />
                </span>
                <span className="cam-analyze-label">{labels.analyze}</span>
              </span>
            </div>
          ) : null}

          <div className="cam-bar">
            <div className="cam-action">
              <span className="cam-side">
                <Gallery />
              </span>
              <span className="cam-label">{labels.gallery}</span>
            </div>

            <div className="cam-action">
              <button
                type="button"
                className="cam-shutter"
                aria-label={labels.shutter}
                disabled={left === 0}
                onClick={() => setTaken((n) => Math.min(n + 1, MAX))}
              >
                <span className="cam-core" />
              </button>
              <span className="cam-label">{labels.shutter}</span>
            </div>

            <div className="cam-action">
              <button
                type="button"
                className="cam-side"
                aria-label={labels.tips}
                onClick={() => setTips(true)}
              >
                <Info />
              </button>
              <span className="cam-label">{labels.tips}</span>
            </div>
          </div>
        </div>
      </div>

      {tips ? (
        <div className="cam-sheet">
          <span
            className="cam-sheet-back"
            aria-hidden="true"
            onClick={fechaDicas}
          />

          <div className="cam-sheet-card" ref={card} onPointerDown={arrasta}>
            <span className="cam-sheet-grip" aria-hidden="true" />

            <p className="cam-sheet-title">{labels.tipsTitle}</p>
            <p className="cam-sheet-sub">{labels.tipsSubtitle}</p>

            <div className="cam-sheet-list">
              {labels.tipsItems.map((tip) => (
                <div key={tip.title} className="cam-tip">
                  <span className="cam-tip-mark">
                    <PlantMark tone="muted" />
                  </span>
                  <div>
                    <p className="cam-tip-title">{tip.title}</p>
                    <p className="cam-tip-text">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="cam-sheet-extra">
              <Info />
              <span>{labels.tipsExtra}</span>
            </p>

            <button
              type="button"
              className="cam-sheet-action"
              onClick={fechaDicas}
            >
              {labels.tipsAction}
            </button>
          </div>
        </div>
      ) : null}

      {zoom !== null ? (
        <Zoom
          shots={shots}
          start={zoom}
          closeLabel={labels.zoomClose}
          saveLabel={labels.zoomSave}
          onClose={() => setZoom(null)}
        />
      ) : null}
    </div>
  );
}
