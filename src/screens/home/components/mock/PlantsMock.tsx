import { Bell, ChevronRight, Drop, Sprout } from "@/components/Icons";
import { list, type T } from "@/i18n";

const DOTS = ["dot-today", "dot-soon", "dot-far", "dot-far"];

export function PlantsMock({ t }: { t: T }) {
  const items = list<{ name: string; when: string }>(t, "plants.items");

  return (
    <div className="app-plants">
      <div className="pl-top">
        <div className="pl-title-group">
          <p className="pl-title">{t("plants.title")}</p>
          <p className="pl-count">{t("plants.count")}</p>
        </div>
        <span className="pl-bell" aria-label={t("plants.bell")}>
          <Bell />
        </span>
      </div>

      <div className="pl-tabs">
        {list<string>(t, "plants.tabs").map((tab, i) => (
          <span key={tab} className={i === 0 ? "is-on" : undefined}>
            {tab}
          </span>
        ))}
      </div>

      <div className="pl-summary">
        <span className="pl-summary-icon">
          <Drop />
        </span>
        <div className="pl-summary-texts">
          <p className="pl-summary-title">{t("plants.summaryTitle")}</p>
          <p className="pl-summary-detail">{t("plants.summaryDetail")}</p>
        </div>
        <span className="pl-summary-go">
          <ChevronRight />
        </span>
      </div>

      <p className="pl-section">{t("plants.sectionTitle")}</p>

      <div className="pl-list">
        {items.map((item, i) => (
          <div key={String(item.name)} className="pl-card">
            <span className="pl-thumb">
              <Sprout />
            </span>
            <div className="pl-texts">
              <p className="pl-name">{item.name}</p>
              <p className="pl-meta">
                <i className={DOTS[i]} />
                <span>{item.when}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
