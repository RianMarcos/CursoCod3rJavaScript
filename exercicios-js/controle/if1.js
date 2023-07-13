function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNoticia(8.1)
    
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('é verdade '+ valor)
    }
}

seForVerdadeEuFalo() //Falso
seForVerdadeEuFalo(null)//Falso
seForVerdadeEuFalo(undefined)//Falso
seForVerdadeEuFalo(NaN)//Falso
seForVerdadeEuFalo('')//Falso
seForVerdadeEuFalo(0)//Falso

seForVerdadeEuFalo(-1)//Verdade
seForVerdadeEuFalo(' ')//Verdade
seForVerdadeEuFalo('?')//Verdade
seForVerdadeEuFalo([])//Verdade - array vazio
seForVerdadeEuFalo([1,2])//Verdade - array com elemento
seForVerdadeEuFalo({})//Verdade - (objeto)