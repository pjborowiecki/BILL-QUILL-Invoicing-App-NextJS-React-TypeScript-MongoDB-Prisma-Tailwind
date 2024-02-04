import Balancer from "react-wrap-balancer"

import { steps } from "@/data/process"
import { cn } from "@/lib/utils"

export function ProcessSection(): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-gradient-to-br from-gradient-from via-gradient-through to-gradient-to px-8 py-16 md:px-20">
      <h2 className="text-[48px] font-black tracking-wide">
        <Balancer>Create Your Invoice in Less than 2 Minutes</Balancer>
      </h2>

      <div className="flex gap-24">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex size-10 items-center justify-center rounded-full border border-foreground text-lg font-bold">
              {index + 1}
            </div>
            <div
              className={cn(
                "flex flex-col whitespace-nowrap",
                step.subtitle && "pt-5"
              )}
            >
              <p className="text-lg font-semibold tracking-wide">
                {step.title}
              </p>
              <span className="text-base text-foreground/60">
                {step.subtitle && step.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
