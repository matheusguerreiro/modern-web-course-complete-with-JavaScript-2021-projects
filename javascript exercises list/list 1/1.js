// minha resolução
cumprimentar = function(n) {
    return `Olá, ${n}!`
} 
console.log(cumprimentar('Matheus'))

// resolução 1
function cumprimentarR1(nome) {
    const ola = 'Olá'
    return [ola, nome].join(', ').concat('!')
}
console.log(cumprimentarR1('Leonardo'))

// resolução 2
function cumprimentarR2(nome) {
    return 'Olá, ' + nome + '!'
}
console.log(cumprimentarR2('Leonardo'))