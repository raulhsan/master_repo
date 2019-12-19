var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26,
    peso: 65
}
var gonzalo = {
    nombre: 'gonzalo',
    apellido: 'soto',
    edad: 13,
    peso: 45
}
var pablo = {
    nombre: 'pablo',
    apellido: 'guzman',
    edad: 50,
    peso: 85
}
var emilia = {
    nombre: 'emilia',
    apellido: 'sanchez',
    edad: 24,
    peso: 70
}
var valeria = {
    nombre: 'valeria',
    apellido: 'mamani',
    edad: 26,
    peso: 65
}

const esGorda = (persona) => persona.peso > 80

var personas = [raul, gonzalo, pablo, emilia, valeria]

var personasGordas = personas.filter(esGorda)

var personasflacas = personas.filter(({peso}) => peso < 80 )

/* console.log(personasGordas)
console.log(personasflacas) */

//const pasarAGramos = persona => persona.peso *= 100

const pasarAGramos = persona =>({
    ...persona,
    peso: persona.peso * 100
})

var personasGramos = personas.map(pasarAGramos)
console.log(personasGramos);

var acum = 0

/* for (let i = 0; i < personas.length; i++) {
    acum += personas[i].peso
    
}*/

const reducer = (acum, {peso}) => acum += peso

var totalKilos = personas.reduce(reducer, 0)

console.log(`En total hay ${totalKilos} kilos de carne`);



