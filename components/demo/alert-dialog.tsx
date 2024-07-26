import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AlertDialogDemo() {
  return (
    <section className="mb-10">
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        AlertDialog Component
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Despliega una alerta para llamar la atencion del usuario, estA compuesto
        de la siguiente manera:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>AlertDialog: Contenedor principal</li>
        <li>AlertDialogTrigger: Boton que activa la alerta</li>
        <li>AlertDialogContent: Contenido de la alerta</li>
        <li>AlertDialogHeader: Encabezado de la alerta</li>
        <li>AlertDialogTitle: Titulo de la alerta</li>
        <li>AlertDialogDescription: Descripcion de la alerta</li>
        <li>AlertDialogFooter: Pie de la alerta</li>
        <li>AlertDialogAction: Boton de accion</li>
        <li>AlertDialogCancel: Boton de cancelar</li>
      </ul>
      <AlertDialog>
        <AlertDialogTrigger>Click here for example</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
