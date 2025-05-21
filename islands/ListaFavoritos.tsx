import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { favoritos } from "../utils/favoritos.ts";
import { Persona } from "../utils/types.ts";

const ListaFavoritos: FunctionalComponent = () => {
  const [personajes, setFavoritos] = useState<Persona[]>([]);

  useEffect(() => {
    setFavoritos(favoritos.value);
  }, [favoritos.value]);

  const quitarFavorito = (nombre: string) => {
    favoritos.value = favoritos.value.filter((p) => p.nombre !== nombre);
  };

  return (
    <div class="contenedor-favoritos">
      <h2 class="titulo-seccion">Lista de tus personajes favoritos</h2>
      <div class="favoritos-panel">
        {personajes.map((p) => (
          <div
            key={p.nombre}
            class="separacion-en-lista"
            style={{ backgroundImage: `url(${p.imagen})` }}
          >
            <span class="nombre-personaje">{p.nombre}</span>
            <button
              class="boton-quitar"
              onClick={() => quitarFavorito(p.nombre)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaFavoritos;
