// foreach percorrer um array

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(elemento, indice) {
    console.log(`Índice: ${indice} - Elemento: ${elemento}`)
})

aprovados.forEach(elemento => console.log(elemento))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(elemento, indice, array) {
    console.log(`Índice: ${indice}\nElemento: ${elemento}\nArray: ${array}`)
})