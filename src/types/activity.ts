export type ActivityCategory = "movement" | "inner-peace" | "creativity";

export interface ActivityImage {
  src: string;
  alt: string;
  blurDataURL: string;
  width: number;
  height: number;
}

export interface Activity {
  id: string;
  slug: string;
  category: ActivityCategory;
  /** i18n key */
  titleKey: string;
  /** i18n key */
  descriptionKey: string;
  /** SVG icon name or path in /public/svg/ */
  icon: string;
  image: ActivityImage;
  /** e.g. "60-90 min" */
  duration?: string;
  difficulty?: "beginner" | "intermediate" | "all-levels";
}
