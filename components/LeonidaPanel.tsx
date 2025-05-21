import FavoritoCiudadButton from "../islands/FavoritoCiudadButton.tsx";

export default function LeonidaPanel() {
  return (
    <div class="leonida-container">
      {/* Postal inclinada */}
      <div class="leonida-postal">
        <img src="/leonida-postal.jpg" alt="Leonida Keys" />
      </div>

      {/* Texto descriptivo */}
      <div class="leonida-texto">
        <h1>LEONIDA KEYS</h1>
        <p class="subtitulo">EL CÓDIGO DE VESTIMENTA ES INFORMAL Y LOS BARES ESTÁN REPLETOS.</p>
        <p>
          La vida en este archipiélago tropical no es ostentosa, pero sí tranquila. Recuéstate sobre
          una tumbona con una copa de más, pero fíjate bien: te encuentras a las puertas de las
          aguas más hermosas y peligrosas de toda América.
        </p>

        {/* Botón para agregar ciudad a favoritos */}
        <FavoritoCiudadButton nombre="Leonida" imagen="/leonida-postal.jpg" />
      </div>

      {/* Galería lateral */}
      <div class="leonida-galeria">
        <img src="/leonida-1.jpg" alt="Scooter" />
        <img src="/leonida-2.jpg" alt="Avión" />
        <img src="/leonida-3.jpg" alt="The Rusty Anchor" />
      </div>
    </div>
  );
}
