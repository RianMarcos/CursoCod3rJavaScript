const funcs =[]

for (let i =0; i <10; i++){ //como aqui é let e tem escopo de bloco, ele sai o valor de "memória". Se fosse com VAR a saída seria o último valor.
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()