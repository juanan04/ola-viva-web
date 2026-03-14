export interface FAQItem {
  id: string;
  /** i18n key for the question */
  questionKey: string;
  /** i18n key for the answer */
  answerKey: string;
}

export interface FAQGroup {
  /** Destination slug or "general" for global FAQ */
  destinationSlug: string | "general";
  /** i18n key for the group heading */
  categoryKey: string;
  items: FAQItem[];
}
