/* funções em javascript
 * função em js é first-class object (citizens)
 * higher-order function
 */

// criar de forma literal
function f1() {

}

// armazenar em uma variável
const f2 = function() {

}

// armazenar em um array
const array = [function(a, b) {return a + b}, f1, f2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function() {return 'Opa!'}
console.log(objeto.falar())

// passar como parametro
function correr(funcao) {
    funcao()
}
correr(function() {console.log('Executando...')})

// pode retornar ou conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(2)