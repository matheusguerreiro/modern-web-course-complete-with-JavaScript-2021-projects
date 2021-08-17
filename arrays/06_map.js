// função map

const numeros = [1, 2, 3, 4, 5]

// map é um for com propósito
let resultado = numeros.map(function(e) {
    return e * 2 // todos os elementos x 2
})
console.log(resultado)

// map gera um novo array

const soma10 = e => e + 10
const triplo = e => e * 3
const pDinheiroBR = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}` // converter para dinheiro BR

resultado = numeros.map(soma10).map(triplo).map(pDinheiroBR)
console.log(resultado)

// map mapeia cada elemento de um array, transforma como você quiser e gera um novo array