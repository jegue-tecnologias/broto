import { Rich } from "@/components/Rich";
import type { Lang } from "@/constants/languages";
import { ANCHORS } from "@/constants/routes";
import { list, type T } from "@/i18n";

import { ResultScreen } from "./mock/ResultScreen";
import { CameraScreen } from "./mock/CameraScreen";
import { PlantsScreen } from "./mock/PlantsScreen";

type Step = { n: string; title: string; text: string };

export function HowItWorks({ t, lang }: { t: T; lang: Lang }) {
  const steps = list<Step>(t, "how.steps");

  const shots = [
    <div key="cam" className="step-screen is-live is-dark">
      <CameraScreen
        labels={{
          close: t("camera.close"),
          help: t("camera.help"),
          flash: t("camera.flash"),
          hintTitle: t("camera.hintTitle"),
          hintLine1: t("camera.hintLine1"),
          hintLine2: t("camera.hintLine2"),
          left1: t("camera.left1"),
          left2: t("camera.left2"),
          full: t("camera.full"),
          analyze: t("camera.analyze"),
          gallery: t("camera.gallery"),
          shutter: t("camera.shutter"),
          tips: t("camera.tips"),
          tipsTitle: t("camera.tipsTitle"),
          tipsSubtitle: t("camera.tipsSubtitle"),
          tipsAction: t("camera.tipsAction"),
          tipsExtra: t("camera.tipsExtra"),
          tipsItems: list<{ title: string; text: string }>(
            t,
            "camera.tipsItems",
          ),
          zoomClose: t("mock.close"),
          zoomSave: t("mock.saveImage"),
        }}
      />
    </div>,
    <div key="app" className="step-screen is-live">
      <ResultScreen t={t} />
    </div>,
    <div key="plants" className="step-screen is-live">
      <PlantsScreen
        labels={{
          title: t("plants.title"),
          count: t("plants.count"),
          bell: t("plants.bell"),
          tabs: list<string>(t, "plants.tabs"),
          summaryTitle: t("plants.summaryTitle"),
          summaryDetail: t("plants.summaryDetail"),
          sectionTitle: t("plants.sectionTitle"),
          items: list<{ name: string; when: string }>(t, "plants.items"),
          tasksMonth: t("plants.tasksMonth"),
          days: list<{ weekday: string; number: string }>(t, "plants.days"),
          groups: list<{ name: string; place: string; tasks: string[] }>(
            t,
            "plants.groups",
          ),
          analysesNote: t("plants.analysesNote"),
          analyses: list<{ species: string; health: string; when: string }>(
            t,
            "plants.analyses",
          ),
        }}
      />
    </div>,
  ];

  return (
    <section id={ANCHORS[lang].how}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("how.eyebrow")}</p>
          <h2>{t("how.title")}</h2>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <div
              key={String(step.n)}
              className="step"
              style={{ ["--i" as string]: i }}
            >
              <span className="n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>
                <Rich t={t} k={`how.steps.${i}.text`} />
              </p>
              <div className="step-shot" aria-hidden="true">
                {shots[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
