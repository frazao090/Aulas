// // Contador inicializado em 0
// let contador = 0;

// // Condição de parada do loop
// while (contador < 10){
//   // Bloco a ser executado caso a condição seja verdadeira
//   console.log(`contador = ${contador}`);
//   // Incremento da variável contador
//   contador++;
// }

// // Esse trecho só será executado após o loop ser finalizado
// console.log("Saímos do loop!!");

// function tabuadaDoDoisSomenteImpares(){
//     // Contador inicializado em 0
//     let contador = 0;

//     // Condição de parada do loop (MENOR ou IGUAL a 10)
//     while (contador <= 10){
//       // Esse trecho só será executado caso a condição de parada seja verdadeira
//       console.log(`Valor atual do contador: ${contador}`);

//       if (contador % 2 == 1){
//         // Esse trecho só será executado caso o contador seja IMPAR
//         console.log(`2 x ${contador} = ${contador * 2}`);
//       }

//       // O contador é incrementado em 1 a cada iteração
//       contador ++;
//     }

//     // Esse trecho só será executado após o loop while ser finalizado
//     console.log("Saímos do loop!!");
//   }

//   tabuadaDoDoisSomenteImpares();

// function tabuadaDoDoisSomenteImpares(){
//     // Contador inicializado em 1
//     let contador = 1;

//     // Condição de parada do loop (MENOR ou IGUAL a 10)
//     while (contador <= 10){
//       // Esse trecho só será executado caso a condição de parada seja verdadeira
//       console.log(`Valor atual do contador: ${contador}`)

//       console.log(`2 x ${contador} = ${contador * 2}`)

//       // O contador é incrementado em 2 a cada iteração
//       contador += 2;
//     }

//     // Esse trecho só será executado após o loop while ser finalizado
//     console.log("Saímos do loop!!");
//   }

//   tabuadaDoDoisSomenteImpares();

// function pedidosLanchonete(){

// let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"))
// let valorTotalDoPedido = 0
// let quantidade = 0
// while(escolha != 0){
//     if(escolha == 100){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.20
//     }else if(escolha == 101){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.30
//     }else if(escolha == 102){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.50

//     }else if(escolha == 103){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.20

//     }else if(escolha == 104){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.30
//     }else{
//         alert('Produto indisponível')
//     }
//     escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
// }
// alert(`Seu pedido ficou em ${valorTotalDoPedido}`)
// }

// pedidosLanchonete()
// function advinheOnumero(){

// let escolha = parseInt(prompt("Digite um numero de 1 a 10 ou 0 para sair"))

// while(escolha != 7){
//     if(escolha == 0){
//         return alert("Você saiu do jogo")

//     }else{
//     console.log("Você digitou o número incorreto, tente novamente")
//     escolha = parseInt(prompt("Digite um numero de 1 a 10 ou 0 para sair"))
//     }
// }
// alert("Parabéns você acertou")
// }

// console.log(advinheOnumero())

// function usuarioEsenha(){

// let nomeUsuario = (prompt("Digite seu nome de usuário:"))
// let senha = (prompt("Digite sua senha:"))

// while(nomeUsuario == senha){
//     // if(nomeUsuario != senha){
//     //     return alert("Senha cadastrada com sucesso")
//     // }else{
//     alert("Nome de usuário e senha não podem ser iguais!")
//     senha = (prompt("Digite uma outra senha:"))
//     }
//     alert("Senha cadastrada com sucesso")
// }

// usuarioEsenha()

// let contador = 0;
// let soma = 0;
// let media = 0;
// let numero = parseInt(prompt("Digite um numero:"))

// while(numero >= 0 && numero < 10){
//     soma += numero;
//     numero = parseInt(prompt("Digite outro numero:"))
//     contador++;
// }
// media = soma/contador;
// alert(`A soma dos números é igual a ${soma} e a média é ${media}`)

let candidatoA = 0;
let candidatoB = 0;
let candidatoC = 0;

let letraCandidato = prompt("Digite a inicial de seu candidato:");
// alert("Voto computado com sucesso")
while (letraCandidato != "x") {
  if (letraCandidato == "a".toLowerCase()) {
    candidatoA++;

    alert("Voto computado com sucesso");
  } else if (letraCandidato == "b".toLowerCase()) {
    candidatoB++;

    alert("Voto computado com sucesso");
  } else if (letraCandidato == "c".toLowerCase()) {
    candidatoC++;

    alert("Voto computado com sucesso");
  } else {
    alert("Candidato não encontrado");
  }

  letraCandidato = prompt("Digite a inicial de seu candidato:");
}

console.log(`O total de votos do candidato A foi de ${candidatoA}`);
console.log(`O total de votos do candidato B foi de ${candidatoB}`);
console.log(`O total de votos do candidato C foi de ${candidatoC}`);

// ------------------------------------TESTE DE MESA------------------------------------------------------------------

// const valorTexto = "Texto exemplo";

// if (valorTexto.toLowerCase() == "Texto exemplo".toLowerCase()) {
//   console.log("Não existe erro de sintaxe");
// }
// //Erro: VM39:3 Uncaught TypeError: valorTexto.toLowerCase is not a function

// const valor1 = 1;
// const valor2 = 0;
// let soma = 0;

// if (valor1 == 1) {
//   soma = valor1 + valor2;
//   console.log(soma);
// } else {
//   console.log("Erro");
// }
