function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //e 
    const comprarTv50 = trabalho1 && trabalho2 //ou
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//Nao existe operador ou excluiso, então fazemos isso: as duas !! negações sao para converter algo para boolean
    const comprarTv32 = trabalho1 != trabalho2 //Outra forma de usar ou exclusivo
    const manterSaudavel = !comprarSorvete //negação

    // para retornar as 4 constantes, vamos colocar elas dentro de um objeto
    //objeto é uma coleção chave valor {}
    //forma padrão de criação de obj em JS {comprarSorvete: comprarSorvete} // porem na nova att vc pode criar obj diretamente como vemos abaixo:
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //vale lembrar que implicitamente ele esta fazendo exatamente isso: comprarSorvete: comprarSorvete, comprarTv50: comprarTv50,...}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))