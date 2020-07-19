// import {Colegio,Estudiantes,Materia} from './class-inheritance';

import { Colegio } from "./school";
import { Estudiantes } from "./student";
import { Materia } from "./subject";

let SantaRita = new Colegio(1, 'Santa Rita');
let Mauro     = new Estudiantes(1, 'Mauro Gonzalez', 27, Materia.Naturaleza);
let Carlos    = new Estudiantes(2, 'Carlos Gonzalez', 24, Materia.Sociales);

SantaRita.addStudent(Mauro);
SantaRita.addStudent(Carlos);
console.log(SantaRita);
SantaRita.removeStudent(Mauro);
console.log(SantaRita);
