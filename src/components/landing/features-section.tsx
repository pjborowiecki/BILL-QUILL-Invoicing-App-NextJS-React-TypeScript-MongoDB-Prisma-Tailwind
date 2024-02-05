import { features } from "@/data/features"
import { BackgroundEffect } from "@/components/landing/background-effect"

import { Icons } from "../icons"

export function FeaturesSection(): JSX.Element {
  return (
    <section className="relative mx-8 flex h-auto flex-col items-center justify-center gap-16 py-24 md:mx-20">
      <BackgroundEffect />

      <h2 className="text-[38px] font-bold">With This Much and More...</h2>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = Icons[feature.icon as keyof typeof Icons]

          return (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6"
            >
              <Icon className="size-7 text-primary" />
              <div className="space-y-4">
                <h3 className="whitespace-nowrap text-[18px] font-bold leading-none tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm leading-[150%] text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
