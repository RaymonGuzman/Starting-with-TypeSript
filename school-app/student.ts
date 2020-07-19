import { Registro } from "./register";
import { Materia, libro } from "./subject";

export class Estudiantes extends Registro {
    static libros = libro;
    edad   : number;
    materia: Materia;

    constructor(
        id     : number,
        nombre : string,
        edad   : number,
        materia: Materia
        ) {
        super(id, nombre) //constructor de superclase

        this.edad    = edad;
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