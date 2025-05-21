import { Collection, MongoClient } from "mongodb";
import { PersonajesModel } from "./types.ts";

let PersonajesCollection: Collection<PersonajesModel>;

const initMongodb = async () => {
  if (PersonajesCollection) return PersonajesCollection;

  const url = Deno.env.get("MONGO_URL");
  if (!url) throw new Error("Error con MONGO_URL");

  const client = new MongoClient(url);
  await client.connect();
  console.log("Conectado a mongodb");

  const db = client.db("gtavi");
  PersonajesCollection = db.collection<PersonajesModel>("favorites");

  return PersonajesCollection;
};

export default initMongodb;
