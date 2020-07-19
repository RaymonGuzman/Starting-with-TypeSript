"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_inheritance_1 = require("./class-inheritance");
var SantaRita = new class_inheritance_1.Colegio(1, 'Santa Rita');
var Mauro = new class_inheritance_1.Estudiantes(1, 'Mauro Gonzalez', 27, class_inheritance_1.Materia.Naturaleza);
SantaRita.addStudent(Mauro);
console.log(SantaRita);
