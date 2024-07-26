import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <section>
      <div className="mb-10">
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Accordion Component
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Un conjunto de títulos interactivos apilados verticalmente y cada uno
          de los cuales revela una sección de contenido. Los tipos son:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>single: solo un elemento puede estar abierto a la vez.</li>
          <li>multiple: varios elementos pueden estar abiertos a la vez.</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Puedes tener un valor predeterminado abierto con la propiedad
          defaultValue. La propiedad collapsible permite que todos los elementos
          se cierren.
        </p>
      </div>
      <Accordion type="single" collapsible defaultValue="item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>This is the item-1</AccordionTrigger>
          <AccordionContent>Yes. This is the item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>This is the item-2</AccordionTrigger>
          <AccordionContent>Yes. This is the item 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>This is the item-3</AccordionTrigger>
          <AccordionContent>Yes. This is the item 3</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
