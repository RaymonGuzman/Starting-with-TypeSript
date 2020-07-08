/*
Working with TypeScript object vs JavaScript Object
Enums allow us to define a set of named constants
*/

// object
let persona: object;

persona = {
    nombre:'Juan Perez',
    edad:24,
    estatura: `'6'0'`,
    pais: 'República Dominicana',
    estatus:'Soltero'
}

//it can't be accesed calling persona.nombre!
// console.log(persona.nombre);
console.log(persona);

let numeros = {
    uno:1,
    dos:2,
    tres:3,
    cuatro:4
}

console.log(numeros);
//it can be accesed of this way!
console.log(numeros.cuatro);