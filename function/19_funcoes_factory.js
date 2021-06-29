function criarProduto(nome, preco, desconto = preco * 0.10) {
    return {
        nome: nome,         // OU nome,
        preco: preco,       // preco,
        desconto: desconto  // desconto
    }
}
p1 = criarProduto('Xbox 360', 1355.43)
p2 = criarProduto('Playstation 4', 2223.75)
console.log(p1, p2)

console.log(typeof(p1))