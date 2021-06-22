// estrutura de controle do while

function inteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

do {
    op = inteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${op}.`)
} while (op != -1)

console.log('Até a próxima!')