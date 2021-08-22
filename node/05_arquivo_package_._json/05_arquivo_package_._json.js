// arquivo package.json
// ir até o diretório pelo terminal
// npm init -> várias perguntas para definir como será o arquivo package.json
// npm init -y -> sem perguntas, vai criar o arquivo package.json aceitando tudo
// npm i --save axios // além de instalar o módulo axios vai salvar no arquivo package.json
// --save-dev -> serve para ser usado apenas durante o desenvolvimento, e não durante a produção
// foi criado o arquivo package-lock.json -> deve ir para o repositório, ele diz exatamente as versões dos modulos que foram usadas, evitando bugs em caso de atualização de algum módulo

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // desafio = mulher chinesa com menor salario
    const funcionario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(funcionario)
})