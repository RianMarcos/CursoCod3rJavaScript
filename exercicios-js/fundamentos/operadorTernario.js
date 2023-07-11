//op ternario tem 3 operandos
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Rep' //Função com operador ternario com retorno implicito

//mesma funcao arrow porem com corpo:
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Rep'
}

console.log(resultado(7.1))
console.log(resultado2(7.1))