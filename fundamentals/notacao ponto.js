// notação ponto

console.log(Math.ceil(6.1))

const o1 = {}
o1.nome = 'Bola'
console.log(o1.nome)

function Obj(nome) {
    this.nome = nome
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)