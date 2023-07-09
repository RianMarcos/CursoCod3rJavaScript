const escola = 'Coder'

console.log(escola.charAt(4)) //Retorna a 4º string

console.log(escola.charCodeAt(3))//Retorna o valor dele na tabela ASCII
console.log(escola.indexOf('e'))//Retorna em que lugar (indice) esta aquele valor

console.log(escola.substring(1)) //Vai imprimir dps do indice 1
console.log(escola.substring(0,3)) //Imprime do indice 0 até o indice 2, nao inclui o indice 3

console.log('Estudo Pela '.concat(escola).concat("!")) //Conctena 
console.log('Estudo Pela ' + escola + "!") //Conctena usando o "+"
console.log(escola.replace('e', '3')) //Substitui o valor

console.log('Rian,Murta,Marcos,Ryan,Sepulveda'.split(','))//Pega strings separadas por virgula e converte em array


