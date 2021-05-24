// armazenando uma function em uma var, let ou const
const iSoma = function (a, b) {
    console.log(a + b)
}

iSoma(2, 3)

// armazenando uma arrow function em uma var, let ou const
const soma = (a, b) => {
    return a + b
}
console.log(soma(3, 3))

// retorno implícito
const sub = (a, b) => a - b
console.log(sub(5, 2))