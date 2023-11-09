// let caixaDeSuprimentos = [
  
//     higiene = ["papel de bunda", "sabonete", "pasta de dente", "fio dental", "shampoo"],
    
//     alimentacao = ["carne", "frango", "peixe","arroz", "feijao"],
  
  
//    farmacia = ["enalapril", "band-aid", "esparadrapo", "gaze", "alcool"],
    
   
//    lazer =  ["bola de futebol", "bola de voley", "jogos de tabuleiro", "maconha", "po"],

//     // churrasco = ["asa", "linguica", "cerveja", "cachaça", "caipirinha"],
  
//   ]
 
  
  
//   function acampamento(caixaDeSuprimentos) {
//       for (let i = 0; i < caixaDeSuprimentos.length; i++) {
//          if(caixaDeSuprimentos.length == 4){
//           let somaItens = 0;
        
  
//           for (let j = 0; j < caixaDeSuprimentos[i].length; j++) {
//             if(caixaDeSuprimentos[j]){
//                 // console.log(caixaDeSuprimentos[j].length);
//                 somaItens += caixaDeSuprimentos[j].length;
//             }
//             // console.log(somaItens)
//           }
          
//         //   console.log(somaItens)
//         //   media = somaNotas / arrayNotas[i].length;
//         //   console.log(media, "Media")
          
//           if (somaItens == 20) {
//               return("Podemos Acampar");
//           } else if(somaItens < 20) {
//               return("Precisamos de mais itens desta seção.");
//           }else{
//             return("Tem itens demais, não precisamos de tantos.")
//           }
         
//         } else if(caixaDeSuprimentos.length < 4){
//             return( "Algum amigo ainda não retornou com os itens.")
//         }else{
//             return("Acho que temos um intruso.")
//         }
//       }
//   }
  
//   console.log(acampamento(caixaDeSuprimentos));




// let arrayNotas = [
//     {
//       nome: 'João',
//       curso: 'Ciencia da Computação',
//       turno: 'Noturno',
//       mediaCorte: 7,
//       materias: [
//         {
//           nome: 'Calculo I',
//           avaliacoes: [6, 8, 10, 8]
//         },
//         {
//           nome: 'Pensamento Computacional',
//           avaliacoes: [5, 6, 4, 8]
//         },
//         {
//           nome: 'Linguagem Orientada a Objetos',
//           avaliacoes: [7, 8, 9, 10]
//         },
//         {
//           nome: 'Arquitetura de Organização de Computadores',
//           avaliacoes: [6, 8, 7, 8]
//         }
//       ]
//     }
//   ]



//   function alunoAprovado(arrayNotas) {
   
//         for (let i = 0; i < arrayNotas[0].materias.length; i++) {
//             let somaNotas = 0;
            
            
            
//             for (let j = 0; j < arrayNotas[0].materias[i].avaliacoes.length; j++) {
//                 somatorio.push(arrayNotas[0].materias[i].avaliacoes[j])
              
//                 somaNotas += arrayNotas[0].materias[i].avaliacoes[j]
                
//             }
                
//                  media = somaNotas / 4;
               
//                 console.log(media, "Media")
               
//                 if (media >= 6) {
//                     count++
//                     console.log("Aluno Aprovado");
                    
//                 } 
//                 else {
//                     console.log("Aluno Reprovado");
                    
//                 }
                
//             }
//             console.log(`O aluno foi aprovado em ${count} materias`)
//         }  
      
//     let count = 0;
//     let somatorio = [];
//     let media = 0;
//     alunoAprovado(arrayNotas);


const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
      'São Paulo-SP',
      'Campinas-SP',
      'São José dos Campos-SP',
      'Volta Redonda-RJ'
    ],
    passageiros: [
      {
        nome: 'Luis da Silva',
        rg: '1234567890',
        bilhete: {
          origem: 'Curitiba-PR',
          destino: 'São José dos Campos-SP',
          poltrona: 15,
        }
      },
      {
        nome: 'João da Silva',
        rg: '1234567891',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Rio de Janeiro-RJ',
          poltrona: 16,
        }
      }
    ]
  }

//   console.log(onibus.paradas[0])


  function qualParadaIraDescer(paradaAtual){
    for( let i = 0; i < onibus.paradas.length; i++){
        let paradaPassageiro = onibus.passageiros[i]?.bilhete.destino
        if(paradaPassageiro == paradaAtual){
            // console.log(novaParada)
            // console.log(paradaAtual)
            // console.log(onibus.passageiros[i])
            quemVaiDescer.push(onibus.passageiros[i])
            
        }
        
    }
    return(quemVaiDescer)
  }

  let quemVaiDescer = []

  console.log(qualParadaIraDescer('São José dos Campos-SP'))