/*
Working with Enums
Enums allow us to define a set of named constants
*/

//number
enum numbers {
    one=1,
    two=2,
    three=3,
    four=4
}

console.log(numbers);

//string
enum names {
    Perro='Wau',
    Gato='Miau',
    Vaca='Muuu',
    Gallina='Cocorocoo'
}

console.log(names);

console.log('Imprimiendo el número cuatro', numbers.four);
console.log('Imprimiendo el sonido de la vaca', names.Vaca);