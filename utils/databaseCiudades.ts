import { Collection, MongoClient } from "mongodb";
import { CiudadModel } from "./types.ts";

let CiudadesCollection: Collection<CiudadModel>;

const initCiudadesDB = async () => {
  if (CiudadesCollection) return CiudadesCollection;

  const url = Deno.env.get("MONGO_URL");
  if (!url) throw new Error("Error con MONGO_URL");

  const client = new MongoClient(url);
  await client.connect();
  console.log("Conectado a MongoDB (ciudades)");

  const db = client.db("gtavi");
  CiudadesCollection = db.collection<CiudadModel>("ciudades_favoritas");

  return CiudadesCollection;
};

export default initCiudadesDB;
