// filter

const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return true
}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil // ou p.fragil == true

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)