//Armazenando uma funcao em uma variável
const imprimirSoma = function (a,b){ //estou armazenando a funcao na variável
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variável
const soma = (a,b) => { // A "=>" substitui a palavra function
    return a+b
}

console.log(soma(2,3))

//Retorno implícito
const subtracao = (a,b) => a-b //quando nao tem chaves é uma funcao com apenas uma linha de codigo  (arrow function)
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a) //Funcao de unico parametro

imprimir2("Funcao de único parâmetro")
