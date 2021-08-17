// implementando o próprio map

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i=0; i<this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lápis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json) // função paraObjeto vai receber um json que é cada um dos elementos do array e, vai gerar um novo array de objetos. JSON.parse(json) vai converter cada elemento json em objeto.
const apenasPreco = produto => produto.preco // depois de convertido para objeto, função apenasPreco vai receber um objeto e, pegar só o preço desse objeto.

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)