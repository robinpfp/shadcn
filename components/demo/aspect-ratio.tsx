import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function AspectRatioDemo() {
  return (
    <section>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Aspect Ratio Component
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Un componente que mantiene la relación de aspecto de su hijo.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        La relación de aspecto se puede establecer con la propiedad ratio.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        La relación de aspecto predeterminada es 1:1.
      </p>
      <div className="w-[450px] mt-10">
        <AspectRatio ratio={1 / 1}>
          <Image
            src="/next.svg"
            alt="Image"
            className="rounded-md object-cover"
            width={450}
            height={450}
            // layout="fill"
          />
        </AspectRatio>
      </div>
    </section>
  );
}
