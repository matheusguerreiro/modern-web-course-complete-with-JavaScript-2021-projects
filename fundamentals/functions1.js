// exemplos básicos de functions em javascript

function Soma(a, b) {
    console.log(a + b)
}

Soma(2, 3)

Soma(2)
Soma(2, 5, 5, 7, 8)
Soma()

function soma2(a, b = 1) {
    return a + b
}
console.log(soma2(2, 3))