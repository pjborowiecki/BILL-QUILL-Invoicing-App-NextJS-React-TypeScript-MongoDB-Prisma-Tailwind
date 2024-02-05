import { BackgroundEffect } from "@/components/landing/background-effect"
import { FeaturesSection } from "@/components/landing/features-section"
import { HeroSection } from "@/components/landing/hero-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { ProcessSection } from "@/components/landing/process-section"

export default function Home(): JSX.Element {
  return (
    <main className="relative h-full min-h-screen">
      <BackgroundEffect />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  )
}
