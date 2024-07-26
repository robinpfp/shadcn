import React from "react";
import { ModeToggle } from "@/components/toggle";
import AccordionDemo from "@/components/demo/accordion";
import AlertDemo from "@/components/demo/alert";
import AlertDialogDemo from "@/components/demo/alert-dialog";
import AspectRatioDemo from "@/components/demo/aspect-ratio";
import AvatarDemo from "@/components/demo/avatar";
import BadgeDemo from "@/components/demo/badge";
import BreadcrumbDemo from "@/components/demo/breadcrumb";

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
        {/* <AspectRatioDemo /> */}
        <AvatarDemo />
        <BadgeDemo />
        <BreadcrumbDemo />
      </section>
    </div>
  );
}
