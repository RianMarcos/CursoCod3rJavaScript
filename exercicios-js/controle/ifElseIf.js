Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim

}

const imprimirResultado = function(nota){
    if (nota.entre(9,10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7,8.99))
    {
        console.log('Aprovado')
    }else if(nota.entre(4, 6,99)){
        console.log("Final")
    }else{
        console.log("N deu")
    }
}

imprimirResultado(8)
