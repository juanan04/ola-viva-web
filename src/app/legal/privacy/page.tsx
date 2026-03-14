import LegalPage from "@/components/legal/LegalPage";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("legal.privacy");
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
        t("s2.b.3"),
      ],
    },
    {
      heading: t("s3.h"),
      body: [
        t("s3.b.0"),
        t("s3.b.1"),
        t("s3.b.2"),
        t("s3.b.3"),
      ],
    },
    {
      heading: t("s4.h"),
      body: t("s4.b"),
    },
    {
      heading: t("s5.h"),
      body: t("s5.b"),
    },
    {
      heading: t("s6.h"),
      body: t("s6.b"),
    },
    {
      heading: t("s7.h"),
      body: [
        t("s7.b.0"),
        t("s7.b.1"),
        t("s7.b.2"),
        t("s7.b.3"),
        t("s7.b.4"),
        t("s7.b.5"),
      ],
    },
    {
      heading: t("s8.h"),
      body: t("s8.b"),
    },
    {
      heading: t("s9.h"),
      body: t("s9.b"),
    },
    {
      heading: t("s10.h"),
      body: t("s10.b"),
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
