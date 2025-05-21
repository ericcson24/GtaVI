import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { favoritos } from "../utils/favoritos.ts";
import { personajesValidos } from "../utils/personajes.ts";

const AgregarAFavoritos: FunctionalComponent = () => {
  const [auxiliar, setAuxiliar] = useState<string>("");

  const agregar = () => {
    const nombre = auxiliar.trim();
    const personaje = personajesValidos.find(
      (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (!personaje || favoritos.value.some((f) => f.nombre === personaje.nombre)) {
      return;
    }

    favoritos.value = [...favoritos.value, personaje];
    setAuxiliar("");
  };

  return (
    <div class="formulario-agregar">
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
  );
};

export default AgregarAFavoritos;
