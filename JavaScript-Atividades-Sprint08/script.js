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

// function verificaPalavra(palavra) {
//   let regex = /\W|_/;
//   let count = 0;
//   let soma = 0;

//   if (
//     palavra[0] == palavra[0].toUpperCase() ||
//     regex.test(palavra[0]) == true ||
//     palavra[0] == isNaN()
//   ) {
//     count = -1;
//   }

//   for (let i = 0; i < palavra.length; i++) {
//     if (
//       palavra[i] != palavra[i].toLowerCase() ||
//       regex.test(palavra[i]) == true ||
//       palavra[i] == isNaN()
//     ) {
//       count++;
//     }
//   }
//   soma = count + 1;
//   return soma;
// }

// console.log(verificaPalavra("Ass.aasd.sss"));
// console.log(verificaPalavra("sssaasdsSs"));
// console.log(verificaPalavra("sssa1asss"));

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


// let slenzie = {
//   name: "",
//   questions: [],
// }

// let question = {
//   user: "",
//   userQuestion: "",
//   vote: 0,
//   answerer: false,
// }

// function createEvent(objEvent, eventName){
  
//     if(typeof eventName === "string" && eventName.length >= 5){
//       objEvent.name = eventName;
//       return objEvent;
//     }
  
//     return "The input value is invalid";
// }

// console.log(createEvent(slenzie, "Primeiro Evento"))

// let slenzie2 = {
//   name: "Segundo Evento",
//   questions: [],
// };

// let question2 = {
//   user: "Usuario 1",
//   userQuestion: "Pergunta 1",
//   vote: 0,
//   answered: false,
// };

// function addQuestion(objEvent, objQuestion){
//   // console.log(objEvent);
//   // console.log(objQuestion);
//   if(objEvent && objQuestion != undefined){
    
//     objEvent.questions.push(objQuestion)
//     return objEvent;
//   }
//   return "The user or question cannot be undefined";

// }
// console.log(addQuestion(slenzie2, question2));



// function addVoteToQuestion(objEvent, questionIndex){
//   let lengthQuestions = objEvent.questions.length;
//   if(questionIndex < 0 || questionIndex > lengthQuestions - 1){
//     question.vote++;
//     return "Question not found";
//   }
//   objEvent.questions[questionIndex].vote++;
//   return "Vote registered successfully";
// }




// console.log(addVoteToQuestion(slenzie2, 0));
// console.log(question2);
// console.log(addVoteToQuestion(slenzie2, 1000));

// let slenzie3 = {
//   name: "Terceiro Evento",
//   questions: [],
// };

// let question3 = {
//   user: "Usuario 3",
//   userQuestion: "Pergunta 3",
//   vote: 0,
//   answered: false,
// };

// let question4 = {
//   user: "Usuario 4",
//   userQuestion: "Pergunta 4",
//   vote: 0,
//   answered: false,
// };

// let question5 = {
//   user: "Usuario 5",
//   userQuestion: "Pergunta 5",
//   vote: 0,
//   answered: false,
// };

// addQuestion(slenzie3, question3);
// addQuestion(slenzie3, question4);
// addQuestion(slenzie3, question5);


// function answerQuestion(objEvent, questionIndex){
//   let lengthQuestions = objEvent.questions.length;
//   if(questionIndex < 0 || questionIndex > lengthQuestions - 1){
//     return "Question not found";

// }
// objEvent.questions[questionIndex].answered = true;
// return objEvent;

// }

// console.log(answerQuestion(slenzie3, 1));
// console.log(answerQuestion(slenzie3, 10000));

// function unansweredQuestions(objEvent){
//   let output = [];
//   for(let i = 0; i < objEvent.questions.length; i++){
//     if(objEvent.questions[i].answered === false){
//       output.push(objEvent.questions[i])
//       return output;
//     }
//   }
// }

// console.log(unansweredQuestions(slenzie3));


// const user = {
//   name: "Jhon Doyle Fox",
//   savingsBalance: 500,
//   cardsInformation: [
//       {
//         number: "5160 4196 4843 3388",
//         creditBalance: 1000,
//         ensign: "American Express",
//       },
//     ],
//   };

//   let funcionalidadeDesejada = parseInt(prompt("Digite a funcionalidade desejada: 1 - saldo, 2 - despósito, 3 - saque"))
//   let responseBalance = parseInt(prompt("Digite 1 para poupança e 2 para crédito"))

//   function getBalance(countType, name){
   
//     if(funcionalidadeDesejada === 1 && responseBalance === 1){
//       name = user.name
//       let balance = user.savingsBalance;
//       countType = "Poupança"
//       return `O saldo da conta do usuário ${name} é igual a ${balance} e seu tipo de conta é ${countType}`
      
