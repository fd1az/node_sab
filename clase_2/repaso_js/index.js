//Callback

function printName(name, cb) {
    cb(name)
}

printName("Facu", console.log)

let aNum = [1,2,3]

let aNumDobles = aNum.map((value) => value * 2 )

console.log(aNumDobles)

//Inmutabilidad
//Pass by value / pass by reference

const miString = "Hola"


const aNumeritos = [1,2,3,4,5,6] // NO ES UN VALOR - ES UNA REFERENCIA EN MEMORIA 

const aNumeritos2 = aNumeritos

console.log(aNumeritos2 === aNumeritos)
console.log(aNumeritos)

aNumeritos2[0] = 145

let oFacuInfo = {
    name: "facu",
    phone:"12345678",
    address: {
        street: "alguna de ramos",
        number: "123"
    }
}

let oIvanInfo = {
    ...oFacuInfo,
    address :{
        ...oFacuInfo.address
    }
}
console.log(oIvanInfo === oFacuInfo)
console.log(oIvanInfo.address === oFacuInfo.address)

