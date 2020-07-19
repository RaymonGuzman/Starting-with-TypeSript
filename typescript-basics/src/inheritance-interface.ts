export {};

interface usuario{
    id:number;
    nombre:string;
    apellido:string;
    edad: number;
}

interface student extends usuario{
    colegio:string;
    curso:string;
}

interface empleado extends usuario{
    empresa:string;
    departamento:string;
}

let Gilberto: usuario = {
    id:3,
    nombre:'Gilberto',
    apellido:'Perez',
    edad:25
}
console.log('Gilberto', Gilberto);

let Raymon:student = {
    id:12,
    nombre:'Raymon',
    apellido:'Guzman',
    edad:16,
    colegio:'San Rafael',
    curso:'4toB'
}
console.log('Raymon', Raymon);

let Carlos:empleado = {
    id:45162,
    nombre:'Carlos',
    apellido:'Gaztambide',
    edad:26,
    empresa:'Cajuilosin Inc',
    departamento:'IT'
}
console.log('Carlos',Carlos);