//     }else if(funcionalidadeDesejada === 1 && responseBalance ===2){
//       name = user.name
//       let balance = user.cardsInformation[0].creditBalance;
//       console.log(balance)
//       countType = "Crédito"
//       return `O saldo da conta do usuário ${name} é igual a ${balance} e seu tipo de conta é ${countType}`
//     }
//     // return "Numero inválido"
//   }
  

//   console.log(getBalance(responseBalance, name))
  
// let valueForDeposit = 0;
  
// function makeDeposit(user, valorDepositado){
//  if(funcionalidadeDesejada === 2){
//   valueForDeposit = parseInt(prompt(`Qual valor o Sr(a) ${user.name} deseja depositar?`))

  
//   if(valueForDeposit != "string" && valueForDeposit > 5 && valorDepositado < 500){
//     if(responseBalance === 1){
//       balance = user.savingsBalance + valueForDeposit;
//       return `Deposit made successfully, new balance: ${balance}`;
//     }else if(responseBalance === 2){
//       balance = user.cardsInformation[0].creditBalance + valueForDeposit
//       return `Deposit made successfully, new balance $${ balance}.00`;
//     }
    
//   }
//   return "This value is not allowed";
//   }
  
// }

// console.log(makeDeposit(user, valueForDeposit))
 
// let withdrawnAmount = 0;

// function makeWithdrawal(user, valorSacado, countType){
//   if(funcionalidadeDesejada === 3){
//     let withdrawnAmount = parseInt(prompt("Digite o valor que deseja sacar:"))
// if(withdrawnAmount != "string" && withdrawnAmount > 5 && withdrawnAmount < 500){
//   if(responseBalance === 1){
//     balance = user.savingsBalance - withdrawnAmount;
//     return `Withdrawn made successfully, new balance: ${balance}`;
//   }else if(responseBalance ===2){
//     balance = user.cardsInformation[0].creditBalance - withdrawnAmount
//     return `Widhtdrawn made successfully, new balance $${ balance}.00`;
//   }
// }
// return "This value is not allowed";
// }

// }

// console.log(makeWithdrawal(user, withdrawnAmount, responseBalance));

const alunoCurso = {
  nome: "João",
  idade: 31,
  curso: "FullStack",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};

const alunoCurso1 = {
  nome: "Anderson",
  idade: 40,
  curso: "FullStack JavaScript",
  instituicao: "Kenzie Br",
  materias: ["Html", "Css", "JavaScript", "Python"],
  situacaoMatricula: true,
};


function getTheCourse(aluno){
  
  alert(aluno.curso)
}
// console.log(getTheCourse(alunoCurso1))

function getTheSubjects(aluno){
  
  alert(aluno.materias)
}

// console.log(getTheSubjects(alunoCurso1))

function registrationStatus(aluno){

  if(aluno.situacaoMatricula === true){
    alert("Aluno ativo")
  }else{
  alert("Aluno inativo")
  }
}

// console.log(registrationStatus(alunoCurso1))

function generateStudentCard(aluno){
  let cardInformation = {
    aluno: aluno.nome, 
    idade: aluno.idade,
    curso: aluno.curso,
    istituicao: aluno.instituicao
  }
  // const cardInformation = `name: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, instituição: ${aluno.instituicao}`
  // alert(cardInformation)
  return (cardInformation)
  
}
// console.log(generateStudentCard(alunoCurso1))

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  
  if(mpg*fuelLeft >= distanceToPump){
    return true;
  }else{
  return false;
    }
};

// console.log(zeroFuel(50, 25, 0))

function dutyFree(normPrice, discount, hol){
  let total = normPrice*(discount/100)
  let resultado = hol/total
  return(parseInt(resultado))
  }
  // console.log(dutyFree(12, 50, 1000))

  function iceBrickVolume(radius, bottleLength, rimLength) {
    return ((bottleLength - rimLength) * 2)*(radius*radius) 
  }

  // console.log(iceBrickVolume(1, 10, 2))


  function sixToast(num) {
    if(num <= 6){
     sub = 6 - num
     return sub
    }
    return num - 6
   }
  //  console.log(sixToast(10))
  
  function bloodAlcoholContent(drinks, weight, sex, time){
    let bac = 0;
    if(sex === "male"){
      bac = (drinks * 5.14 / weight * 0.73) - .015 * time 
      return bac;
    }else if(sex === "female"){
       bac = (drinks * 5.14 / weight * 0.66) - .015 * time
       
    }
    return bac;
  }

  console.log(bloodAlcoholContent(0.4, 190, "male", 1))