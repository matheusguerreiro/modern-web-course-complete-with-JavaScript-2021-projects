// Strings

const e = "Cod3r"

console.log(e.charAt(4))
console.log(e.charCodeAt(3))
console.log(e.indexOf('3'))
console.log(e.substring(1))
console.log(e.substring(0, 3))
console.log("Escola ".concat(e).concat("!"))
console.log("Escola " + e + "!")
console.log(e.replace(/\d/, 'e')) // expressão regular
console.log("Ana,Maria,Pedro".split(','))

// Template String

const n = 'Rebeca'
const c = 'Olá ' + n + '!'
const t = `Olá ${n}, prazer em te conhecer!` // entre crases ${} pode ser interpretado
console.log(t)

const up = te => te.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)