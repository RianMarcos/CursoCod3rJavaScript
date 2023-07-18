//funcao em JS é FIRST-CLASS OBJECT (CITIZENS)
//Higher-order function

//criar de forma literal
function fun(){ 
 //posso ou nao retornar valor. Seu eu na o retornar ela retornar automaticamente undefined
}

//armazenar em uma variável
const fun2 = function(){

}

//Armazenar em um array
const array = [function(a,b){return a+b},fun,fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())

//Passar função com parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
//abaixo é a mesma chamada:
const armazenarSoma = soma(2,3)
armazenarSoma(4)