// minha resolução
function salarioLiquido(qHorasTrabalhadas, vDaHora) {
    let salarioB = qHorasTrabalhadas * vDaHora
    let imposto = salarioB * 0.30
    return `Salário bruto: ${qHorasTrabalhadas * vDaHora}
Salário líquido: ${salarioB - imposto}`
}
console.log(salarioLiquido(180, 60))