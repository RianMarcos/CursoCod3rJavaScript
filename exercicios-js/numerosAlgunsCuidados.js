console.log(7/0) //retorna infinito

console.log("10" / 2) //Aqui funciona, converte em valor numerico e faz a divisão (Foda em)
console.log("10,5" / 2) //Com virgula ele nao sabe o que é, porem com . funciona

console.log("2" + 5)//Concatena, não soma (String Ganha)
console.log("2" - 5)//Aqui substrai

console.log("Show" * 2) //Não funciona

console.log(0.1 + 0.7) //Retorna 0.79 e nao 0.8 (isso pq é uma especificação do IEEE, padrão que linguagens seguem) não é 100% preciso

//console.log(10.toString()) Assim ele nao deixa converter para String
console.log((10.5454).toFixed(2))//Esse funciona



