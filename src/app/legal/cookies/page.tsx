import LegalPage from "@/components/legal/LegalPage";
import { useTranslations } from "next-intl";

export default function CookiesPage() {
  const t = useTranslations("legal.cookies");
  const common = useTranslations("legal");

  const sections = [
    {
      heading: t("s1.h"),
      body: t("s1.b"),
    },
    {
      heading: t("s2.h"),
      body: [
        t("s2.b.0"),
        t("s2.b.1"),
        t("s2.b.2"),
      ],
    },
    {
      heading: t("s3.h"),
      body: t("s3.b"),
    },
    {
      heading: t("s4.h"),
      body: [
        t("s4.b.0"),
        t("s4.b.1"),
        t("s4.b.2"),
      ],
    },
    {
      heading: t("s5.h"),
      body: [
        t("s5.b.0"),
        t("s5.b.1"),
      ],
    },
    {
      heading: t("s6.h"),
      body: t("s6.b"),
    },
  ];

  return (
    <LegalPage
      titleKey={t("title")}
      sections={sections}
      lastUpdated={common("lastUpdated")}
    />
  );
}
