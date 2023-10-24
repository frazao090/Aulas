// Funções com parametro.

//   function calculaAreaCirculo(raio) {
//     const pi = 3.14;
//     const areaCirculoDeRaioQuatro = pi * raio * raio;
  
//     return areaCirculoDeRaioQuatro;
//   }
  
//   const resultado = calculaAreaCirculo(5);
//   console.log(resultado);


// exemplo 2 :

// function calculaAreaTriangulo(base, altura) {
//     console.log(`base é igual a: ${base}`);
//     console.log(`altura é igual a: ${altura}`);
  
//     const areaTriangulo = (base * altura) / 2;
  
//     return areaTriangulo;
//   }
  
//   const resultado = calculaAreaTriangulo(5, 10);
//   console.log(resultado);

// function  positivoOuNegativo(numero){
//     let p = "positivo";
//     let n = "negativo";

//     if(numero > 0){
//         numero = p;
//     }else {
//         numero = n;
//     }
//     return numero;
// }
// let resultado = positivoOuNegativo(8);
// console.log(resultado);




// function quantidadeNumeros(numero){
    
//     let number = numero.toString().length;
    
//     return number;
   
// }
// let resultado = quantidadeNumeros(125896);
// console.log(resultado)


// ou 


// function quantidadeNumeros(numero){
    
//     let number = numero.length;
    
//     return number;
   
// }
// let resultado = quantidadeNumeros("125896");
// console.log(resultado)







// function somar(A,B){
//     let soma = 0;

//     if(A > B){
//         soma = A + B;
//         console.log(`O resultado da soma é de ${soma}`)
//     }else {
//         console.log("O primeiro número não é maior que o segundo.")
//     }

//     return soma;
// }

// let resultado = somar(5,4);


// function verdadeiroOuFalso(palavra,letra){


//     if(palavra[0].toLowerCase() !== letra[0].toLowerCase()){
//         return false;
//     }
//     return true;
// }
// let resultado = verdadeiroOuFalso("Renata","risse");
// console.log(resultado);

// let nome = "Alex"

// // Indices de uma string
// // 0 1 2 3  -> indice
// // 1 2 3 4  -> posição
// // A L E X

// console.log(nome)
// console.log(nome[1])
// console.log(nome[4 - 1])

// console.log(nome.length)
// console.log(nome[nome.length - 1])


// function funcionamentoBarraPergunta(horaAtendimento){
// if(horaAtendimento >= 11 && horaAtendimento < 23){
//     console.log("O /pergunta está em horário de funcionamento");
// }else{
//     console.log("O /pergunta não está em horário de funcionamento");
// }

// }

// let resposta = funcionamentoBarraPergunta(12);

// function paperwork(n, m) {
//     let result = n * m;
    
//     if(n <= 0) {
//       result = 0;
//     }
   
//     return result;
//   }
  
//   let resposta = paperwork(-15, 3);
//   console.log(resposta);