function rand({min = 0, max= 1000}){//retorna number aleatorio. Ao inves de obj.min e obj.max, voce digita dentro das chaves o atributo que vc quer tirar dentro do objeto // ou seja, sem utilizar a notacao . voce ja retira os atributos prontos
    const valor = Math.random() * (max - min) + min //da um intervalo entre max e min
    return Math.floor(valor)
} 
const obj = {max: 50, min:40}
console.log(rand(obj))

console.log(rand({})) //obj vazio

//console.log(rand()) da erro por 
