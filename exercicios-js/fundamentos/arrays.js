//diferente do JAVA, aqui o array permite que vc coloque diferentes tipos de dados, e aumente e diminua o valor do array ao longo do codigo

const valores = [7.7, 8.9, 9.2]
console.log(valores[0], valores[2])
console.log(valores[4])//vai retornar undefined. Nao gera erro igual JAVA

valores[3] = 10
console.log(valores)
console.log("Tamanho do vetor: "+ valores.length)

valores.push({id:3}, false, null, 'teste')//inserercao de dados no array
console.log(valores)
console.log(" ")

console.log(valores.pop()) //RETIRA o último valor do array e retorna
console.log(valores)
console.log(" ")

delete valores[0] //deleta o valor de indice 0
console.log(valores)
console.log(" ")

console.log(typeof valores) //em JS um array é um object