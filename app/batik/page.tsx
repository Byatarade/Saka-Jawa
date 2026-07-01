import type { Metadata } from "next";
import BatikHeroSection from "@/components/batik/BatikHeroSection";
import BatikAboutSection from "@/components/batik/BatikAboutSection";
import BatikMotifSection from "@/components/batik/BatikMotifSection";
import BatikQuotesSection from "@/components/batik/BatikQuotesSection";
import BatikCeritaSection from "@/components/batik/BatikCeritaSection";
import BatikGallerySection from "@/components/batik/BatikGallerySection";
import BatikInteractiveMapSection from "@/components/batik/BatikInteractiveMapSection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.batik;
import SharedNavbar from "@/components/shared/SharedNavbar";

export default function BatikPage() {
  return (
    <main>
      <SharedNavbar />
      <BatikHeroSection />
      <BatikAboutSection />
      <BatikMotifSection />
      <BatikQuotesSection />
      <BatikCeritaSection />
      <BatikGallerySection />
      <BatikInteractiveMapSection />
    </main>
  );
}
