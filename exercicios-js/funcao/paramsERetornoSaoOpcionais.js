function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log('Valor acima do permitido ' + area)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2)) //pega só os dois primeiros
console.log(area(5,5))