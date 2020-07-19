"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
//Abstract para que no permita crear instancias de la misma y Private para que no pueda ser moficado
class Registro {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
exports.Registro = Registro;
