var nombre = prompt('escriba su nombre: ')
var apellido = prompt('escriba su apellido: ')
var anios = prompt('escriba su edad: ')
var nombreMayusculas = nombre.toUpperCase()

var nombreCompleto = `${nombre} ${apellido}`

var str = nombreCompleto.substr(1,2)
var precioVino = 200.3

var total = precioVino * 3
var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26
}
var gonza = {
    nombre: 'gonzalo',
    apellido: 'soto',
    edad: 13
}
function imprimirEdad(persona) {
    var {edad} = persona
    console.log(`Hola me llamo ${persona.nombre } y tengo ${edad} años`);
}
imprimirEdad(raul)
imprimirEdad(gonza)



function imprimirPersona(persona) {
    console.log(`tu nombre es: ${persona.nombre.toUpperCase()}`)
    var {apellido} = persona
    console.log(`tu apellido es: ${apellido}`)
}

imprimirPersona(raul)