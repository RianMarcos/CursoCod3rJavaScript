function tratarErroELancar(erro){
    //abaixo vemos formas possiveis de usar o throw para capturar o erro e imprimir a msg
    //throw new Error('Estamos tratando este erro!') 
    //throw 10
    //throw false
    throw{
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!") //se gerou erro, o erro vai no catch
    } catch (e){
        tratarErroELancar(e) // passa erro como parametro
    } finally{ //será executado sempre, com erro ou não, ou seja, deu tudo certo cai aqui dps do try. Se ocorrer um erro entra no catch e cai aqui dps
        console.log("Final")
    }
}

const obj = {name: "Rian"} // simular o erro passndo NOME ao inves de name
imprimirNomeGritado(obj)

//Tente evitar msgs em inglês para o usuario final, evitar codigos e etc.
