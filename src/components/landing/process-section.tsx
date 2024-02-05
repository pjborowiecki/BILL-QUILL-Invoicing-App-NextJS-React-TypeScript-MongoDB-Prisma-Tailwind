import Balancer from "react-wrap-balancer"

import { steps } from "@/data/process"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function ProcessSection(): JSX.Element {
  return (
    <section className="mx-8 mt-12 flex h-auto flex-col items-center justify-center gap-4 rounded-2xl border border-primary bg-gradient-to-br from-gradient-from via-gradient-through to-gradient-to pb-14 pt-12">
      <h2 className="text-[42px] font-black tracking-wide">
        <Balancer>Create Your Invoice in Less Than 2 Minutes</Balancer>
      </h2>

      <div className="flex gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full border border-foreground text-lg font-bold">
                {index + 1}
              </div>
              <div
                className={cn(
                  "flex flex-col whitespace-nowrap",
                  step.subtitle && "pt-[22px]"
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
            {index < steps.length - 1 && (
              <Icons.chevronRight
                className="size-9 text-primary/60"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
