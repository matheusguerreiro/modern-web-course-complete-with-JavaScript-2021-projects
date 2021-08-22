const contadorA = require('./06_instancia_unica')
const contadorB = require('./06_instancia_unica')

const contadorC = require('./06_nova_instancia')() // invocando a função factory
const contadorD = require('./06_nova_instancia')()

contadorA.inc()
contadorB.inc()
console.log(contadorA.valor, contadorB.valor) // aqui mudou

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // aqui não