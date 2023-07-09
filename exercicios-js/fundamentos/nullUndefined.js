let valor //Não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro!

const produto={}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

//evite atribuir undefined, deixe a linguagem atribuir
//o null voce pode usar, exemplo quando quer zerar o valor da variável