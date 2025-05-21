import { Handlers, PageProps } from "$fresh/server.ts";
import initCiudadesDB from "../utils/databaseCiudades.ts";
import { CiudadModel } from "../utils/types.ts";
import { ciudadesValidas } from "../utils/ciudadesValidas.ts";

// 💡 Esto recupera las ciudades favoritas desde MongoDB
export const handler: Handlers<CiudadModel[]> = {
  async GET(_req, ctx) {
    const db = await initCiudadesDB();
    const ciudades = await db.find().toArray();
    return ctx.render(ciudades);
  },
};

// 💡 Esto renderiza la página
export default function FavoritosPage({ data }: PageProps<CiudadModel[]>) {
  const ciudades = data ?? [];

  return (
    <div class="favoritos-ciudades-container">
      <h1 class="titulo-favoritos">Ciudades Favoritas</h1>
      <div class="panel-ciudades-favoritas">
        {ciudades.length > 0 ? (
          ciudades.map((ciudad) => {
            const ciudadValida = ciudadesValidas.find(
              (c) => c.nombre.toLowerCase() === ciudad.nombre.toLowerCase()
            );
            const ruta = ciudadValida ? ciudadValida.ruta : ciudad.nombre.toLowerCase();

            return (
              <a
                href={`/ciudad/${ruta}`}
                class="ciudad-favorita"
                style={{ backgroundImage: `url(${ciudad.imagen})` }}
              >
                <span class="nombre-ciudad">{ciudad.nombre}</span>
              </a>
            );
          })
        ) : (
          <p>No hay ciudades aún. ¡Agrega alguna!</p>
        )}
      </div>
    </div>
  );
}
