import { Weather } from "../utils/types.ts";
import { useRef, useState } from "preact/hooks";

export default function ClimaPanel({ clima }: { clima: Weather | undefined }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [abierto, setAbierto] = useState(false);

  const toggle = () => {
    const panel = panelRef.current;
    if (!panel) return;

    if (abierto) {
      panel.style.height = "0px";
      panel.style.opacity = "0";
    } else {
      panel.style.height = panel.scrollHeight + "px";
      panel.style.opacity = "1";
    }
    setAbierto(!abierto);
  };

  return (
    <div class="home-container">
      

      <div class="flex justify-center">
        <button class="boton-agregar" onClick={toggle}>
          {abierto ? "Ocultar clima" : "Mostrar clima actual"}
        </button>
      </div>

      <div
        ref={panelRef}
        class="clima-panel transition"
        style="height: 0px; opacity: 0; "
      >
        <div id="clima-content">
          {clima ? (
            <div class="space-y-2">
              <h3 class="text-xl font-bold">Clima en Leonida</h3>
              <p><b>Condición:</b> {clima.condición}</p>
              <p><b>Temperatura:</b> {clima.temperatura} °C</p>
              <p><b>Sensación térmica:</b> {clima.sensación} °C</p>
              <p><b>Humedad:</b> {clima.humedad}%</p>
              <p><b>Viento:</b> {clima.viento} m/s</p>
            </div>
          ) : (
            <p>No se pudo cargar el clima.</p>
          )}
        </div>
      </div>
    </div>
  );
}
