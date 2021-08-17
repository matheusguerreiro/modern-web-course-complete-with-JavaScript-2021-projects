// classes

class Lancamento {
    constructor(nome = 'Genério', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 45000)
const contaLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(8, 2021)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())