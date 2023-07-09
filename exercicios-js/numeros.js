const peso1 = 1.0 //Ponto flutuante aqui é number tbm
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1))//Testar se é inteiro
console.log(Number.isInteger(peso1))//Testar se é inteiro

const avaliacao1 = 9.45
const avaliacao2 = 7.55

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //Define um limite de 2 casas decimais, mas nao alterou o valor da media


console.log(media.toString()) 
console.log(media.toString(2))//em binário

console.log(Number)//Number com N maiusculo é uma função e com n minusculo é tipo primitivo
 
