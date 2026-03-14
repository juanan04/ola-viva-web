"use client";

import { usePathname } from "@/i18n/navigation";
import Header from "./Header";
import Footer from "./Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

/**
 * Renders Header/Footer only on non-merch routes.
 * Merch routes have their own MerchHeader and no Footer.
 */
export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isMerch = pathname.startsWith("/merch");

  if (isMerch) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
