export {};

export enum Materia {
    LenguaEspañola,
    Matemáticas,
    Religion,
    Inglés,
    Sociales,
    Naturaleza
}
export enum libro {
    libro1,
    libro2,
    libro3
}


//Abstract para que no permita crear instancias de la misma y Private para que no pueda ser moficado
export abstract class Registro {
    protected id: number;
    protected nombre: string;
    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}
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

}

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

// let Loyola: Colegio = new Colegio(1, 'Loyola');
// let Carlos: Estudiantes = new Estudiantes(1, 'Carlos Gonzalez', 23, Materia.LenguaEspañola);
// let Francisco: Estudiantes = new Estudiantes(2, 'Francisco Gonzalez', 24, Materia.Matemáticas);
// Loyola.addStudent(Carlos);
// Loyola.addStudent(Francisco);
// console.log(Loyola);

// //Imprimiendo propiedad static
// console.log(Estudiantes.libros.libro1);
