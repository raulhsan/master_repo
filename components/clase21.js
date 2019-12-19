function heredaDe(prototypeHijo, prototypePadre) {
    var fn = function () {}
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn
    prototypeHijo.prototype.constructor = prototypeHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido,
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
    
}

/* var raul = new Persona('raul', 'sanchez', 1.65)
var silvia = new Persona('silvia', 'amante', 1.55)
var rodrigo = new Persona('rodrigo', 'rodriguez', 1.81) */

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido,
    this.altura = altura
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

