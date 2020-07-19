"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiantes = void 0;
const register_1 = require("./register");
const subject_1 = require("./subject");
class Estudiantes extends register_1.Registro {
    constructor(id, nombre, edad, materia) {
        super(id, nombre); //constructor de superclase
        this.edad = edad;
        this.materia = materia;
    }
    getStudent() {
        return `[
            id     : ${this.id},
            nombre : ${this.nombre},
            edad   : ${this.edad},
            materia: ${this.materia}
        ]`;
    }
}
exports.Estudiantes = Estudiantes;
Estudiantes.libros = subject_1.libro;
