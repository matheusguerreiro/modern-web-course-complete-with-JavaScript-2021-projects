// herança new

function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem-vindo', 132)
const aula2 = new Aula('Bem-vindo', 465)
console.log(aula1, aula2)