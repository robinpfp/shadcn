import React from "react";
import { ModeToggle } from "@/components/toggle";
import AccordionDemo from "@/components/demo/accordion";
import AlertDemo from "@/components/demo/alert";
import AlertDialogDemo from "@/components/demo/alert-dialog";
import AvatarDemo from "@/components/demo/avatar";
import BadgeDemo from "@/components/demo/badge";
import BreadcrumbDemo from "@/components/demo/breadcrumb";
import CalendarDemo from "@/components/demo/calendar";

export default function page() {
  return (
    <div className="mx-auto px-10 max-w-2xl">
      <div className="flex justify-end py-5">
        <ModeToggle />
      </div>
      <section>
        <AccordionDemo />
        <AlertDemo />
        <AlertDialogDemo />
        <AvatarDemo />
        <BadgeDemo />
        <BreadcrumbDemo />
        <CalendarDemo />
      </section>
    </div>
  );
}
