alert("Boas vindas ao jogo do número secreto"); //pode usar '' '' ou  ' ' / ;=significa que terminou o programa
let numeroMaximo = 5000; //No caso valor maximo do jogo (5000 - seria um teste)
//let  numeroSecreto = 5; //let= variavel - / (5) número escolhido          ou
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //Se quiser que o numero seja aleatorio, no caso ninguém sabe do numero escolhido.
console.log(numeroSecreto);
let chute;
let tentativas = 1; //quantidade de tentativas 

//enquanto foi chute não for igual ao número secreto.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Se o chute for igual ao número secreto.
    if (chute == numeroSecreto) {

    // PARA/NÃO CONTINUA/ACERTOU DE PRIMEIRA. Se a primeira tentativa for certa.
    break;
    }

    //Se não: se o número secreto for maior ou menor que o chute 
    else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
    else{
        if(chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);

        }
    //Quantidade de tentativa    
        tentativas++; 

        }   
    }
}
let palavraTentativa = tentativas > 1 ?  "tentativas" : "tentativa"
alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
// //Se sim (while) 
// alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
// }
// else{ 
// alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa. Parabéns!!!`);
// }

