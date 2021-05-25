// par nome/valor

const s = 'Opa' // contexto léxico 1

function e() {
    const s = 'Falaaa' // contexto léxico 2
    return s
}

// objects são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(s)
console.log(e())
console.log(cliente)