{
    {
        {
            { 
                var sera = 'será??'
            }
        }
    }
}
console.log(sera) //MESMO A VAR SENDO DECLARADA FORA DO BLOCO (ESCOPO), ELA AINDA É VISIVEL 

function teste(){
   var local = 123 
   console.log(local)
}

teste()
console.log(local) //variável declarada dentro da funcao nao fica visivel globalmente

//evite fugir da criação de variáveis globais, pois vc pode acabar subscrevendo ela e gerando um problema
//VAR SÓ TEM DOIS ESCOPOS VISIVEIS, OU GLOBAL OU FUNCAO (VISIVEL SO DENTRO DA FUNCAO)
