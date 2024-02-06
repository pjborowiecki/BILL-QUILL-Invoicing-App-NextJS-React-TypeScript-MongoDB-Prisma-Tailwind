import * as React from "react"

interface LandingPageLayoutProps {
  children: React.ReactNode
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps): JSX.Element {
  return <div>{children}</div>
}
