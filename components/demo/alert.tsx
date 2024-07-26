import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <section className="mb-10">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Alert Component
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Despliega una alerta para llamar la atencion del usuario, estA compuesto
        de la siguiente manera:
      </p>

      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Alert: Contenedor principal</li>
        <li>AlertTitle: Titulo de la alerta</li>
        <li>AlertDescription: Descripcion de la alerta</li>
      </ul>
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </section>
  );
}
