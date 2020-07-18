import {Colegio,Estudiantes,Materia} from './class-inheritance';

let SantaRita =  new Colegio(1, 'Santa Rita');

let Mauro = new Estudiantes(1, 'Mauro Gonzalez', 27, Materia.Naturaleza);
SantaRita.addStudent(Mauro);
console.log(SantaRita);
