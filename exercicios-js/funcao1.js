//Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,1)
imprimirSoma(2)//em Js voce pode passar apenas um valor, o segundo valor que nao foi mandando vai ser tratado como undefined, a função retorna NaN not a number
imprimirSoma(4,5,6,8) //Ele nao vai reclamar por ter mais parametros do que a função aceita, ele vai pegar apenas os dois primeiros parâmetros


//Função com retorno
function soma(a, b=0){
    return a+b
}

console.log(soma(2,3))

