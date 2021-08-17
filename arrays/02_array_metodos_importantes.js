// métodos importantes em arrays

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

// splice adiciona e remove elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // vai adicionar bottas e massa antes do raikkonen
console.log(pilotos)
// remover
pilotos.splice(3, 1) // vai remover o massa
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um Novo array
console.log(algunsPilotos1)

const algunsPelotos2 = pilotos.slice(1, 4)
console.log(algunsPelotos2)