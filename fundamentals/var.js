// usando o var

// visível fora do escopo
{{{{var sera = 'será?'}}}}
console.log(sera)

function teste() {
    var local = 123
}
teste()
console.log(local)