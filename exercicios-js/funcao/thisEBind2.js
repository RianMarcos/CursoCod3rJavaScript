function PessoaErrorThis(){
    this.idade = 0

    setInterval(function(){//passando função anonima
        this.idade++
        console.log(this.idade)
    }, 1000) //a cada x ms a funcao vai ser desparada novamente. passsei este valor como parametro. Passando esse bind(this) faz ele apontar para a idade do obj pessoa
}
new PessoaErrorThis


function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){//passando função anonima
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //a cada x ms a funcao vai ser desparada novamente. passsei este valor como parametro. Passando esse bind(this) faz ele apontar para a idade do obj pessoa
}
new Pessoa 


function Pessoa2(){
    this.idade = 0

    setInterval(function(){//passando função anonima
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //a cada x ms a funcao vai ser desparada novamente. passsei este valor como parametro. Passando esse bind(this) faz ele apontar para a idade do obj pessoa
}
new Pessoa2