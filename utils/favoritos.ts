import { signal } from "@preact/signals";
import { Persona } from "./types.ts";

export const favoritos = signal<Persona[]>([]);
