function rand([min = 0, max = 1000]){
    if(min > max) [min,max] = [max,min] //imverte as variáveis
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))//passando apenas o segundo
console.log(rand([]))
console.log(rand()) //problema pq ta desestruturando um elemento de algo que é nulo



