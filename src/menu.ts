import { interfaz, pedirNumero, pedirTexto } from './datos.js';
import { arreglo } from './arreglo.js';
import { primero } from './primero.js';
import { combinar } from './combinacion.js';
import { fullName } from './fullName.js';
import { showAge } from './showAge.js';
import { calcularNaciomiento } from './calcularNacimiento.js';

export async function menuPrincipal(): Promise<void> {
  console.log('\n++++ MENÚ ++++');
  console.log('1. Crear arreglo');
  console.log('2. Obtener primer elemento');
  console.log('3. Combinar valores');
  console.log('4. Mostrar nombre completo');
  console.log('5. Mostrar edad');
  console.log('6. Calcular año de nacimiento');
  console.log('7. Salir');

  const opcion = await pedirTexto('Seleccione una opción: ');

  switch (opcion.trim()) {
    case '1':
      const a = await pedirNumero('Ingrese valor 1: ');
      const b = await pedirNumero('Ingrese valor 2: ');
      const c = await pedirNumero('Ingrese valor 3: ');
      console.log(arreglo(a, b, c));
      break;

    case '2':
      const x = await pedirNumero('Ingrese valor 1: ');
      const y = await pedirNumero('Ingrese valor 2: ');
      const z = await pedirNumero('Ingrese valor 3: ');
      console.log(primero(arreglo(x, y, z)));
      break;

    case '3':
      const v1 = await pedirNumero('Ingrese valor 1: ');
      const v2 = await pedirNumero('Ingrese valor 2: ');
      console.log(combinar(v1, v2));
      break;

    case '4':
      const nombre = await pedirTexto('Ingrese nombre: ');
      const apellido = await pedirTexto('Ingrese apellido: ');
      console.log(fullName(nombre, apellido));
      break;

    case '5':
      const edad = await pedirNumero('Ingrese edad: ');
      console.log(showAge(edad));
      break;

    case '6':
      const edad2 = await pedirNumero('Ingrese edad: ');
      console.log(calcularNaciomiento(edad2));
      break;

    case '7':
      interfaz.close();
      return;

    default:
      console.log('Opción no válida');
  }

  menuPrincipal();
}

menuPrincipal();