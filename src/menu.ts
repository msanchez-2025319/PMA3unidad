import { interfaz, pedirNumero, pedirTexto } from './datos.js';
import { sumaDeTresNumeros, restaDeTresNumeros, multiplicacionTresNumeros } from './normalFuctions.js';
import { fullName, showAge, calcularNaciomiento} from './arrowFunctions.js';

export async function menuPrincipal(): Promise<void> {
  console.log('++++ MENÚ ++++');
  console.log('1. Sumar tres números');
  console.log('2. Restar tres números');
  console.log('3. Multiplicar tres números');
  console.log('4. Mostrar nombre completo');
  console.log('5. Mostrar edad');
  console.log('6. Calcular año de nacimiento');
  console.log('7. Salir');

  const opcion = await pedirTexto('Seleccione una opción: ');

  switch (opcion.trim()) {
    case '1':
      const a1 = await pedirNumero('Ingrese número 1: ');
      const b1 = await pedirNumero('Ingrese número 2: ');
      const c1 = await pedirNumero('Ingrese número 3: ');
      console.log('Resultado:', sumaDeTresNumeros(a1, b1, c1));
      break;

    case '2':
      const a2 = await pedirNumero('Ingrese número 1: ');
      const b2 = await pedirNumero('Ingrese número 2: ');
      const c2 = await pedirNumero('Ingrese número 3: ');
      console.log('Resultado:', restaDeTresNumeros(a2, b2, c2));
      break;

    case '3':
      const a3 = await pedirNumero('Ingrese número 1: ');
      const b3 = await pedirNumero('Ingrese número 2: ');
      const c3 = await pedirNumero('Ingrese número 3: ');
      console.log('Resultado:', multiplicacionTresNumeros(a3, b3, c3));
      break;

    case '4':
      const nombre = await pedirTexto('Ingrese nombre: ');
      const apellido = await pedirTexto('Ingrese apellido: ');
      console.log('Nombre completo:', fullName(nombre, apellido));
      break;

    case '5':
      const edad = await pedirNumero('Ingrese edad: ');
      console.log('Edad:', showAge(edad));
      break;

    case '6':
      const edad2 = await pedirNumero('Ingrese edad: ');
      console.log('Año de nacimiento:', calcularNaciomiento(edad2));
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