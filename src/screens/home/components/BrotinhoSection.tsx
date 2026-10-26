import type { T } from "@/i18n";

import { ChatScreen } from "./mock/ChatScreen";

export function BrotinhoSection({ t }: { t: T }) {
  const labels = {
    time: t("mock.time"),
    back: t("brotinho.back"),
    menu: t("brotinho.menu"),
    header: t("brotinho.header"),
    subtitle: t("brotinho.subtitle"),
    greeting: t("brotinho.greeting"),
    ask: t("brotinho.ask"),
    answer: t("brotinho.answer"),
    ask2: t("brotinho.ask2"),
    answer2: t("brotinho.answer2"),
    field: t("brotinho.field"),
    listening: t("brotinho.listening"),
    gallery: t("brotinho.gallery"),
    camera: t("brotinho.camera"),
    mic: t("brotinho.mic"),
    cancel: t("brotinho.cancel"),
  };

  return (
    <section id="brotinho" className="is-feature">
      <div className="wrap split">
        <div>
          <p className="eyebrow">{t("brotinho.eyebrow")}</p>
          <h2>{t("brotinho.title")}</h2>
          <p>{t("brotinho.text")}</p>
        </div>

        <ChatScreen labels={labels} />
      </div>
    </section>
  );
}
