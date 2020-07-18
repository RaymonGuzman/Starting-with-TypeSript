"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiantes = exports.Colegio = exports.Registro = exports.libro = exports.Materia = void 0;
var Materia;
(function (Materia) {
    Materia[Materia["LenguaEspa\u00F1ola"] = 0] = "LenguaEspa\u00F1ola";
    Materia[Materia["Matem\u00E1ticas"] = 1] = "Matem\u00E1ticas";
    Materia[Materia["Religion"] = 2] = "Religion";
    Materia[Materia["Ingl\u00E9s"] = 3] = "Ingl\u00E9s";
    Materia[Materia["Sociales"] = 4] = "Sociales";
    Materia[Materia["Naturaleza"] = 5] = "Naturaleza";
})(Materia = exports.Materia || (exports.Materia = {}));
var libro;
(function (libro) {
    libro[libro["libro1"] = 0] = "libro1";
    libro[libro["libro2"] = 1] = "libro2";
    libro[libro["libro3"] = 2] = "libro3";
})(libro = exports.libro || (exports.libro = {}));
//Abstract para que no permita crear instancias de la misma y Private para que no pueda ser moficado
var Registro = /** @class */ (function () {
    function Registro(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Registro;
}());
exports.Registro = Registro;
//Clase Colegio, que va a contener un conjuntos de Estudiantes
var Colegio = /** @class */ (function (_super) {
    __extends(Colegio, _super);
    function Colegio(id, nombre) {
        var _this = _super.call(this, id, nombre) || this;
        _this.estudiantes = [];
        return _this;
    }
    Colegio.prototype.addStudent = function (estudiantes) {
        this.estudiantes.push(estudiantes);
    };
    return Colegio;
}(Registro));
exports.Colegio = Colegio;
var Estudiantes = /** @class */ (function (_super) {
    __extends(Estudiantes, _super);
    function Estudiantes(id, nombre, edad, materia) {
        var _this = _super.call(this, id, nombre) //constructor de superclase
         || this;
        _this.edad = edad;
        _this.materia = materia;
        return _this;
    }
    Estudiantes.prototype.getStudent = function () {
        return "[\n            id:" + this.id + ",\n            nombre:" + this.nombre + ",\n            edad:" + this.edad + ",\n            materia:" + this.materia + "\n        ]";
    };
    Estudiantes.libros = libro;
    return Estudiantes;
}(Registro));
exports.Estudiantes = Estudiantes;
// let Loyola: Colegio = new Colegio(1, 'Loyola');
// let Carlos: Estudiantes = new Estudiantes(1, 'Carlos Gonzalez', 23, Materia.LenguaEspañola);
// let Francisco: Estudiantes = new Estudiantes(2, 'Francisco Gonzalez', 24, Materia.Matemáticas);
// Loyola.addStudent(Carlos);
// Loyola.addStudent(Francisco);
// console.log(Loyola);
// //Imprimiendo propiedad static
// console.log(Estudiantes.libros.libro1);
