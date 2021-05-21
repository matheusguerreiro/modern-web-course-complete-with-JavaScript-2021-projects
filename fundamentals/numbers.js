// números

const p1 = 1.0
const p2 = Number('2.0')

console.log(p1, p2)
console.log(Number.isInteger(p1))
console.log(Number.isInteger(p2))

const a1 = 9.871
const a2 = 6.871

const t = a1 * p1 + a2 * p2
const m = t / (p1 + p2)
console.log(m)
console.log(m.toFixed(2))

console.log(m.toString(2)) // converte em binário
console.log(typeof m)

// alguns cuidados com os números

console.log(7 / 0)
console.log("10" / 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
console.log((10.839).toFixed(2))
console.log("3" + 2)
console.log("3" - 2)