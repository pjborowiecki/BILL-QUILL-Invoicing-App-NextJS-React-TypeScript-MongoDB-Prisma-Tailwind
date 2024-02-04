import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function HeroSection(): JSX.Element {
  return (
    <section className="grid h-auto grid-cols-1 gap-8 px-8 pt-[calc(80px+96px)] md:grid-cols-2 md:px-20">
      <div className="flex flex-col space-y-4 py-8">
        <h2 className="text-[38px] font-bold leading-[140%]">
          <Balancer>
            Convenient Invoice Management <br />
            <span className="text-[54px] font-black text-primary/70">
              for Busy Professionals
            </span>
          </Balancer>
        </h2>
        <h3 className="text-[28px] leading-[130%] text-muted-foreground">
          <Balancer>
            Easily create, manage, and track invoices. <br />
            <span>Download as PDF, email, share, and print.</span>
          </Balancer>
        </h3>

        <div className="flex items-center gap-2 py-4">
          <Link
            href="/features"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "items-center gap-2"
            )}
            aria-label="Find Out More"
          >
            <Icons.info className="size-5" aria-hidden="true" />
            <span>Find Out More</span>
          </Link>
          <Link
            href="/signup"
            className={cn(buttonVariants(), "items-center gap-2")}
            aria-label="Sign up"
          >
            <Icons.squarePen className="size-5" aria-hidden="true" />
            <span>Create Your First Invoice</span>
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/images/hero-app-preview.jpeg"
          fill
          alt="App preview"
          className="rounded-2xl border object-fill"
        />
      </div>
    </section>
  )
}
