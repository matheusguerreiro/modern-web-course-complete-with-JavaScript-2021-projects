// arrays são objetos

console.log(typeof Array, typeof new Array, typeof [])

// de preferência trabalhar com dados de mesmo tipo dentro de um array

let aprovados = new Array('Bia', 'Carlos', 'Ana') // da certo, mas sempre usar com colchetes
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // daria erro em outras linguagens

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados[4])

aprovados[9] = 'Rafael'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)