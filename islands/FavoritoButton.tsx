import { FunctionalComponent } from "preact";
import { favoritos } from "../utils/favoritos.ts";

interface Props {
  nombre: string;
  imagen: string;
}

const FavoritoButton: FunctionalComponent<Props> = ({ nombre, imagen }) => {
  return (
    <button
      class="boton-agregar"
      onClick={() => {
        if (!favoritos.value.some((p) => p.nombre === nombre)) {
          favoritos.value = [...favoritos.value, { nombre, imagen }];
        }
      }}
    >
      Añadir {nombre} a favoritos
    </button>
  );
};

export default FavoritoButton;
