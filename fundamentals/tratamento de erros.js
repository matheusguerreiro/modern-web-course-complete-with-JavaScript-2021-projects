// tratando erros em javascript

function tratarErro(erro) {
    throw new Error('Deu zebra!') // throw serve para lançar o erro
    // throw 10
    // throw true
    // throw 'mensagem'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Vou executar depois do try ou do catch de qualquer maneira!')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)