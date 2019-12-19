var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26,
    developer: true,
    cantante: false,
    cocinero: false
}

const MAYORIA_DE_EDAD = 18

function cumpleanios(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} ${persona.apellido} es: `)
    if(persona.developer) {
        console.log('developer')
    }
    if(persona.cantante) {
        console.log('cantante')
    }
    
}

var esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

function imprimirSiMayorDeEdad(persona) {
    if(esMayorDeEdad){
        console.log(`${persona.nombre} es Mayor de edad`)
    }else{
        console.log(`${pesona.nombre} es menor de edad`)
    }
}