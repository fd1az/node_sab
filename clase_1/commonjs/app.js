// const {printPrivate:otroNombre} = require('./lib')
// otroNombre()

const lib = require('./lib')
const {add} = require('./otroModulo')
lib.printPrivate()

const printPrivate = "asdasdasd"
console.log(printPrivate)

console.log(lib.calculoInterno)
console.log("Yo tambien utilizo add ", add(50,10))
console.log(__filename)
