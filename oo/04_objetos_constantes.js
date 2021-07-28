// objetos constantes

const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)       // congela e não consegue mais mexer
pessoa.nome = 'Maria'
console.log(pessoa.nome)