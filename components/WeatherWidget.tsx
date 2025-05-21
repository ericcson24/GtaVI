
import { Weather } from "../utils/types.ts";

export default function WeatherWidget({ clima }: { clima: Weather | null }) {
  if (!clima) return <div class="p-4 bg-gray-100 rounded">Clima no disponible</div>;

  return (
    <div class="p-4 bg-gray-200 rounded shadow w-64 text-sm">
      <h3 class="font-bold text-lg mb-2"></h3>
      <p><b>Temp:</b> {clima.temperatura} °C</p>
      <p><b>Sensación:</b> {clima.sensación} °C</p>
      <p><b>Humedad:</b> {clima.humedad}%</p>
      <p><b>Viento:</b> {clima.viento} m/s</p>
      <p><b>Condición:</b> {clima.condición}</p>
    </div>
  );
}
