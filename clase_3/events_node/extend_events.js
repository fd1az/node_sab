import {EventEmitter} from "events"

class Saludos extends EventEmitter {
    constructor() {
        super()
        this.saludo = "Hola!!!"
    }

    saludar(data){
        //aca puedo hacer lo que yo quiero....
        console.log(`${this.saludo}: ${data}`)

        //Cuando termine - disparo el evento.
        this.emit('saludo', data )
    }
}

export default Saludos;