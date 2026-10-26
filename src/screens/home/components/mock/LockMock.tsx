import { Bolt, Camera, Mark } from "@/components/Icons";
import type { T } from "@/i18n";

export function LockMock({ t }: { t: T }) {
  return (
    <div className="phone is-small" aria-hidden="true">
      <div className="phone-screen is-live is-still is-lock">
        <div className="lock">
          <div className="lock-sys">
            <svg viewBox="0 0 54 14" aria-hidden="true">
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

          <div className="lock-clock">
            <p className="lock-date">{t("lock.date")}</p>
            <p className="lock-time">{t("lock.time")}</p>
          </div>

          <div className="lock-stack">
            <div className="notif">
              <span className="notif-icon">
                <Mark />
              </span>
              <div className="notif-texts">
                <p className="notif-app">
                  <span>{t("lock.app")}</span>
                  <span>{t("lock.now")}</span>
                </p>
                <p className="notif-title">{t("lock.title")}</p>
                <p className="notif-text">{t("lock.text")}</p>
              </div>
            </div>
          </div>

          <div className="lock-foot">
            <span className="lock-key">
              <Bolt />
            </span>
            <span className="lock-key">
              <Camera />
            </span>
          </div>

          <span className="lock-bar" />
        </div>
      </div>
    </div>
  );
}
