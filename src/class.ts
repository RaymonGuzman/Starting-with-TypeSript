
enum Materia {
    LenguaEspañola,
    Matemáticas,
    Religion,
    Inglés,
    Sociales,
    Naturaleza
}

//Clase Colegio, que va a contener un conjuntos de Estudiantes
class Colegio {
    nombre: string;
    estudiantes: Estudiantes[];

    constructor(nombre: string,
    ) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    addStudent(estudiantes: Estudiantes) {
        this.estudiantes.push(estudiantes);
    }

}

class Estudiantes {
    id: number;
    nombre: string;
    edad: number;
    materia: Materia;

    constructor(id: number,
        nombre: string,
        edad: number,
        materia: Materia) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.materia = materia;
    }

    getStudent() {
        return `[
            id:${this.id},
            nombre:${this.nombre},
            edad:${this.edad},
            materia:${this.materia}
        ]`;
    }

}

let Loyola: Colegio = new Colegio('Loyola');
let Carlos: Estudiantes = new Estudiantes(1, 'Carlos Gonzalez', 23, Materia.LenguaEspañola);
let Francisco: Estudiantes = new Estudiantes(2, 'Francisco Gonzalez', 24, Materia.Matemáticas);
Loyola.addStudent(Carlos);
Loyola.addStudent(Francisco);
console.log(Loyola);
