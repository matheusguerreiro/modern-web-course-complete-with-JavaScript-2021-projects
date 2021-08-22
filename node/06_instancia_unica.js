// instância única vs nova instância
// node faz cache

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
