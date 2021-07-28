// herança em javascript

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

// toda função tem um prototype, que é uma referencia ao seu protótipo(classe pai)