import { NewInvoiceForm } from "@/components/forms/invoice/new-invoice-form"

export function InvoiceEditor(): JSX.Element {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-lg border border-border bg-card/85 p-12 text-card-foreground">
      <NewInvoiceForm />
    </div>
  )
}
