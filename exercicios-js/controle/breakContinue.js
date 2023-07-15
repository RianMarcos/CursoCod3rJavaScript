const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if(x==5){
        break //break nao age em cima do bloco if, so age em while, for, switch. NESSE CASO O QUANDO X É IGUAL A 5 O BREAK INTERROMPE O FOR
    }
    console.log(x + " = " + nums[x])
}

console.log(" ")

for(y in nums){
    if(y == 5){
       continue //continue só age em cima do laço for ou while. Nesse caso o conitnue só interrompe o caso que for = 5 e continua executando. continue nao age em switch
    } 
    console.log(y + " = " + nums[y])
}

externo: //rotulo
for (a in nums){
    for(b in nums){
        if(a == 2 && b==3) break externo //break rotulado, faz com que o break aga em cima do laço externo e nao do interno
        console.log("Par = "+ a+b)
    }
}
console.log(a,b)

//nao recomendado usar esse tipo de estrutura (existem formas mais elegantes do que usar esses breaks, rotulos,...) evitar estruturas que desviam fluxo