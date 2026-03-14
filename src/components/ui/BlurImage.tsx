import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BlurImageProps extends Omit<ImageProps, "placeholder"> {
  /** Base64 blur placeholder. Falls back to a branded sage-toned color. */
  blurDataURL?: string;
  containerClassName?: string;
}

/** Default sage-400 micro blur placeholder (1×1 px, base64 PNG). */
const DEFAULT_BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

/**
 * next/image wrapper with automatic blur placeholder.
 * Always uses `sizes` prop for responsive images.
 * Only above-fold images should pass `priority`.
 */
export default function BlurImage({
  blurDataURL,
  containerClassName,
  className,
  alt,
  ...props
}: BlurImageProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL ?? DEFAULT_BLUR}
        alt={alt}
        className={cn("object-cover", className)}
        {...props}
      />
    </div>
  );
}
