

import { useSignal } from "@preact/signals";


export default function ModalTrailer() {
  const mostrar = useSignal(false);
  

  return (
    <>
      <div class="portada">
        <button class="boton-play" onClick={() => mostrar.value = true}>▶</button>
      </div>

      {mostrar.value && (
        <div class="modal">
          <button class="cerrar" onClick={() => mostrar.value = false}>✕</button>
          <iframe
            src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}
    </>
  );
}
