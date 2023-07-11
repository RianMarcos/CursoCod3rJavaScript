let a = 3 //n é global, é local
this.c= 2 //exporta pra fora do arquivo
global.c = 456


console.log(this.a) //indefinido pq esse this ta puxando um global
console.log(global.a) //global é equivalente a window.
console.log(global.c)
console.log(this.c) 
console.log(module.exports.c)
console.log(module.exports === this)

console.log(module.exports) 

//criando variavel maluca: sem var e let!
abc = 3 //nao fazer!!
console.log(global.abc)

//Ter consciência do runtime que vc está e as especifidades de cada um
//nao colocar var em espopo global, se precisar colocar em obj
//declarar constantes