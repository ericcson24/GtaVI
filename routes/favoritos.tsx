import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import initMongodb from "../utils/database.ts";
import { Personaje } from "../utils/types.ts";
import PersonajeComponent from "../components/PersonajeComponent.tsx";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Personaje[]>) => {
    const db = await initMongodb();
    const result = await db.find().toArray();

    // Adaptar al tipo del front
    const personajes: Personaje[] = result.map((doc) => ({
      nombre: doc.name,
      imagen: doc.image,
      descripcion: doc.description,
      juego: doc.game,
    }));

    return ctx.render(personajes);
  },
};

export default function FavoritosPage({ data }: PageProps<Personaje[]>) {
  return (
    <div class="personaje-almacen">
      <h1 class="text-3xl font-bold mb-4"> Personajes Favoritos</h1>
      <div class="list-pokemon">
        {data.length > 0 ? (
          data.map((p) => <PersonajeComponent key={p.nombre} {...p} />)
        ) : (
          <p>No hay personajes aún. ¡Agrega alguno!</p>
        )}
      </div>
    </div>
  );
}
