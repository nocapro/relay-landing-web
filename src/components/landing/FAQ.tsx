import { faq } from "@/content/landing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">{faq.title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.items.map((item, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}