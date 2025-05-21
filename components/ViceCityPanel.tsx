import FavoritoCiudadButton from "../islands/FavoritoCiudadButton.tsx";

export default function ViceCityPanel() {
  return (
    <section class="vicecity-container">
      {/* Postal izquierda */}
      <div class="vicecity-postal">
        <img src="/vicecity-fondo.jpg" alt="Vice City" />
      </div>

      {/* Texto descriptivo centro */}
      <div class="vicecity-texto">
        <h1 class="titulo-vicecity">TODO EN EXCESO</h1>
        <p class="subtitulo-vicecity">
          LOS AÑOS 80 SON UN RECUERDO LEJANO,<br />
          PERO VICE CITY SIGUE SIENDO LA CAPITAL<br />
          DEL SOL Y LA DIVERSIÓN EN AMÉRICA.
        </p>
        <p class="parrafo-vicecity">
          El glamour, el ajetreo y la codicia de América, capturados en una sola ciudad.
          Cada barrio tiene algo que ofrecer, desde los hoteles art déco en tonos pastel
          y las arenas blancas de Ocean Beach hasta las panaderías bulliciosas de Little Cuba
          y las marcas pirata del mercadillo de Tisha-Wocka, pasando por el puerto de VC,
          la capital mundial de los cruceros.
        </p>
        <FavoritoCiudadButton nombre="Vice City" imagen="/vicecity-fondo.jpg" />
      </div>

      {/* Galería derecha */}
      <div class="vicecity-galeria">
        <img src="/vicecity-1.jpg" alt="Vice Sign" />
        <img src="/vicecity-2.jpg" alt="Piscina" />
      </div>
    </section>
  );
}
