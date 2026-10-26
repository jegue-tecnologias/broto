import {
  Bolt,
  Close,
  Gallery,
  HelpCircle,
  Info,
  PlantMark,
  Sprout,
} from "@/components/Icons";
import { Rich } from "@/components/Rich";
import type { T } from "@/i18n";

export function CameraMock({ t }: { t: T }) {
  return (
    <div className="app-camera">
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
          <span className="cam-circle">
            <Close />
          </span>
          <span className="cam-actions">
            <span className="cam-circle">
              <HelpCircle />
            </span>
            <span className="cam-circle">
              <Bolt />
            </span>
          </span>
        </div>
        <div className="cam-hint">
          <p className="cam-hint-title">{t("camera.hintTitle")}</p>
          <p className="cam-hint-text">
            <Rich t={t} k="camera.hintText" />
          </p>
        </div>
      </div>
      <div className="cam-tray">
        {[0, 1, 2].map((slot) => (
          <span key={slot} className="cam-thumb" style={{ ["--i" as string]: slot }}>
            <Sprout />
          </span>
        ))}
        <span className="cam-tray-label">{t("camera.tray")}</span>
      </div>

      <div className="cam-bar">
        <div className="cam-action">
          <span className="cam-side">
            <Gallery />
          </span>
          <span className="cam-label">{t("camera.gallery")}</span>
        </div>
        <div className="cam-action">
          <span className="cam-shutter">
            <span className="cam-core" />
          </span>
          <span className="cam-label">{t("camera.shutter")}</span>
        </div>
        <div className="cam-action">
          <span className="cam-side">
            <Info />
          </span>
          <span className="cam-label">{t("camera.tips")}</span>
        </div>
      </div>
    </div>
  );
}
