import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { favoritos } from "../utils/favoritos.ts";
import { personajesValidos } from "../utils/personajes.ts";

const AgregarAFavoritos: FunctionalComponent = () => {
  const [auxiliar, setAuxiliar] = useState<string>("");
  const [mensajeError, setMensajeError] = useState<string>("");

  const agregar = () => {
    const nombre = auxiliar.trim();
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
    setAuxiliar("");
    setMensajeError("");
  };

  return (
    <div class="formulario-agregar">
      <div class="formulario-campo">
        <input
          class="input-personaje"
          type="text"
          placeholder="Introduce tu personaje"
          value={auxiliar}
          onInput={(e) => setAuxiliar(e.currentTarget.value)}
        />
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
