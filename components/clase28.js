const API_URL = 'https://swapi.co/api/'
const PEOPLE_API = 'people/:id'

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback) {
    url = `${API_URL}${PEOPLE_API.replace(':id', id)}`
    $.get(url, opts, function (person) {
        console.log(`Hola yo soy ${person.name}`)

        if(callback) {
            callback()
        }
    })
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5)
            })
        })        
    })
})

