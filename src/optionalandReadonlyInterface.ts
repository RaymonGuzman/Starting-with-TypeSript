export { };

//OptionalInferface
interface Student {
    name: string;
    curso?: string;
    materia?: string;
    colegio?: string;
}

function getUser(user: Student) {
    const UserStudent = { name: user.name, curso: '5to', materia: 'Matemáticas', colegio: 'Loyola' };
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

let Raymon = getUser({ name: 'Raymon' });

console.log('User', Raymon);

let Rita = getUser({ name: 'Rita', curso: '7mo', materia: 'Lengua Española', colegio: 'Santa Rita' });
console.log('Rita', Rita);

let Armando = getUser({ name: 'Armando', materia: 'Religión' });
console.log('Armando', Armando);

//readonly
interface Curso {
    readonly curso: string;
    readonly estudiantes: number;
    profesor?: string;
    materia?: string;
}

let sexto: Curso;

sexto = { curso: '6toB', estudiantes: 45, profesor: 'Jirafales', materia: 'Risas y Bromas' };
console.log('6toB', sexto);

sexto.profesor = 'Chavo del 8';
console.log('6toB', sexto);

let septimo: Curso;
septimo = { curso: '7mo', estudiantes: 39, profesor: 'Lucavi', materia: 'Orientacion' };
console.log(septimo);