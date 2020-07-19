//Abstract para que no permita crear instancias de la misma y Private para que no pueda ser moficado
export abstract class Registro {
    id    : number;
    nombre: string;
    constructor(
        id    : number,
        nombre: string
        ) {
        this.id     = id;
        this.nombre = nombre;
    }
}