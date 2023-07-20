let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj) //o bind faz o this apontar para o obj
comparaComThis(global)
comparaComThis(obj)

//testando se funciona isso com arrow function

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //na arrow a função aponta para o obj msm
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)