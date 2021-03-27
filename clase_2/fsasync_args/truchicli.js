import fs from "fs"

if(process.argv[2] === "create"){
    console.log("create file")
    fs.writeFileSync("hola.js", "let hola = 'hola';")
}else if (process.argv[2] === "version" || process.argv[2] === "-v" ){
    console.log("version 1.0.1")
}
else if (process.argv[2] === "-h" ){
    console.log(`
    comandos disponibles:

    -v           version
    create       crear un archivo js
    version      version
    `)
}
else if (process.argv[2] === "project" ){
    fs.mkdirSync("components")
    fs.mkdirSync("hooks")
    fs.mkdirSync("store")
    fs.mkdirSync("utils")
}