import { useEffect, useState } from "preact/hooks";

interface Props {
  nombre: string;
  imagen: string;
}

const FavoritoCiudadButton = ({ nombre, imagen }: Props) => {
  const [favorita, setFavorita] = useState(false);

  useEffect(() => {
    fetch("/api/ciudades")
      .then((res) => res.json())
      .then((ciudades) => {
        const existe = ciudades.some((c: { nombre: string }) =>
  c.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
);


        setFavorita(existe);
      });
  }, []);

  const toggleFavorito = async () => {
  const metodo = favorita ? "DELETE" : "POST";
  const res = await fetch("/api/ciudades", {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, imagen }),
  });

  if (res.ok) {
    // Reconsultar desde la API tras la operación
    const nuevasCiudades = await fetch("/api/ciudades").then((r) => r.json());
    const existe = nuevasCiudades.some((c: { nombre: string }) =>
      c.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
    );
    setFavorita(existe);
  }
};


  return (
    <button class="boton-agregar" onClick={toggleFavorito}>
      {favorita ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
};

export default FavoritoCiudadButton;
