import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <main className="min-h-screen pt-32 pb-24 bg-sand-50">
      <Container narrow>
        <div className="text-center mb-16">
          <SectionHeading
            title={t("title")}
            subtitle={t("subtitle")}
            withLine
            align="center"
          />
        </div>

        {/* Survey CTA */}
        <div className="mb-10 bg-linear-to-br from-blush-50 to-sage-50 border border-sage-100 rounded-4xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-sage-800 mb-3">
              {t("survey.title")}
            </h2>
            <p className="font-sans text-sage-600 leading-relaxed max-w-lg">
              {t("survey.body")}
            </p>
          </div>
          <a
            href="https://forms.gle/MfcZ3p1XW6ByE45VA"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full font-sans text-sm font-medium bg-sage-400 text-white hover:bg-sage-500 active:bg-sage-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
          >
            {t("survey.cta")}
          </a>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-4xl shadow-xl shadow-sage-200/20 border border-sage-100">
          <ContactForm />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <h4 className="font-serif text-xl text-sage-800">Email</h4>
            <p className="text-sage-600">hola@olaviva.com</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-xl text-sage-800">Teléfono</h4>
            <p className="text-sage-600">+34 600 000 000</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-xl text-sage-800">Instagram</h4>
            <p className="text-sage-600">@olaviva_retiros</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
