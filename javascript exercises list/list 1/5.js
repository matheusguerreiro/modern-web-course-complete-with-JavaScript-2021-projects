//minha resolução
function analisarNumeros(n, n1) {
    if (typeof n != typeof n1) {
        return false
    } else {
        return n >= n1
    }
}
console.log(analisarNumeros(5, 5))