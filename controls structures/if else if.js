// estrutura de controle if else if

Number.prototype.entre = function (i, f) {
    return this >= i && this <= f
}

const imprimirResultado = function (n) {
    if (n.entre(9, 10)) {
        console.log('Quadro de Honra!')
    } else if (n.entre(7, 8.99)) {
        console.log('Aprovado!')
    } else if (n.entre(4, 6.99)) {
        console.log('Recuperação!')
    } else if (n.entre(0, 3.99)) {
        console.log('Reprovado!')
    } else {
        console.log('Nota Inválida!')
    }
}
imprimirResultado(9.7)
imprimirResultado(8)
imprimirResultado(4.8)
imprimirResultado(2.9)
imprimirResultado(-1)
imprimirResultado(11)