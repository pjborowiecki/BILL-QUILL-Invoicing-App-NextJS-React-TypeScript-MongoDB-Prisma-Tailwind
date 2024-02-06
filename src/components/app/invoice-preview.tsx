import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InvoicePreview(): JSX.Element {
  return (
    <Card className="mx-auto w-full max-w-5xl rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg leading-none tracking-wide">
          Invoice Preview
        </CardTitle>
      </CardHeader>
      <CardContent>Preview</CardContent>
    </Card>
  )
}
