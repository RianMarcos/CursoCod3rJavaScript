let dobro = function(a){
    return 2 * a 
}

//reescrevendo a mesma função, porem no formato arrow
dobro = (a) => {
    return 2 * a
} //uma caractristica da função arrow, é que ela é anonima, ou seja, voce precisa armazenar ela em uma variável

dobro = a => 2 * a //funcao arrow com apenas uma linha pode ser declarada assim. return implicito



let ola = function(){
    return 'Olá'
}

ola = () => 'Ola' //a func de baixo é a mesma coisa
ola = _ => 'Ola' //o _ substitui o uso dos parenteses quando vc nao quer passar parametro algum para função 
//JS nao obrigada a passar parametros
console.log(ola())
