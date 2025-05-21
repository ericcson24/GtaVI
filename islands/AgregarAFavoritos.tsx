import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { favoritos } from "../utils/favoritos.ts";
import { personajesValidos } from "../utils/personajes.ts";

const AgregarAFavoritos: FunctionalComponent = () => {
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState<string>("");
  const [mensajeError, setMensajeError] = useState<string>("");

  const agregar = () => {
    const nombre = personajeSeleccionado.trim();
    const personaje = personajesValidos.find(
      (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!personaje) {
      setMensajeError("❌ No existe el personaje.");
      return;
    }

    if (favoritos.value.some((f) => f.nombre === personaje.nombre)) {
      setMensajeError("⚠️ Ya está en favoritos.");
      return;
    }

    favoritos.value = [...favoritos.value, personaje];
    setPersonajeSeleccionado("");
    setMensajeError("");
  };

  return (
    <div class="formulario-agregar">
      <div class="formulario-campo">
        <label for="personaje-select" class="sr-only">Selecciona un personaje:</label>
        <select
          id="personaje-select"
          class="select-personaje"
          value={personajeSeleccionado}
          onChange={(e) => setPersonajeSeleccionado(e.currentTarget.value)}
        >
          <option value="" disabled hidden>-- Elige un personaje --</option>
          {personajesValidos.map((p) => (
            <option key={p.nombre} value={p.nombre}>
              {p.nombre}
            </option>
          ))}
        </select>
        <button class="boton-agregar" type="button" onClick={agregar}>
          Agregar
        </button>
      </div>

      {mensajeError && (
        <div class="mensaje-error animacion-aparecer">
          {mensajeError}
        </div>
      )}
    </div>
  );
};

export default AgregarAFavoritos;
