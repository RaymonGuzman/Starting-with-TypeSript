"use strict";
/*
Working with Enums
Enums allow us to define a set of named constants
*/
//number
var numbers;
(function (numbers) {
    numbers[numbers["one"] = 1] = "one";
    numbers[numbers["two"] = 2] = "two";
    numbers[numbers["three"] = 3] = "three";
    numbers[numbers["four"] = 4] = "four";
})(numbers || (numbers = {}));
console.log(numbers);
//string
var names;
(function (names) {
    names["Perro"] = "Wau";
    names["Gato"] = "Miau";
    names["Vaca"] = "Muuu";
    names["Gallina"] = "Cocorocoo";
})(names || (names = {}));
console.log(names);
console.log('Imprimiendo el número cuatro', numbers.four);
console.log('Imprimiendo el sonido de la vaca', names.Vaca);
