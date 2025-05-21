import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";


import { getMiamiWeather } from "../utils/WeatherAPI.ts";
import { Weather } from "../utils/types.ts";
import ClimaPanel from "../islands/ClimaPanel.tsx";
import ModalTrailer from "../islands/ModalTrailer.tsx";

import ListaFavoritos from "../islands/ListaFavoritos.tsx";
import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";


import FavoritoButton from "../islands/FavoritoButton.tsx";



export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Weather | undefined>) => {
    const clima = await getMiamiWeather();
    return ctx.render(clima ?? undefined);
  },
};

export default function Home({ data }: PageProps<Weather | undefined>) {
  return (
    <>
      

      <ModalTrailer />


      <section class= ""></section>

      <section class="disponible">
        
        <img class="imagen2" src="/logogta6.png" alt="GTA VI" />
        
        <p>
          DISPONIBLE
        </p>
        <p>
          EL 26 DE MAYO
        </p>
        <p>
          DE 2026
          </p>
      </section>
      <section class="introduccion">
      <h1>
        Vice City, EE. UU.
      </h1>
      <p>
        Jason y Lucia siempre han sabido que las cartas estaban en su contra, pero cuando un golpe que parecía fácil sale mal, se ven atrapados en el lado más oscuro del lugar más soleado de América, en medio de una conspiración criminal que se extiende por todo el estado de Leonida, y obligados a depender más que nunca el uno del otro si quieren salir con vida.
      </p>
      </section>
      <section class="seccion">
        <h2>Clima actual en Leonida</h2>
        <ClimaPanel clima={data} />
      </section>
      <section >
      <img class ="artwork2" src="/Vice_City_01.jpg" alt="GTA VI" />
  
      </section>

      <section class="peronajes-lista">

        <h1>
          Personajes Favoritos
        </h1>
        <p>
          Agrega a tus personajes favoritos
        </p>
      <div><AgregarAFavoritos /></div>

        
      <h1>
       

        <div><ListaFavoritos /></div>
      </h1>


      </section>

      <section class="personaje-jason">
  <div class="contenedor-jason-centralizado">
    <div class="bloque-texto-imagen">
      <div class="texto-personaje">
        <h1 class="titulo-personaje">JASON DUVAL</h1>
        <h2 class="frase-personaje">
          Jason quiere una vida fácil,<br />
          pero las cosas no hacen más que complicarse.
        </h2>
        <p class="descripcion-personaje">
          Jason se crió rodeado de estafadores y delincuentes. Tras un tiempo en el
          ejército intentando dejar atrás su adolescencia problemática, acabó en los cayos
          haciendo lo que mejor sabe: trabajar para narcotraficantes de la zona. Quizás haya
          llegado el momento de probar algo nuevo.
        </p>
        <FavoritoButton nombre="Jason" imagen="/Jason.jpg" />
      </div>

      <div class="imagen-principal-jason">
        <img src="/Jason.jpg" alt="Jason en coche" />
      </div>
    </div>

    <div class="galeria-jason-inferior">
      <img src="/Jason2.jpg" alt="Jason moto" />
      <img src="/Jason3.jpg" alt="Jason bar" />
    </div>
  </div>
</section>


<section >
  <img class ="artwork2" src="/Jason_and_Lucia_Motel_ultrawide.jpg" alt="GTA VI" />
  
  </section>

<section class="personaje-lucia">
  <div class="contenedor-lucia-centralizado">
    <div class="bloque-lucia">
      {/* Imagen a la izquierda */}
      <div class="imagen-principal-lucia">
        <img src="/Lucia.jpg" alt="Lucía en GTA VI" />
      </div>

      {/* Texto a la derecha */}
      <div class="texto-personaje">
        <h1 class="titulo-personaje">LUCÍA CAMINOS</h1>
        <h2 class="frase-personaje">
          Luchadora, impulsiva<br />
          y decidida a sobrevivir cueste lo que cueste.
        </h2>
        <p class="descripcion-personaje">
          Lucía ha vivido toda su vida enfrentándose a dificultades en su entorno familiar y social.
          Tras pasar por varias instituciones, su instinto de supervivencia la llevó a los bajos fondos de Leonida.
          Ahora, junto a Jason, ve una posibilidad de redención… o de una vida aún más peligrosa.
        </p>
        <FavoritoButton nombre="Lucía" imagen="/Lucia.jpg" />
      </div>
    </div>

    {/* Galería inferior de imágenes */}
    <div class="galeria-lucia-inferior">
      <img src="/Lucia2.jpg" alt="Lucía en moto" />
      <img src="/Lucia3.jpg" alt="Lucía en bar" />
    </div>
  </div>
</section>


<section class="cosas-de-leonida">
  <div class="contenedor-leonida-texto">
    <h2 class="titulo-leonida">Cosas de Leonida</h2>
    <p class="descripcion-leonida">
      Cuando se pone el sol y <br />
      brillan las luces de neón, <br />
      todos tienen algo que ganar… <br />
      y mucho más que perder.
    </p>
  </div>
</section>



<section class="personaje-cal">
  <div class="contenedor-cal-centralizado">
    <div class="bloque-cal">
      

      {/* Texto a la derecha */}
      <div class="texto-personaje">
        <h1 class="titulo-personaje">CAL HAMPTON</h1>
        <h2 class="frase-personaje-carl">
          «¿Y si todo lo que dicen en Internet<br /> fuera verdad?»
        </h2>
        <p class="descripcion-personaje">
          Cal, amigo de Jason y socio de Brian, se siente más seguro en casa,
          espiando las comunicaciones de la guardia costera con unas cervezas y
          unas cuantas pestañas privadas abiertas en el navegador.
        </p>
        <FavoritoButton nombre="Cal" imagen="/Cal1.png" />
      </div>
    </div>

    {/* Galería inferior de imágenes */}
    <div class="galeria-cal-inferior">
      <img src="/Cal1.png" alt="Cal caminando con Jason" />
      <img src="/Cal2.png" alt="Cal caminando con Jason" />
      <img src="/Cal3.png" alt="Cal en mini golf" />
      <img src="/Cal4.png" alt="Cal mirando un avión" />
    </div>
  </div>
</section>

      

      
    </>
  );
}