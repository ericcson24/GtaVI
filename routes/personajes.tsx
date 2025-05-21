import { personajesValidos } from "../utils/personajes.ts";


export default function TodosPersonajes() {
  return (
    <div>
      <h1>Todos los personajes</h1>
      <ul>
        {personajesValidos.map((p) => (
          <li>
            <a href={`/personaje/${p.nombre.toLowerCase()}`}>{p.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
