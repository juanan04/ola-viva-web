import type { MetadataRoute } from "next";
import { DESTINATIONS } from "@/data/destinations";
import { routing } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olaviva.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ["", "/about", "/destinations", "/gallery", "/contact"];

    const entries: MetadataRoute.Sitemap = [];

    // Static pages for each locale
    for (const route of staticRoutes) {
        for (const locale of routing.locales) {
            const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
            entries.push({
                url: `${BASE_URL}${prefix}${route}`,
                lastModified: new Date(),
                changeFrequency: route === "" ? "weekly" : "monthly",
                priority: route === "" ? 1 : 0.8,
                alternates: {
                    languages: Object.fromEntries(
                        routing.locales.map((l) => [
                            l,
                            `${BASE_URL}${l === routing.defaultLocale ? "" : `/${l}`}${route}`,
                        ])
                    ),
                },
            });
        }
    }

    // Dynamic destination pages
    for (const dest of DESTINATIONS) {
        for (const locale of routing.locales) {
            const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
            entries.push({
                url: `${BASE_URL}${prefix}/destinations/${dest.slug}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: {
                    languages: Object.fromEntries(
                        routing.locales.map((l) => [
                            l,
                            `${BASE_URL}${l === routing.defaultLocale ? "" : `/${l}`}/destinations/${dest.slug}`,
                        ])
                    ),
                },
            });
        }
    }

    return entries;
}
