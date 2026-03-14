import { cn } from "@/lib/utils";

type Level = "h1" | "h2" | "h3";
type Align = "left" | "center" | "right";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: Level;
  align?: Align;
  className?: string;
  /** Decorative line under subtitle */
  withLine?: boolean;
}

const titleSizeMap: Record<Level, string> = {
  h1: "text-display-xl",
  h2: "text-display",
  h3: "text-heading",
};

const alignMap: Record<Align, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function SectionHeading({
  title,
  subtitle,
  level: Tag = "h2",
  align = "center",
  className,
  withLine = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", alignMap[align], className)}>
      {subtitle && (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-400">
          {subtitle}
        </p>
      )}

      <Tag
        className={cn(
          "font-serif font-light text-sage-800",
          titleSizeMap[Tag]
        )}
      >
        {title}
      </Tag>

      {withLine && (
        <div
          className={cn(
            "h-px w-16 bg-blush-300",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto"
          )}
          aria-hidden
        />
      )}
    </div>
  );
}
