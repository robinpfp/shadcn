import React from "react";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

export default function BadgeDemo() {
  const variantes = ["primary", "secondary", "destructive", "outline"];
  return (
    <div>
      <h2 className="text-2xl font-semibold">Badge</h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Displays a badge or a component that looks like a badge.
      </p>
      <div className="flex space-x-4 py-4">
        {variantes.map((variant: any) => (
          <Badge key={variant} variant={variant}>
            {variant}
          </Badge>
        ))}
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        You can use the badgeVariants helper to create a link that looks like a
        badge.
      </p>

      <Link href="#" className={badgeVariants({ variant: "outline" })}>
        Badge
      </Link>
    </div>
  );
}
