// cadeia de protótipos (prototype chain)

const avo = {atr: 'A'}
const pai = {__proto__: avo, atr1: 'B'}
const filho = {__proto__: pai, atr2: 'C'}
console.log(filho.atr1, filho.atr, filho.atr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(aceleracao) {
        if (this.velAtual + aceleracao <= this.velMax) {
            this.velAtual += aceleracao
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())