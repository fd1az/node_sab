import {EventEmitter} from "events"

class Notas extends EventEmitter {
    constructor() {
        super()
        this.nota = "Nota Instances"
    }

    crearNota(data){
        //aca puedo hacer lo que yo quiero....
        console.log(`${this.nota}: ${data}`)

        //Cuando termine - disparo el evento.
        this.emit('crear:nota', data )
        console.log("total listeners:",this.listenerCount('crear:nota'))
    }
}
const NotasEvents = new Notas()

//Listener 1
NotasEvents.on('crear:nota', (nota) => {
    console.log('crear:nota', nota);
})



export default NotasEvents;