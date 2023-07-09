const nome = 'Rian'
const concatenacao = 'Olá ' + nome + '!'

//Com o template string Dentro de uma string vc acessa a variável nome e faz coisas que nao pode fazer em uma string normal, como quebrar uma linha
const template = `
 Olá
 ${nome}`
console.log(concatenacao,template)

//Expressoes
console.log(`1 + 1= ${1 + 1}`) //Ele so vai interpolar/interpretar o que está dentro do ${} só ali ele faz soma

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
 