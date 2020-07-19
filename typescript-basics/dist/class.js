"use strict";
var Materia;
(function (Materia) {
    Materia[Materia["LenguaEspa\u00F1ola"] = 0] = "LenguaEspa\u00F1ola";
    Materia[Materia["Matem\u00E1ticas"] = 1] = "Matem\u00E1ticas";
    Materia[Materia["Religion"] = 2] = "Religion";
    Materia[Materia["Ingl\u00E9s"] = 3] = "Ingl\u00E9s";
    Materia[Materia["Sociales"] = 4] = "Sociales";
    Materia[Materia["Naturaleza"] = 5] = "Naturaleza";
})(Materia || (Materia = {}));
//Clase Colegio, que va a contener un conjuntos de Estudiantes
var Colegio = /** @class */ (function () {
    function Colegio(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
    }
    Colegio.prototype.addStudent = function (estudiantes) {
        this.estudiantes.push(estudiantes);
    };
    return Colegio;
}());
var Estudiantes = /** @class */ (function () {
    function Estudiantes(id, nombre, edad, materia) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia;
    }
    Estudiantes.prototype.getStudent = function () {
        return "[\n            id:" + this.id + ",\n            nombre:" + this.nombre + ",\n            edad:" + this.edad + ",\n            materia:" + this.materia + "\n        ]";
    };
    return Estudiantes;
}());
var Loyola = new Colegio('Loyola');
var Carlos = new Estudiantes(1, 'Carlos Gonzalez', 23, Materia.LenguaEspañola);
var Francisco = new Estudiantes(2, 'Francisco Gonzalez', 24, Materia.Matemáticas);
Loyola.addStudent(Carlos);
Loyola.addStudent(Francisco);
console.log(Loyola);
