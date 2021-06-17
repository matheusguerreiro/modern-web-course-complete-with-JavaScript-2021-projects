// operadores lógicos em javascript

function comps(t1, t2) {
    const compS = t1 || t2
    const cTv50 = t1 && t2
    // const cTv32 = !!(t1 ^ t2) 
    const cTv32 = t1 != t2
    const mS = !compS
    return {compS, cTv50, cTv32, mS}
}
console.log(comps(true, true))
console.log(comps(true, false))
console.log(comps(false, true))
console.log(comps(false, false))