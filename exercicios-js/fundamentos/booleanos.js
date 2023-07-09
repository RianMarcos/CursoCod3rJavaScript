//lembrar de sempre declarar as variaveis como const quando possível, aqui estamos declarando como let , pois iremos alterar a mesma posteriormente
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//transformar number em vdd ou false. 
isAtivo = 1 //agora passou para number
console.log(!!isAtivo) //retorna true pq ta negando duas vezes
console.log(!isAtivo) //retorna falso

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //NaN == not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || NaN))

let name = ''
console.log(name || 'Desconhecido') //Teste se está vazio, se estiver retorna o valor "Desconhecido" no lugar de name



