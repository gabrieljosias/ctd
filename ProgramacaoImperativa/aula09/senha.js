
// 1 DESAFIO
const senha = "1234"
function verificarSenha(){
    if (senha === "1234"){
    return console.log("Acesso Permitido")
    } else {
     console.log("Acesso Negado")

    }

}

verificarSenha("1234")


// 2 DESAFIO
var n1= 5;
var n2 = 5;

function comparaNumeros (n1, n2) {

    if(n1 > n2) {
        console.log("O número 1 é o maior");

    }else if (n1 < n2 ){
        console.log("O número 2 é maior");

    }else{

        console.log("Os números são iguais")
    }
}
comparaNumeros(n1, n2)

//3 DESAFIO







// 4 DESAFIO
console.log(senha === '1234' ? 'ACESSO PERMITIDO' : 'ACESSO NEGADO');
