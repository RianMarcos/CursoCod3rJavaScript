//Com a notação . voce acessa os membros de um objeto e os membros de uma função a partir deste .

console.log(Math.ceil(6.1)) //ceil arredonda o valor

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'bola' //forma alternativa de declarar

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //This faz o atributo ficar publico, ou seja, faz com que fique visível para fora da função
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()