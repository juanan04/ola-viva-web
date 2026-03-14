import { DESTINATIONS } from "@/data/destinations";
import { routing } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olaviva.com";

/**
 * JSON-LD structured data for Organization (placed in root layout).
 */
export function OrganizationJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OLA VIVA",
        url: BASE_URL,
        logo: `${BASE_URL}/images/logo/ola-viva-logo.png`,
        description:
            "Agencia de retiros espirituales en grupo inmersos en la naturaleza. Where every wave is a liberation and life flourishes.",
        sameAs: [
            "https://instagram.com/olaviva_retiros",
            "https://facebook.com/olaviva",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "hola@olaviva.com",
            contactType: "customer service",
            availableLanguage: ["Spanish", "English"],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

/**
 * JSON-LD for FAQPage (used on destination pages and general FAQ sections).
 */
export function FAQPageJsonLd({
    items,
}: {
    items: { question: string; answer: string }[];
}) {
    if (!items.length) return null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

/**
 * JSON-LD for TravelAgency (more specific than Organization).
 */
export function TravelAgencyJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "OLA VIVA",
        url: BASE_URL,
        description:
            "Retiros espirituales en grupo inmersos en la naturaleza. Montaña, nieve, playas e islas.",
        priceRange: "€€-€€€",
        address: {
            "@type": "PostalAddress",
            addressCountry: "ES",
        },
        areaServed: DESTINATIONS.map((d) => ({
            "@type": "Place",
            name: d.slug.replace(/-/g, " "),
        })),
        availableLanguage: routing.locales.map((l) => ({
            "@type": "Language",
            name: l === "es" ? "Spanish" : "English",
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
