const fabricantes = ['Merceds', 'Audi']

function imprimir(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}

//call back voce passsa uma função para outra função
fabricantes.forEach(imprimir) //forEach é uma funcao de fabricantes
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))