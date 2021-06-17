// estrutura de controle while

function gerarInteiroAleatorio_entre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let op = 0
while (op != -1) {
    op = gerarInteiroAleatorio_entre(-1, 10)
    console.log(`Opção escolhida foi ${op}`)
}

console.log('Até a próxima!')