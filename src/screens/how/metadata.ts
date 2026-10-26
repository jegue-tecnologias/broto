import type { Metadata } from "next";

import { LOCALE_BY_LANG, type Lang } from "@/constants/languages";
import { asset } from "@/constants/site";
import { getT } from "@/i18n";

export function howMetadata(lang: Lang): Metadata {
  const t = getT(LOCALE_BY_LANG[lang], "home");

  const title = t("how.metaTitle");
  const description = t("how.metaDescription");

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      images: [asset("/mark.png")],
    },
  };
}
