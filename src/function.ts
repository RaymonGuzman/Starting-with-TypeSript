enum ocupacion {
    EE = 'Estudiante Escolar',
    EU = 'Estudiante Universitario'
}

enum sexo {
    M = 'Masculino',
    F = 'Femenino'
}

function userData(nombre: string, edad: number, ocupation?: ocupacion, sex?: sexo) {

    if (edad <= 18) {
        console.log(`Nombre: ${nombre}, Edad: ${edad}, ocupación: ${ocupacion.EE}, sexo: ${sexo.M}`)
    } else {
        console.log(`Nombre: ${nombre}, Edad:${edad}, ocupación: ${ocupacion.EU}, sexo: ${sexo.M}`)
    }
}
userData('Raymon', 25);

//Using function in a let variable
let createUser = (name: string, edad: number, ocupation?: ocupacion, sex?: sexo): object => {
    if (edad <= 18) {
        return {
            name,
            edad,
            ocupacion: ocupacion.EE,
            sexo: sexo.M
        }
    } else {
        return {
            name,
            edad,
            ocupacion: ocupacion.EU,
            sexo: sexo.M
        }
    }
}

const Raymon = createUser('Raymon', 17);
console.log(Raymon);