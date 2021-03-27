import {EventEmitter} from "events"


const events = new EventEmitter()

events.on('user:created', (data) => {
    console.log('user:created', data)
})

events.emit('user:created', {name:"lolo"})
