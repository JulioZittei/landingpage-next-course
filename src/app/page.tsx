import { cn } from "@/lib/utils";
import { ThemeToggle } from "./_components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { IntroSection } from "./_components/intro-section";
import { AboutSection } from "./_components/about-section";
import { FeatureSection } from "./_components/feature-section";
import { InvestmentSection } from "./_components/investment-section";
import { FaqSection } from "./_components/faq-section";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <InvestmentSection />
      <FaqSection />
    </main>
  );
}
