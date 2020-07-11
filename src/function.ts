enum ocupacion {
    EE = 'Estudiante Escolar',
    EU = 'Estudiante Universitario'
}

enum sexo {
    M = 'Masculino',
    F = 'Femenino'
}

interface User {
    nombre: string;
    edad: number;
    ocupation?: ocupacion;
    sex?: sexo;
}

function userData(user: User) {

    if (user.edad <= 18) {
        console.log(`Nombre: ${user.nombre}, Edad: ${user.edad}, ocupación: ${ocupacion.EE}, sexo: ${user.sex}`)
    } else {
        console.log(`Nombre: ${user.nombre}, Edad:${user.edad}, ocupación: ${ocupacion.EU}, sexo: ${user.sex}`)
    }
}
userData({ nombre: 'Raymon', edad: 25, sex: sexo.M });

//Using function in a let variable
let createUser = (user: User): object => {
    if (user.edad <= 18) {
        return {
            Nombre: user.nombre,
            Edad: user.edad,
            Ocupacion: ocupacion.EE,
            sexo: sexo.M
        }
    } else {
        return {
            Nombre: user.nombre,
            Edad: user.edad,
            Ocupacion: ocupacion.EU,
            sexo: sexo.M
        }
    }
}

const Raymon = createUser({ nombre: 'Raymon', edad: 17 });

console.log(Raymon);

function getAntoherUser(user: User) {
    console.log(`[
        Nombre: ${user.nombre},
        Edad: ${user.edad},
        Ocupacion: ${user.ocupation},
        Sexo: ${user.sex}
    ]`);
}

let Karla = {
    nombre: 'Karla',
    edad: 28,
    ocupation: ocupacion.EE,
    sex: sexo.F
}

getAntoherUser(Karla);