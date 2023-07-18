//Estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1 
    b = b || 1 //se o b for falso recebe 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(), soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))

function soma2(a,b,c){
    a = a !== undefined ? a : 1 //operador ternario. Se o valor for diferente ele pega o próprio valor de a, se nao for ele pega 1
    b = 1 in arguments ? b : 1 //dentro de arguments, existe o indice 1? se existir pegue o valor de b, se nao pegue o valor 1
    c = isNaN(c) ? 1 : c //se nao for um numero ele pega um valor padrao (1) se for numero ele pega o proprio numero que for passado
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//mesma coisa mas usando valor padrão, forma mais nova de utilização. (MELHOR ESCOLHA)
function soma3(a=1, b=1, c=1){
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))