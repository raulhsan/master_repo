var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26
}
var hugo = {
    nombre: 'hugo',
    apellido: 'chavez',
    edad: 5
}

function saludar(saludo = 'hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/* const saludarRaul = saludar.bind(raul)
const saludarHugo = saludar.bind(hugo) */

setTimeout(saludar.bind(raul, 'Hola che'), 1000)

saludar.call(hugo,'Hola gato')

saludar.apply(raul,['hola wey'])

console.log('gato machirulo');
[1, 2, 3].forEach(n => console.log(n*2))

const nombre = 'tomas'
console.log(`Hola ${nombre}`);
`${nombre} la cdtm`