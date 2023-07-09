// par nome/valor
const saudacao ='Opa' //context léxico 1

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 90,
    endereco: {
        logradouro: 'Rua Macapa',
        numero: 555
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
