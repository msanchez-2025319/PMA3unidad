export const fullName = (name: string, lastName: string): string => {
    return `${name} ${lastName}`;
};

export const showAge = (edad: number): number => {
    return edad;
} 

export const calcularNaciomiento = (edad: number): number => {
    const edadActual = new Date().getFullYear();
    return edadActual - edad;
};