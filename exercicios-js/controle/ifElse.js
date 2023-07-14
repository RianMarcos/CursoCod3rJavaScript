const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('n')
    }
}

imprimirResultado(10)
imprimirResultado('string')//por ser fracamente tipada ela compara
 