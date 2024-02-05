import Balancer from "react-wrap-balancer"

import { frequentlyAskedQuestions } from "@/data/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    // TODO: Customize questions and answers
    <section className="mx-8 flex h-auto flex-col items-center justify-center gap-12 py-12 md:mx-20">
      <h2 className="text-[38px] font-bold">Ask No More! We Got You</h2>
      <div className="grid w-full gap-4 px-24 sm:gap-6">
        {frequentlyAskedQuestions.map((item) => (
          <Accordion key={item.question} type="single" collapsible>
            <AccordionItem value={item.question}>
              <AccordionTrigger className="sm:text-xl sm:leading-8">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground sm:text-lg sm:leading-8">
                <Balancer>{item.answer}</Balancer>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  )
}
