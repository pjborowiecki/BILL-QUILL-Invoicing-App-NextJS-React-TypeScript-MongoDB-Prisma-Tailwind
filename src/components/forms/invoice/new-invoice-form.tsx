"use client"

import * as React from "react"
import {
  newInvoiceSchema,
  type NewInvoiceFormInput,
} from "@/validations/invoice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  UncontrolledFormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export function NewInvoiceForm(): JSX.Element {
  const { toast } = useToast()
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<NewInvoiceFormInput>({
    resolver: zodResolver(newInvoiceSchema),
    defaultValues: {
      headerText: "Invoice",
    },
  })

  function onSubmit(formData: NewInvoiceFormInput) {
    startTransition(() => {
      // TODO: ASYNC THIS
      try {
        console.log(formData)
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="flex items-center justify-between gap-8">
          {/* <label
            htmlFor="dropzone-file"
            className="flex h-28 w-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-secondary/20 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 whitespace-nowrap leading-none">
              <Icons.upload className="size-6" />
              <p className="text-sm font-semibold tracking-wide">Upload logo</p>
              <p className="text-xs text-muted-foreground">
                PNG (MAX.240x240px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden"></input>
          </label> */}

          <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
              <label
                htmlFor="dropzone-file"
                className="flex h-28 min-h-28 w-52 min-w-52 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-secondary/20 text-center"
              >
                <div className="flex flex-col items-center justify-center gap-2 whitespace-nowrap leading-none">
                  <Icons.upload className="size-6" />
                  <p className="text-sm font-semibold tracking-wide">
                    Upload logo
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG (MAX.240x240px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  {...field}
                />
              </label>
            )}
          />

          <FormField
            control={form.control}
            name="headerText"
            render={({ field }) => (
              <FormItem className="mr-8 w-full">
                <FormLabel className="hidden">Header Text</FormLabel>
                <FormControl className="h-16 border-none">
                  <Input
                    placeholder="Header Text"
                    {...field}
                    className="text-ellipsis whitespace-nowrap text-end text-5xl font-medium uppercase leading-none tracking-wide"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">Name</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="Your Name"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">Company Name</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="Your Company"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">Company Address</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="Company Address"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">City</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="City, State, Zip"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">Country</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="Country"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8">
          <FormField
            control={form.control}
            name="billTo"
            render={({ field }) => (
              <FormItem className="w-full md:w-1/2">
                <FormLabel className="hidden">Bill To</FormLabel>
                <FormControl className="border-none">
                  <Input
                    placeholder="Bill To"
                    {...field}
                    className="!my-0 text-ellipsis whitespace-nowrap"
                  />
                </FormControl>
                <FormMessage className="pt-2 sm:text-sm" />
              </FormItem>
            )}
          />
        </div>

        {/* <FormItem>
          <FormLabel>Logo</FormLabel>
          <FormControl className="relative"></FormControl>
        </FormItem> */}

        <Button disabled={isPending} className="mt-8 w-fit">
          {isPending ? (
            <>
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
              <span>Saving...</span>
            </>
          ) : (
            <span>Save Changes</span>
          )}
          <span className="sr-only">Save Changes</span>
        </Button>
      </form>
    </Form>
  )
}
