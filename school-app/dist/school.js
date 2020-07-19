"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colegio = void 0;
const register_1 = require("./register");
//Clase Colegio, que va a contener un conjuntos de Estudiantes
class Colegio extends register_1.Registro {
    constructor(id, nombre) {
        super(id, nombre);
        this.estudiantes = [];
    }
    addStudent(estudiantes) {
        this.estudiantes.push(estudiantes);
    }
    removeStudent(estudiantes) {
        const index = this.estudiantes.findIndex(a => a.id === estudiantes.id);
        let deletedStudent;
        if (index >= 0) {
            deletedStudent = this.estudiantes[index];
            this.estudiantes.splice(index, 1);
        }
        return deletedStudent;
    }
}
exports.Colegio = Colegio;
