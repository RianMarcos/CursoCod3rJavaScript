//por ser fracamente tipada
// === é estritamente igual
// na maioria das vezes é melhor usar === na igualdade do que == pra nao acabar confundindo, pq == ignora os tipos dar variáveis

console.log('1' == 1) //true pq comparando o valor e nao estou preocupado com o tipo
console.log('1' === 1) //false pq ta comparando um string com number
console.log('3' != 3) //false pq esta comparando o valor
console.log('3' !== 3) //true pq number vs string

const d1 = new Date(0) //0 é data de referencia do JS (1/1/1970)
const d2 = new Date(0)
console.log(d1 === d2) //nos dois casos ele compara a referencia de memoria e retorna falso pq esta trabalhando com variavel de referencia de memoria
console.log(d1 == d2) //nos dois casos ele compara a referencia de memoria e retorna falso pq esta trabalhando com variavel de referencia de memoria
console.log(d1.getTime() === d2.getTime()) //true pq vai retornar o number em ms do time e vai comprar os numbers 
console.log(undefined == null) //true
console.log(undefined === null) //false // === é estritamente igual
