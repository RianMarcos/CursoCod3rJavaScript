function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // nao é necessário atribuir um valor inicial para esta variável para a mesma entrar no do while

do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}`)

}while(opcao != -1)
//no do while ele executa a primeira vez independente da condição, diferente do while 