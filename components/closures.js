function crearSaludo(finalFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalFrase}`)
    }
}

const saludoArg = crearSaludo('che')
const saludoMex = crearSaludo('wey')
const saludoCol = crearSaludo('parce')

saludoArg('raul')
saludoMex('raul')
saludoCol('raul')