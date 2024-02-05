import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function PricingSection(): JSX.Element {
  return (
    <section className="mx-8 flex h-auto flex-col items-center justify-center gap-12 py-12 md:mx-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[38px] font-bold">For This Little...</h2>
        <h3 className="text-[20px] text-muted-foreground">
          Only Pay when You Need Premium Features
        </h3>
      </div>

      {/* TODO: Pricing cards (122359) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex w-full flex-col gap-4 rounded-xl border border-foreground bg-gradient-to-br from-gradient-from via-gradient-through to-gradient-to p-6">
          <h3 className="text-2xl font-bold leading-none tracking-wide">
            Free Plan
          </h3>
          <p className="font-medium leading-[140%] text-foreground/80">
            Create up to 100 invoices and other documents in a year - completely
            free. Invoices, Quotations, Pro Forma, Expenses and more. No hidden
            charges.
          </p>

          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-fit border-secondary font-semibold tracking-wide"
            )}
          >
            Create Free Invoice Now
          </Link>
        </div>

        <div className="flex w-full flex-col gap-4 rounded-xl border border-foreground bg-gradient-to-br from-gradient-from via-gradient-through to-gradient-to p-6">
          <h3 className="text-2xl font-bold leading-none tracking-wide">
            Premium Plan
          </h3>
          <p className="font-medium leading-[140%] text-foreground/80">
            Manage your invoices better with additional premium features at
            minimal cost. Explore our premium features and enhance your
            workflow.
          </p>

          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-fit border-secondary font-semibold tracking-wide"
            )}
          >
            Explore Premium Features
          </Link>
        </div>
      </div>
    </section>
  )
}
