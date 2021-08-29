// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"


function preparoComida(comida, tempoDePreparo) {

    let tempoDePreparoPadrao;

    switch (comida) {
        case "pipoca": // ** se o valor de comida for 'pipoca', por exemplo, o valor de tempoDePreparoPadrao será 10
            tempoDePreparoPadrao = 10
            break;
        case "macarrão":
            tempoDePreparoPadrao = 8
            break;
        case "carne":
            tempoDePreparoPadrao = 15
            break;
        case "feijão":
            tempoDePreparoPadrao = 12
            break;
        case "brigadeiro":
            tempoDePreparoPadrao = 8
            break;

        default : tempoDePreparoPadrao = null
        
    }

 // ** - VERIFICANDO E COMPARANDO OS TEMPOS DE PREPARO
 if (tempoDePreparoPadrao == null) {

    console.log('Prato inexistente');
 }
  
 else if(tempoDePreparo > tempoDePreparoPadrao * 2 && tempoDePreparo < tempoDePreparoPadrao * 3) {

    console.log('A comida queimou');

} else if(tempoDePreparo > tempoDePreparoPadrao * 3) {

    console.log('KABOOOM! 🔥');

} else if(tempoDePreparo < tempoDePreparoPadrao) {

    console.log('Tempo insuficiente');



} else {

    console.log('Bom apetite');

}

}

preparoComida("pipoca",21);