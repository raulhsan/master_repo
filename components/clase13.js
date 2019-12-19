var raul = {
    nombre: 'raul',
    apellido: 'sanchez',
    edad: 26,
    peso: 65
}

const PESO = 0.2

const aumentarDePeso = persona => persona.peso += PESO

const adelgazar = persona => persona.consolepeso -= PESO

console.log(`Al inicio del año ${raul.nombre} pesa ${raul.peso.toFixed(1)}Kg`)

for (let i = 1; i < 365; i++) {
    var random = Math.random()

    if(random < 0.25) {
        aumentarDePeso(raul)
    }else if (random < 0.5) {
        adelgazar(raul)
    }
    
}

console.log(`Al final del año ${raul.nombre} pesa ${raul.peso.toFixed(1)}Kg`)

var contador = 0
const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve());

if(contador === 1 ) {
    console.log(`Fui a ver si llovia una vez`);
    
}else {
    console.log(`Fui a ver si llovia ${contador} veces`);
}