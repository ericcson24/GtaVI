export interface Weather {
  ciudad: string;
  temperatura: number;
  sensación: number;
  humedad: number;
  viento: number;
  condición: string; // ahora será un texto tipo "80% nubes"
}



export interface PersonajesModel {
  _id?: string;
  name: string;
  image: string;
  description: string;
  game: string;
}
export interface Personaje {
  nombre: string;
  imagen: string;
  descripcion: string;
  juego: string;
}



// utils/types.ts
export interface Persona {
  nombre: string;
  imagen: string; // URL de la imagen de fondo
}


