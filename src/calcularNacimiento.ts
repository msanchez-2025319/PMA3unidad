export const calcularNaciomiento = (edad: number): number => {
  const añoActual = new Date().getFullYear();
  return añoActual - edad;
};