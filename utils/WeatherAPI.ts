import { Weather } from "./types.ts";

export async function getMiamiWeather(): Promise<Weather | null> {
  const apiKey = Deno.env.get("API_NINJAS_KEY");
  const url = "https://api.api-ninjas.com/v1/weather?lat=25.7617&lon=-80.1918"; // Coordenadas de Miami

  try {
    const res = await fetch(url, {
      headers: { "X-Api-Key": apiKey ?? "" },
    });

    if (!res.ok) {
      console.warn("⚠️ Error de la API:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("📦 Datos del clima:", data);

    return {
      ciudad: "Miami",
      temperatura: data.temp,
      sensación: data.feels_like,
      humedad: data.humidity,
      viento: data.wind_speed,
      condición: `${data.cloud_pct}% de nubosidad`,
    };
  } catch (err) {
    console.error("❌ Error al obtener el clima:", err);
    return null;
  }
}
