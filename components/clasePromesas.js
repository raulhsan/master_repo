const API_URL = 'https://swapi.co/api/'
const PEOPLE_API = 'people/:id'

const opts = {crossDomain: true}

var ids = [1, 2, 3, 4, 5, 6, 7]

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_API.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)       
        })
        .fail(() => reject(id))
    })

}

function onError(id) {
    console.log(`sucedio un error al obtener al personaje ${id}`)
}

/* var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
}) */

var promesas = ids.map(id => obtenerPersonaje(id))

Promise.all(promesas)
.then(personaje => console.log(personaje))
.catch(onError)
/* obtenerPersonaje(1)
.then(function (person) {
    console.log(`El personaje 1 es ${person.name}`)
})
.catch((error) => {
    console.log(`sucedio un error al obtener al personaje 1`)
}) */

/* obtenerPersonaje(1, function (person) {
    console.log(`Hola yo soy ${person.name}`)
}) */
