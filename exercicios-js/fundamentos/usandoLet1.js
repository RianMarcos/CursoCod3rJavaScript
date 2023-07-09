let numero = 1
{
    let numero = 2 //COM O LET O VALOR DECLARANDO DENTRO DA FUNÇÃO NAO SOBREPOEM O VALOR GLOBAL, DIFERENTE DO VAR
    console.log('dentro = ', numero)
}
console.log('fora = ', numero) //1  

//let tem escopo de função, global e de bloco
//var tem somente escopo de função e global
