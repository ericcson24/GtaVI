import { Handlers, PageProps } from "$fresh/server.ts";
import LeonidaPanel from "../../components/LeonidaPanel.tsx";

interface CiudadData {
  nombre: string;
}

export const handler: Handlers = {
  GET: async (_req, ctx) => {
    const ciudad = ctx.params.name.toLowerCase();

    if (ciudad !== "leonida") {
      return ctx.renderNotFound();
    }

    return ctx.render({ nombre: ciudad });
  },
};

export default function CiudadPage({ data }: PageProps<{ nombre: string }>) {
  // En el futuro: puedes usar un switch por ciudad si añades más paneles únicos
  if (data.nombre === "leonida") {
    return <LeonidaPanel />;
  }

  return <div>Ciudad no disponible</div>; // fallback defensivo
}
