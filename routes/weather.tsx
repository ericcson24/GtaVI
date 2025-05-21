import { getMiamiWeather } from "../utils/WeatherAPI.ts";

export default async function WeatherPage() {
  const clima = await getMiamiWeather();

  if (!clima) {
    return <p>Error cargando el clima de Miami.</p>;
  }

  return (
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-2">Clima actual en Leonida</h1>
      <ul class="space-y-1">
        <li><b>Condición:</b> {clima.condición}</li>
        <li><b>Temperatura:</b> {clima.temperatura} °C</li>
        <li><b>Sensación térmica:</b> {clima.sensación} °C</li>
        <li><b>Humedad:</b> {clima.humedad} %</li>
        <li><b>Viento:</b> {clima.viento} m/s</li>
      </ul>
    </div>
  );
}
