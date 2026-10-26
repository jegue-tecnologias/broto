import Image from "next/image";

import {
  Back,
  Drop,
  Flag,
  Info,
  Paw,
  Share,
  Shovel,
  Spark,
  Sprout,
  Sun,
  Thermo,
  Mic,
} from "@/components/Icons";
import { asset } from "@/constants/site";
import { list, type T } from "@/i18n";

import { ChatFace } from "./Brotinho";
import { Feedback } from "./Feedback";
import { LiveScreen } from "./LiveScreen";

type Cause = { cause: string; blocks: { label: string; body: string }[] };
type Confirm = { cause: string; text: string };
type Care = { label: string; value: string; note: string };

const TILES = [
  { Icon: Drop, tone: "moss" },
  { Icon: Sun, tone: "ochre" },
  { Icon: Sprout, tone: "clay" },
  { Icon: Thermo, tone: "neutral" },
];

export function ResultScreen({ t }: { t: T }) {
  const shots = [
    { src: asset("/jiboia.webp"), w: 780, h: 680 },
    { src: asset("/jiboia-1.webp"), w: 296, h: 296 },
    { src: asset("/jiboia-2.webp"), w: 296, h: 296 },
    { src: asset("/jiboia-3.webp"), w: 296, h: 296 },
  ];

  const causes = list<Cause>(t, "mock.causes");
  const confirms = list<Confirm>(t, "mock.confirms");
  const care = list<Care>(t, "mock.care");

  const tabs = [
    { id: "diagnosis", label: t("mock.diagnosisEyebrow") },
    { id: "confirm", label: t("mock.confirmEyebrow") },
    { id: "care", label: t("mock.careEyebrow") },
    { id: "brotinho", label: t("mock.askTitle") },
    { id: "grow", label: t("mock.growTitle") },
    { id: "lore", label: t("mock.loreTitle") },
  ];

  const overlay = (
    <div className="scr-top">
      <div className="scr-sys">
        <span className="scr-sys-time">{t("mock.time")}</span>
        <svg className="scr-sys-icons" viewBox="0 0 54 14" aria-hidden="true">
          <rect x="0" y="9" width="3" height="5" rx="1" />
          <rect x="5" y="6.5" width="3" height="7.5" rx="1" />
          <rect x="10" y="4" width="3" height="10" rx="1" />
          <rect x="15" y="1.5" width="3" height="12.5" rx="1" />
          <path
            d="M23.2 5.1a7.6 7.6 0 0 1 9.6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M25.6 8.1a4.2 4.2 0 0 1 4.8 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="28" cy="11.4" r="1.3" />
          <rect
            x="38"
            y="3"
            width="14"
            height="8"
            rx="2.4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            opacity="0.5"
          />
          <rect x="39.6" y="4.6" width="9" height="4.8" rx="1.2" />
          <path
            d="M53.2 5.8v2.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      <span className="scr-round scr-back">
        <Back />
      </span>
      <span className="scr-round scr-share">
        <Share />
      </span>
    </div>
  );

  const footer = (
    <div className="scr-footer">
      <span className="scr-save">{t("mock.save")}</span>
    </div>
  );

  return (
    <LiveScreen
      overlay={overlay}
      footer={footer}
      shots={shots}
      closeLabel={t("mock.close")}
      saveLabel={t("mock.saveImage")}
    >
      <div key="bar" className="scr-bar">
        <p className="scr-bar-title">{t("mock.species")}</p>

        <div className="scr-tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              data-jump={tab.id}
              className={i === 0 ? "is-on" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div key="hero" className="scr-hero" data-zoom="0">
        <Image
          src={asset("/jiboia.webp")}
          alt={t("mock.species")}
          width={780}
          height={680}
          draggable={false}
          priority
        />
        <span className="scr-scrim" />
      </div>

      <div key="sheet" className="scr-sheet">
        <div className="scr-pad">
          <p className="scr-eyebrow">{t("mock.speciesLabel")}</p>
          <p className="scr-species">{t("mock.species")}</p>
          <p className="scr-sci">{t("mock.sci")}</p>
        </div>

        <div className="scr-ref">
          {[1, 2, 3].map((n) => (
            <span key={n} className="scr-ref-shot" data-zoom={n}>
              <Image
                src={asset("/jiboia-" + n + ".webp")}
                alt=""
                width={296}
                height={296}
                draggable={false}
              />
            </span>
          ))}
        </div>

        <div className="scr-pad">
          <div className="scr-status">
            <Info />
            <span>{t("mock.status")}</span>
          </div>
        </div>

        <section className="scr-sec" data-sec="diagnosis">
          <div className="scr-pad">
            <p className="scr-title">{t("mock.diagnosisTitle")}</p>
            <p className="scr-hint-text">{t("mock.diagnosisHint")}</p>
          </div>

          <div className="scr-carousel">
            {causes.map((item) => (
              <article key={item.cause} className="scr-card">
                <p className="scr-cause">{item.cause}</p>

                {item.blocks.map((block) => (
                  <div key={block.label} className="scr-block">
                    <p className="scr-label">{block.label}</p>
                    <p className="scr-body">{block.body}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>

          <div className="scr-dots">
            {causes.map((item, i) => (
              <i key={item.cause} className={i === 0 ? "is-on" : undefined} />
            ))}
          </div>
        </section>

        <section className="scr-sec scr-pad" data-sec="confirm">
          <p className="scr-title">{t("mock.confirmTitle")}</p>
          <p className="scr-hint-text">{t("mock.confirmEyebrow")}</p>

          {confirms.map((item) => (
            <div key={item.cause} className="scr-confirm">
              <p className="scr-confirm-cause">{item.cause}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        <section className="scr-sec scr-pad">
          <Feedback
            title={t("mock.feedbackTitle")}
            hint={t("mock.feedbackHint")}
            yes={t("mock.feedbackYes")}
            no={t("mock.feedbackNo")}
          />
        </section>

        <section className="scr-sec scr-pad" data-sec="care">
          <p className="scr-title">{t("mock.careEyebrow")}</p>

          <div className="scr-grid">
            {care.map((row, i) => {
              const tile = TILES[i] ?? TILES[3];
              const { Icon } = tile;

              return (
                <div key={row.label} className={`scr-tile is-${tile.tone}`}>
                  <div className="scr-tile-head">
                    <span className="scr-tile-icon">
                      <Icon />
                    </span>
                    <p className="scr-tile-label">{row.label}</p>
                  </div>

                  <p className="scr-tile-value">{row.value}</p>
                  {row.note ? (
                    <p className="scr-tile-note">{row.note}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <div className="scr-pad">
          <div className="scr-toxic">
            <Paw />
            <div>
              <p className="scr-toxic-title">{t("mock.toxicTitle")}</p>
              <p className="scr-toxic-text">{t("mock.toxicText")}</p>
            </div>
          </div>
        </div>

        <section className="scr-ask scr-pad" data-sec="brotinho">
          <div className="scr-ask-head">
            <span className="scr-ask-face">
              <ChatFace />
            </span>
            <p className="scr-title">{t("mock.askTitle")}</p>
          </div>

          <div className="scr-field">
            <span className="scr-field-text">{t("mock.askPlaceholder")}</span>
            <span className="scr-field-send">
              <Mic />
            </span>
          </div>
        </section>

        <section className="scr-sec scr-pad" data-sec="grow">
          <p className="scr-title">{t("mock.growTitle")}</p>

          <div className="scr-note is-moss">
            <span className="scr-note-icon">
              <Shovel />
            </span>
            <p>{t("mock.grow")}</p>
          </div>
        </section>

        <section className="scr-sec scr-pad" data-sec="lore">
          <p className="scr-title">{t("mock.loreTitle")}</p>

          <div className="scr-note is-ochre">
            <span className="scr-note-icon">
              <Spark />
            </span>
            <p>{t("mock.lore")}</p>
          </div>
        </section>

        <div className="scr-pad">
          <div className="scr-report">
            <span className="scr-report-icon">
              <Flag />
            </span>
            <div className="scr-report-texts">
              <p className="scr-report-lead">{t("mock.reportLead")}</p>
              <p className="scr-hint-text">{t("mock.reportHint")}</p>
            </div>
            <span className="scr-report-action">{t("mock.reportAction")}</span>
          </div>
        </div>
      </div>
    </LiveScreen>
  );
}
