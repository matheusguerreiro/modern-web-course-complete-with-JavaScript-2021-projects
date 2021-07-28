// funções importantes de objetos

const pessoa = {
    nome: 'Ellen',
    idade: 35,
    peso: 63
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser mostrada
    writable: false, // não pode ser alterada
    value: '03/05/1986'
})
console.log(pessoa)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatena os objetos em um unico
console.log(obj)