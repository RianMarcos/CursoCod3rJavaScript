function teste1(num){
    if(num > 7) //mesmo eu tendo identado aqui, o if só vai obedecer a primeira linha de codigo, pq eu nao abri o bloco do if. 
        console.log(num)
        console.log('Final')//Ou seja, essa segunda linha sempre vai ser executada independetende da condição do if
}
//curiosidade, o python é baseado em identação, lá funcionaria certinho
teste1(8) 
teste1(6)//pode ver que retornou o final msm nao abedecendo a condição, pq nao foi colocado as chaves

function teste2(num){
    if(num > 7);{ //nao usar ; nas estruturas de controle
        console.log(num)
    }
}
//aqui executa os dois pq o ; encerrou o if
console.log(' ')
teste2(6)
teste2(8)
