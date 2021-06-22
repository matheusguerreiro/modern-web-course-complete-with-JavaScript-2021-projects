// estrutura de controle break continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (n in numeros) {
    if (n == 5) {
        break       // o break age sobre o bloco mais próximo, nesse caso ele vai sair do bloco for
    }
    console.log(`${n} = ${numeros[n]}`)
}

for (nn in numeros) {
    if (nn == 5) {
        continue        // o continue interrompe o bloco atual e vai para o próximo
    }
    console.log(`${nn} = ${numeros[nn]}`)
}

// usando o break rotulado(ou seja, com um rótulo)

for_Externo: for (nnn in numeros) {
    for (nnnn in numeros) {
        if (nnn == 2 && nnnn == 3) break for_Externo
        console.log(`Par = ${nnn}, ${nnnn}`)
    }
}
console.log('Fim!')