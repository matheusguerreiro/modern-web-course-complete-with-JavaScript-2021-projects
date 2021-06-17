// estrutura de controle if

function soBoaNoticia(n) {
    if (n >= 7) {
        console.log(`Aprovado com nota ${n}`)
    }
}

soBoaNoticia(8.3)
soBoaNoticia(6.3)

function seForVerdadeEuFalo(v) {
    if (v) {
        console.log(`É verdade... ${v}`)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})