import { useState } from "preact/hooks";

export default function GaleriaPersonaje({ imagenes }: { imagenes: string[] }) {
  const [imagenActiva, setImagenActiva] = useState<string | null>(null);

  return (
    <div class="galeria-jason">
      <img
        src={imagenes[0]}
        alt="Jason principal"
        class="imagen-jason grande"
        onClick={() => setImagenActiva(imagenes[0])}
      />
      <img
        src={imagenes[1]}
        alt="Jason secundario 1"
        class="imagen-jason"
        onClick={() => setImagenActiva(imagenes[1])}
      />
      <img
        src={imagenes[2]}
        alt="Jason secundario 2"
        class="imagen-jason"
        onClick={() => setImagenActiva(imagenes[2])}
      />

      {imagenActiva && (
        <div class="modal-imagen" onClick={() => setImagenActiva(null)}>
          <img src={imagenActiva} alt="Vista ampliada" class="imagen-expandida" />
          <button class="cerrar-modal">✕</button>
        </div>
      )}
    </div>
  );
}
