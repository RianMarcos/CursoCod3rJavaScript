const prod1 = {} //Objeto é identificado por {}. Criei um objeto vazio

prod1.nome = 'Celular' //objeto .nome criado dinamicamente
prod1.preco = 787.75
prod1['Desconto bom'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 78
}
console.log(prod2)

//com o objeto vc consegue gerar o JSON, mas JSON não é a mesma coisa que objeto