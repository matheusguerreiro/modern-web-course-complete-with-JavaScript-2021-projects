// escrevendo arquivos no node.js

const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/13_arquivo_Gerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})