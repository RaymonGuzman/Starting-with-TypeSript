"use strict";
var ocupacion;
(function (ocupacion) {
    ocupacion["EE"] = "Estudiante Escolar";
    ocupacion["EU"] = "Estudiante Universitario";
})(ocupacion || (ocupacion = {}));
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
function userData(user) {
    if (user.edad <= 18) {
        console.log("Nombre: " + user.nombre + ", Edad: " + user.edad + ", ocupaci\u00F3n: " + ocupacion.EE + ", sexo: " + user.sex);
    }
    else {
        console.log("Nombre: " + user.nombre + ", Edad:" + user.edad + ", ocupaci\u00F3n: " + ocupacion.EU + ", sexo: " + user.sex);
    }
}
userData({ nombre: 'Raymon', edad: 25, sex: sexo.M });
//Using function in a let variable
var createUser = function (user) {
    if (user.edad <= 18) {
        return {
            Nombre: user.nombre,
            Edad: user.edad,
            Ocupacion: ocupacion.EE,
            sexo: sexo.M
        };
    }
    else {
        return {
            Nombre: user.nombre,
            Edad: user.edad,
            Ocupacion: ocupacion.EU,
            sexo: sexo.M
        };
    }
};
var Raymon = createUser({ nombre: 'Raymon', edad: 17 });
console.log(Raymon);
function getAntoherUser(user) {
    console.log("[\n        Nombre: " + user.nombre + ",\n        Edad: " + user.edad + ",\n        Ocupacion: " + user.ocupation + ",\n        Sexo: " + user.sex + "\n    ]");
}
var Karla = {
    nombre: 'Karla',
    edad: 28,
    ocupation: ocupacion.EE,
    sex: sexo.F
};
getAntoherUser(Karla);
