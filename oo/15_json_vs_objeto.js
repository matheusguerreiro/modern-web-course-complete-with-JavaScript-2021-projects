// json vs objeto

const obj = {a: 1, b: 2, c: 3, soma() {a + b + c}}
console.log(JSON.stringify(obj))  // converte um Objeto para JSON(JavaScript Object Notation)
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))  // converte um JSON(que é um formato textual) para Objeto

// exemplos de dados dentro do JSON
console.log(JSON.parse('{"a": 1, "b": 2.2, "c": "string", "d": true, "e": {}, "f": []}'))