"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUser(user) {
    var UserStudent = { name: user.name, curso: '5to', materia: 'Matemáticas', colegio: 'Loyola' };
    if (user.curso) {
        UserStudent.curso = user.curso;
    }
    if (user.materia) {
        UserStudent.materia = user.materia;
    }
    if (user.colegio) {
        UserStudent.colegio = user.colegio;
    }
    return UserStudent;
}
var Raymon = getUser({ name: 'Raymon' });
console.log('User', Raymon);
var Rita = getUser({ name: 'Rita', curso: '7mo', materia: 'Lengua Española', colegio: 'Santa Rita' });
console.log('Rita', Rita);
var Armando = getUser({ name: 'Armando', materia: 'Religión' });
console.log('Armando', Armando);
var sexto;
sexto = { curso: '6toB', estudiantes: 45, profesor: 'Jirafales', materia: 'Risas y Bromas' };
console.log('6toB', sexto);
sexto.profesor = 'Chavo del 8';
console.log('6toB', sexto);
var septimo;
septimo = { curso: '7mo', estudiantes: 39, profesor: 'Lucavi', materia: 'Orientacion' };
console.log(septimo);
