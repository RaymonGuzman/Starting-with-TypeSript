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
function userData(nombre, edad, ocupation, sex) {
    if (edad <= 18) {
        console.log("Nombre: " + nombre + ", Edad: " + edad + ", ocupaci\u00F3n: " + ocupacion.EE + ", sexo: " + sexo.M);
    }
    else {
        console.log("Nombre: " + nombre + ", Edad:" + edad + ", ocupaci\u00F3n: " + ocupacion.EU + ", sexo: " + sexo.M);
    }
}
userData('Raymon', 25);
//Using function in a let variable
var createUser = function (name, edad, ocupation, sex) {
    if (edad <= 18) {
        return {
            name: name,
            edad: edad,
            ocupacion: ocupacion.EE,
            sexo: sexo.M
        };
    }
    else {
        return {
            name: name,
            edad: edad,
            ocupacion: ocupacion.EU,
            sexo: sexo.M
        };
    }
};
var Raymon = createUser('Raymon', 17);
console.log(Raymon);
