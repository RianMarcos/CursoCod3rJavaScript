console.log(typeof Object)// function
console.log(typeof new Object)//instanciando uma função. Object

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente) //mesmo efeito

class Produto{} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)// posso colocar ou nao os parenteses Produto() 