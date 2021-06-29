// funções arrow em javascript

// normal
let dobro = function(a) {
    return 2 * a
}

// arrow
dobro = (a) => {
    return 2 * a
}

// OU

// arrow ainda menor
dobro = a => 2 * a      // return implícito

console.log(dobro(Math.PI))

// normal
let ola = function() {
    return 'Olá'
}

// arrow
ola = () => 'Olá'
ola = _ => 'Olá'        // possui um parâmetro

console.log(ola())