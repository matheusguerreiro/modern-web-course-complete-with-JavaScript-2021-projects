// prototypes de funções

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['Jesus', 'Salva'].first())

// Nunca faça isso! Mudar comportamento de um método já existente.
String.prototype.toString = function() {
    return 'Lascou Tudo!'
}
console.log('Escola Cod3r'.reverse())