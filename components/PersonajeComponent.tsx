import { Personaje } from "../utils/types.ts";

export default function PersonajeComponent({ nombre, imagen, descripcion, juego }: Personaje) {
  return (
    <div class="border p-4 rounded shadow bg-white">
      <img src={imagen} alt={nombre} class="w-full h-48 object-cover rounded mb-2" />
      <h2 class="text-xl font-semibold">{nombre}</h2>
      <p class="text-sm text-gray-600 italic">{juego}</p>
      <p class="mt-2 text-sm">{descripcion}</p>
    </div>
  );
}
