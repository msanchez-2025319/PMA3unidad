// src/calcularNacimiento.ts

// Tu función original
export const calcularNacimiento = (edad: number): number => {
  const añoActual = new Date().getFullYear();
  return añoActual - edad;
};

// INTERFAZ - es como un "molde" para los datos
export interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

// Función que usa la interfaz
export const obtenerDatosCompletos = (persona: Persona) => {
  const añoNacimiento = calcularNacimiento(persona.edad);
  
  return {
    nombreCompleto: `${persona.nombre} ${persona.apellido}`,
    añoNacimiento: añoNacimiento,
    edad: persona.edad
  };
};