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

async function obtenerPersonajes() {
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
    
}

obtenerPersonajes()