import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

export default function PhilosophySection() {
    const t = useTranslations("about");

    const values = ["nature", "community", "transformation"] as const;

    return (
        <section className="py-24 bg-sand-50 text-sage-900 border-t border-sage-200/50">
            <Container>
                <div className="max-w-4xl mx-auto text-center space-y-8 mb-20 md:mb-28">
                    <h2 className="font-serif text-heading">{t("philosophy.title")}</h2>
                    <p className="font-sans text-lg md:text-xl text-sage-700 leading-relaxed balance-text">
                        {t("philosophy.body")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
                    {values.map((v) => (
                        <div key={v} className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-2">
                                <span className="text-2xl text-sage-600">✽</span>
                            </div>
                            <h3 className="font-serif text-2xl text-sage-800">
                                {t(`values.${v}.title`)}
                            </h3>
                            <p className="font-sans text-sage-600 leading-relaxed">
                                {t(`values.${v}.body`)}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
