import { Link } from "@/components/Link";

import { Apple, Play } from "@/components/Icons";
import type { Lang } from "@/constants/languages";
import { DOC_PATHS } from "@/constants/routes";
import type { T } from "@/i18n";

export function Download({ t, lang }: { t: T; lang: Lang }) {
  const stores = [
    { Icon: Apple, lead: t("download.soonApple"), name: t("download.apple") },
    { Icon: Play, lead: t("download.soonGoogle"), name: t("download.google") },
  ];

  return (
    <section id="baixar" className="band download">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{t("download.eyebrow")}</p>
          <h2>{t("download.title")}</h2>
          <p>{t("download.text")}</p>
        </div>

        <div className="stores">
          {stores.map((store, i) => (
            <span
              key={store.name}
              className="store"
              style={{ ["--i" as string]: i }}
            >
              <span className="store-mark">
                <store.Icon />
              </span>

              <span className="store-text">
                <small>{store.lead}</small>
                <b>{store.name}</b>
              </span>
            </span>
          ))}
        </div>

        <p className="download-help">
          {t("download.help")}{" "}
          <Link href={DOC_PATHS[lang].help}>{t("download.helpLink")}</Link>
        </p>
      </div>
    </section>
  );
}
