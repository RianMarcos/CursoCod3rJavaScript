let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //esta tem prioridade em relacao a num--
console.log(num1)

console.log(++num1 === num2--)//true pq o num1 foi incrementado antes de ser comparado e o num2 foi substraído dps de ser comparado
console.log(num1 === num2)
