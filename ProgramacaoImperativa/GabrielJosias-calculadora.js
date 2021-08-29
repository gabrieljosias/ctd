

// CALCULADORA NIVEL I
function adicionar(a,b){
    return a+b;
}


function subtrair(a,b){
    return a-b;
}


function multiplicacao(a,b){
    return a*b;
}

function divisao(a,b){
    return a/b;
}



// CALCULADORA NIVEL II
console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(2,5)," soma")
console.log(subtrair(2,5)+" subtração")
console.log(multiplicacao(2,5), "multiplicação")
console.log(divisao(2,5), "divisão")
console.log(divisao(10,0), "divisão por zero") // erro 'infinity'
console.log(divisao(0,10), "divisão por zero") // resultado zero
