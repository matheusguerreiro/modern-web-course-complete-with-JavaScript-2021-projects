// usando o let para criação de variáveis

let n = 1
{
    let n = 3
    console.log('dentro = ', n)
}
console.log('fora = ', n)

/* 
 * prefira usar sempre o let para criação de variáveis
 * porque?
 * var tem função global e de função
 * let tem função global, de função e de bloco
 */