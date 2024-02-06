import * as z from "zod"

export const newInvoiceSchema = z.object({
  // TODO: Improve validation (make it more specific)
  headerText: z.string(),
  name: z.string(),
  companyName: z.string(),
  companyAddress: z.string(),
  city: z.string(),
  country: z.string(),
  logo: z.string(),
  billTo: z.string(),
})

export type NewInvoiceFormInput = z.infer<typeof newInvoiceSchema>
