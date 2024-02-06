"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { InvoiceEditor } from "@/components/app/invoice-editor"
import { InvoicePreview } from "@/components/app/invoice-preview"
import { BackgroundEffect } from "@/components/background-effect"
import { Icons } from "@/components/icons"

export default function NewInvoicePage(): JSX.Element {
  const [preview, setPreview] = React.useState<boolean>(false)

  return (
    <div className="px-8 pt-[calc(80px+0px)]">
      <BackgroundEffect />

      {/* TODO: Implement buttons as a separate component */}
      <div className="relative mx-auto flex w-full max-w-5xl justify-between pb-6 pt-8">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2 bg-background"
            aria-label="Download invoice"
          >
            <Icons.download
              className="size-4 text-primary"
              aria-hidden="true"
            />
            <span>Download</span>
            <span className="sr-only">Download</span>
          </Button>

          <Button
            variant="outline"
            className="gap-2 bg-background"
            aria-label="Print invoice"
          >
            <Icons.printer className="size-4 text-primary" aria-hidden="true" />
            <span>Print</span>
            <span className="sr-only">Print</span>
          </Button>

          <Button
            variant="secondary"
            className="gap-2"
            onClick={() => setPreview((prev) => !prev)}
            aria-label="Toggle between editor and preview mode"
          >
            {preview ? (
              <>
                <Icons.edit
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                <span>Editor</span>
                <span className="sr-only">Editor</span>
              </>
            ) : (
              <>
                <Icons.preview
                  className="size-4 text-primary"
                  aria-hidden="true"
                />
                <span>Preview</span>
                <span className="sr-only">Preview</span>
              </>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="gap-2 bg-background"
            aria-label="Save invoice online"
          >
            <Icons.save className="size-4 text-primary" aria-hidden="true" />
            <span>Save Online</span>
            <span className="sr-only">Save Online</span>
          </Button>

          <Button
            variant="outline"
            className="gap-2 bg-background"
            aria-label="Send invoice via email"
          >
            <Icons.send className="size-4 text-primary" aria-hidden="true" />
            <span>Send</span>
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>

      {preview ? <InvoicePreview /> : <InvoiceEditor />}
    </div>
  )
}
