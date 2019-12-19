
var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26
}

function esMayorDeEdad(persona) {
    const MAYORIA_DE_EDAD = 18
    if(persona.edad >= MAYORIA_DE_EDAD){
        var mensaje = 'Es mayor de edad'
    } else {
        let mensaje1 = 'Es menor de edad'
    }
    console.log(mensaje)
    console.log(mensaje1)
}

//esMayorDeEdad(raul)

function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1  - fecha2)

    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1993, 4, 28)