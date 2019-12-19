class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
/*         var nombre = this.nombre
        var apellido = this.apellido */
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if(fn) {
            fn(tnombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido} `);
    if(esDev){
        console.log(`No sabia que eras developer! ;)`)
    }
}

var raul = new Persona('raul', 'sanchez', 1.65)
var silvia = new Persona('silvia', 'amante', 1.55)
var rodrigo = new Desarrollador('rodrigo', 'rodriguez', 1.81) 
