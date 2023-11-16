// function informacoesFrequentadores(nome, idade, estaAcompanhado){
//     if(idade < 18){
//         return `Entrada não permitida para ${nome}: Menor de idade.`
//     }else if(idade >= 18 && estaAcompanhado === "s".toLowerCase()){
//         return `Entrada permitida para ${nome}: Conceder desconto.`
//     }else{
//         return `Entrada permitida para ${nome}: Cobrar valor integral.`

// }
// }

// console.log(informacoesFrequentadores("Anderson", 40, "n"))
//     let notas = [];
//     let somaNota = 0;
//     let materias = [];
//     let nomeDoAluno = prompt("Qual o nome do aluno")
//     if(nomeDoAluno.length < 5){
//         alert("Nome Invalido")
//     }else{
//     for(let i = 0; i < 10; i++){
//     let materia = prompt("Digite a matéria")
//     materias.push(materia)
//     console.log(materias)
//         let nota = parseInt(prompt("Digite a nota do aluno?"))
//         if(nota > 0 && nota <= 10){
//         somaNota += nota
//     }else{
//         alert("Nota inválida")
//     }
//     }
//     media = somaNota / materias.length
//        console.log(media)
// let presenca = prompt("Digite qual foi a presenca do aluno")

// if(media >= 8 && presenca >=6){
//     alert(`A nota do aluno ${nomeDoAluno} é ${media} e sua presença é ${presenca}: Aluno aprovado!`)
// }else {
//     alert(`A nota do aluno ${nomeDoAluno} é ${media} e sua presença é ${presenca}: Aluno reprovado!`)
// }
//     }

// function gerarNumeroAleatorio(){

//     return Math.floor(Math.random() * 20) + 1;
// }

// // console.log(gerarNumeroAleatorio())

// function verificarPalpite(numeroAleatorio,palpite){
//   let tentativa = 1;

//     while(numeroAleatorio !== palpite){
//         alert("Tente novamente")
//         palpite = parseInt(prompt("Digite um número"))
//         console.log(numeroAleatorio)
//         console.log(palpite)
//         tentativa++
//        }

//        alert(`Parabens! você Acertou na tentativa ${tentativa}`)

// }

// let numeroAleatorio = gerarNumeroAleatorio()
// let palpite = parseInt(prompt("Digite um número:"))

// console.log(verificarPalpite(numeroAleatorio, palpite));

function verificaPalavra(palavra) {
  let regex = /\W|_/;
  let count = 0;
  let soma = 0;

  if (
    palavra[0] == palavra[0].toUpperCase() ||
    regex.test(palavra[0]) == true ||
    palavra[0] == isNaN()
  ) {
    count = -1;
  }

  for (let i = 0; i < palavra.length; i++) {
    if (
      palavra[i] != palavra[i].toLowerCase() ||
      regex.test(palavra[i]) == true ||
      palavra[i] == isNaN()
    ) {
      count++;
    }
  }
  soma = count + 1;
  return soma;
}

console.log(verificaPalavra("Ass.aasd.sss"));
console.log(verificaPalavra("sssaasdsSs"));
console.log(verificaPalavra("sssa1asss"));

// function countWords(word) {
//     let count = 0;

//     // Verifica se a primeira letra da palavra não é maiúscula
//     // Se não for, considera que a palavra começa com uma nova palavra
//     if (word[0] != word[0].toUpperCase()) {
//       count = 1;
//     }

//     let flag = false;

//     // Percorre cada letra da palavra
//     for (let i = 0; i < word.length; i++) {
//       // Verifica se a letra atual é maiúscula
//       if (word[i] == word[i].toUpperCase()) {
//         flag = true;
//       }
//       // Verifica se a letra atual não é maiúscula e a flag está marcada
//       // Isso indica que uma nova palavra começou
//       else if (word[i] != word[i].toUpperCase() && flag) {
//         flag = false;
//         count++;
//       }
//     }

//     // Retorna o número de palavras contadas
//     return count;
//   }

//   console.log(countWords("sss.aasd.sss"));
//   console.log(countWords("sssaasdsSs"));
//   console.log(countWords("sssa1asdss"));
