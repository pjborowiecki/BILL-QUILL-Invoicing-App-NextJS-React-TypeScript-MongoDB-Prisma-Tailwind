import * as React from "react"

import { Header } from "@/components/navigation/landing/header"

interface LandingPageLayoutProps {
  children: React.ReactNode
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
