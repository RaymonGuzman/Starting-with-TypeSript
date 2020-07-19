import { Registro } from "./register";
import { Estudiantes } from "./student";
//Clase Colegio, que va a contener un conjuntos de Estudiantes
export class Colegio extends Registro {
    estudiantes: Estudiantes[];

    constructor(
        id    : number,
        nombre: string
    ) {
        super(id, nombre)

        this.estudiantes = [];
    }

    addStudent(estudiantes: Estudiantes) {
        this.estudiantes.push(estudiantes);
    }
    removeStudent(estudiantes: Estudiantes) {
        const index = this.estudiantes.findIndex(a => a.id === estudiantes.id);
        let deletedStudent;
        if (index >= 0) {
            deletedStudent = this.estudiantes[index];
            this.estudiantes.splice(index, 1);
        }
        return deletedStudent;

    }


}