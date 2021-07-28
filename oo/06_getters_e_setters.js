// getters e setters

const sequencia = {
    _valor: 1, // convenção
    get valor() {return this._valor},
    set valor(valor) {this._valor = valor}
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)