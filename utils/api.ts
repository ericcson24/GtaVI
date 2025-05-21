import { Handlers } from "$fresh/server.ts";
import initCiudadesDB from "../utils/databaseCiudades.ts";

export const handler: Handlers = {
  async GET(_req) {
    const db = await initCiudadesDB();
    const ciudades = await db.find().toArray();
    return new Response(JSON.stringify(ciudades), {
      headers: { "Content-Type": "application/json" },
    });
  },

  async POST(req) {
    const db = await initCiudadesDB();
    const { nombre, imagen } = await req.json();
    const existe = await db.findOne({ nombre });
    if (!existe) {
      await db.insertOne({ nombre, imagen });
    }
    return new Response("Agregado");
  },

  async DELETE(req) {
    const db = await initCiudadesDB();
    const { nombre } = await req.json();
    await db.deleteOne({ nombre });
    return new Response("Eliminado");
  },
};
