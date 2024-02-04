import { BackgroundEffect } from "@/components/landing/background-effect"
import { HeroSection } from "@/components/landing/hero-section"

export default function Home(): JSX.Element {
  return (
    <main className="relative h-full min-h-screen">
      <BackgroundEffect />
      <HeroSection />
    </main>
  )
}
