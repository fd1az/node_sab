import Saludos from "./extend_events.js"
import NotasEvent from "./share_event.js"

const Sal2 = new Saludos()

Sal2.on('saludo',(data) => {
    console.log('Alguien saludo', data)
})

Sal2.saludar('Facu')

NotasEvent.on('crear:nota', () => {
    console.log('lalalalala')
})
NotasEvent.crearNota('crear:nota',{nota: "chetooo"})