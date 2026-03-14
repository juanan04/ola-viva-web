import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

interface Section {
  heading: string;
  body: string | string[];
}

interface LegalPageProps {
  titleKey: string;
  sections: Section[];
  lastUpdated: string;
}

export default function LegalPage({ titleKey, sections, lastUpdated }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-sand-50 pt-24 pb-section">
      <Container narrow>
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-xs text-sage-500 hover:text-sage-700 transition-colors mb-10 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
            <path d="M9 2L4 7l5 5" />
          </svg>
          Inicio
        </Link>

        {/* Header */}
        <div className="mb-12 pb-10 border-b border-sand-300">
          <p className="font-sans text-xs uppercase tracking-widest text-sage-400 mb-3">
            OLA VIVA — Legal
          </p>
          <h1 className="font-serif text-heading text-sage-800 mb-4">{titleKey}</h1>
          <p className="font-sans text-xs text-sage-400">{lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-xl text-sage-700 mb-3">{section.heading}</h2>
              {Array.isArray(section.body) ? (
                <ul className="space-y-2">
                  {section.body.map((item, j) => (
                    <li key={j} className="flex gap-2 font-sans text-sm text-sage-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage-300 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-sans text-sm text-sage-600 leading-relaxed">{section.body}</p>
              )}
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-10 border-t border-sand-300">
          <p className="font-sans text-xs text-sage-400 leading-relaxed">
            Si tienes preguntas sobre estas políticas, puedes contactarnos en{" "}
            <Link href="/contact" className="text-sage-600 underline underline-offset-2 hover:text-sage-800 transition-colors">
              nuestra página de contacto
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
