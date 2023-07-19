const pessoa ={ //objeto
    saudacao: 'Bom dia',
    falar(){ //funcao dentro do objeto
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//vamos usar o bind pra resolver isso
const falar2 = pessoa.falar.bind(pessoa) //o this é o objeto que passei na funcao bind. O BIND RESOLVE AQUELE CONFLITO POR TER USADFO THIS LA NA FUNCAO, AGORA ELE FAZ COM QUE O THIS QUE FOI USADO LA SEJA ENXERGADO AQUI 
falar2()

//IMPORTANTE ENTENDER QUE ELE NAO ALTERA A FUNÇÃO, SO MUDA A VISIBILIDADE DO THIS NA HORA QUE FOR CHAMADA 
const falar3 = pessoa.falar
falar3() 