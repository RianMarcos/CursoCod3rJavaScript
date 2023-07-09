// novo recurso do ES2015

const pessoa = {
   nome: 'Rian',
   idade: 21,
   endereco:{
    logradouro: 'Nao sei',
    numero: 1000
   }

}

const { nome, idade } = pessoa //tire de dentro do objeto pessoa o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //tirou do objeto e atribuiu uma variável
console.log(n, i)


const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)


const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)