import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ENVIRONMENT_GRADIENTS } from "@/data/destinations";
import type { Destination } from "@/types/destination";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  active?: boolean;
}

export default function DestinationCard({
  destination,
  active = false,
}: DestinationCardProps) {
  const t = useTranslations();
  const gradient = ENVIRONMENT_GRADIENTS[destination.environment];
  const cover = destination.coverImage;

  return (
    <article
      className={cn(
        "relative flex h-[520px] w-[340px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl transition-all duration-500 md:w-[400px]",
        active
          ? "scale-100 opacity-100 shadow-2xl"
          : "scale-95 opacity-60 shadow-md"
      )}
      style={cover ? undefined : { background: gradient }}
      aria-label={t(destination.titleKey as any)}
    >
      {/* Cover image */}
      {cover && (
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={cover.blurDataURL}
          sizes="(max-width: 768px) 340px, 400px"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Price badge top-right */}
      <div className="absolute right-4 top-4">
        <span className="inline-block rounded-full bg-sage-400/90 px-3 py-1 font-sans text-sm font-semibold text-white backdrop-blur-sm">
          {destination.price} €
        </span>
      </div>

      {/* Card content */}
      <div className="relative z-10 p-6">
        <p className="mb-1 font-sans text-xs font-medium uppercase tracking-widest text-white/70">
          {t(destination.taglineKey as any)}
        </p>
        <h3 className="mb-2 font-serif text-3xl font-light leading-tight text-white">
          {t(destination.titleKey as any)}
        </h3>
        <p className="mb-4 font-sans text-xs text-white/60">
          {destination.durationDays} días · max {destination.maxPeople} personas
        </p>

        <Link
          href={`/destinations/${destination.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 font-sans text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          {t("destinations.learnMore")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
