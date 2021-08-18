// imperativo x declarativo

const alunos = [
    {nome: 'João', sexo: 'M', nota: 7.9},
    {nome: 'Maria', sexo: 'F', nota: 9.1}
]

// imperativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(`A média é: ${total / alunos.length}`)

// declarativo
const soNota = aluno => aluno.nota
const soma = (totalNotas, notaAtual) => totalNotas + notaAtual
const media = alunos.map(soNota).reduce(soma)
console.log(`A média é: ${media / alunos.length}`)