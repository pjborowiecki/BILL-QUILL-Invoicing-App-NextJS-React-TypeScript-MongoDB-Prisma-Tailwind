import Link from "next/link"

import { siteConfig } from "@/config/site"
import { navItems } from "@/data/nav-items"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-[50] mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-1">
        <Link href="/" aria-label="Go to home page">
          <Icons.logo className="size-8 text-primary/80" aria-hidden="true" />
        </Link>
        <span className="text-xl font-bold leading-none tracking-wide text-primary">
          {siteConfig.name}
        </span>
      </div>
      <div className="flex items-center whitespace-nowrap">
        <div className="hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "px-4 text-base font-medium text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className={cn(buttonVariants({ variant: "ghost" }), "text-base")}
            aria-label="Sign in"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className={buttonVariants()}
            aria-label="Sign up"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
