import * as readline from 'readline';

export const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export function pedirNumero(mensaje: string): Promise<number> {
  return new Promise((resolve) => {
    interfaz.question(mensaje, (respuesta) => {
      const numero = Number(respuesta);
      if (isNaN(numero)) {
        console.log('Ingrese un número válido');
        resolve(pedirNumero(mensaje));
      } else {
        resolve(numero);
      }
    });
  });
}

export function pedirTexto(mensaje: string): Promise<string> {
  return new Promise((resolve) => {
    interfaz.question(mensaje, (respuesta) => {
      resolve(respuesta);
    });
  });
}