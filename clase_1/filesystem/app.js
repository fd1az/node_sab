import fs from "fs"


let htmlOnDeman = `
    <h1>Hola mundo soy un html creado con js </h1>
`

let jsOnDeman = `
   export function hola() {
        console.log("hola desde el ondemand")
   }
`

fs.writeFileSync("hola.html", htmlOnDeman)
fs.writeFileSync("hola.js", jsOnDeman)
console.log(fs.readFileSync("hola.js").toString())

 import("./hola.js").then(data => {
     let {hola} = data
     hola()
 })





console.log("Se creo el archivo hola.js")