const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: 
        case 9: 
            console.log('Quadro de honra')//se for 10 ou 9 ele executa essa linha
            break //Em JS ele só irá sair do switch sem executar os outros case quando colocamos o break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Final')
            break
        case 3: case 2: case 1: case 0:
            console.log('n deu boa')
            break    
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(9.8)