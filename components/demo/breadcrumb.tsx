import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbDemo() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Breadcrumb</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Displays a breadcrumb or a component that looks like a breadcrumb.
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Use the Breadcrumb component to create a breadcrumb.</li>
        <li>Use the BreadcrumbList component to create a breadcrumb list.</li>
        <li>Use the BreadcrumbItem component to create a breadcrumb item.</li>
        <li>Use the BreadcrumbLink component to create a breadcrumb link.</li>
        <li>Use the BreadcrumbPage component to create a breadcrumb page.</li>
        <li>
          Use the BreadcrumbSeparator component to create a breadcrumb
          separator.
        </li>
      </ul>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
