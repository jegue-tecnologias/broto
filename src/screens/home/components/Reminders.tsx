import { Rich } from "@/components/Rich";
import type { T } from "@/i18n";

import { LockMock } from "./mock/LockMock";

export function Reminders({ t }: { t: T }) {
  return (
    <section id="lembretes">
      <div className="wrap split">
        <div className="phone is-small">
          <LockMock t={t} />
        </div>
        <div>
          <p className="eyebrow">{t("reminders.eyebrow")}</p>
          <h2>{t("reminders.title")}</h2>
          <p>
            <Rich t={t} k="reminders.first" />
          </p>
          <p>{t("reminders.second")}</p>
        </div>
      </div>
    </section>
  );
}
