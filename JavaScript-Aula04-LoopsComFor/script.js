// for (let contador = 10; contador < 20; contador++) {
//     // Esse trecho só será executado caso contador < 20 
//     if (contador % 2 == 0) {
//       // Esse trecho só será executado caso o contador seja par
  
//       console.log(`O numero ${contador} é par!!`)
//     }
//   }

// function paresDeDezAteDezenove(){
//     for (let contador = 10; contador < 20; contador++) {
//       if (contador % 2 == 0) {
//         // Esse trecho só será executado caso o contador seja par
//         console.log(`O numero ${contador} é par!!`)
//       }
//     }
//     // Esse trecho só será executado após o loop ser finalizado
//     console.log("Saímos do laço de repetição!!!")
//   }
  
//   paresDeDezAteDezenove()

// function renderUpToTwenty(){
//     for(let i = 0; i <= 20; i++){
//         console.log(i);
//     }
   
// }

// renderUpToTwenty();

// function oddUpToTwenty(){
//     for( let i = 0; i < 20; i++){
//         if(i % 2 != 0){
//             console.log(`O número ${i} é impar`)
//         }
//     }
// }
// oddUpToTwenty()

// function evenUpToTwenty(){
//     for (let i = 0; i < 20; i++){
//         if(i % 2 == 0){
//             console.log(i);
//         }

//     }
// } 

// evenUpToTwenty()

// function fromNegativeToPositive(){
//     for(let i = -10; i <= 0; i++){
//         console.log(i)
//     }
// }
// fromNegativeToPositive()

// function inDescendingDirection(){
//     for(let i= 10; i >= 0; i--){
//         console.log(i)
//     }
// }
// inDescendingDirection()

// function toSquare(){
//     for(let i = 0; i <=10; i++){
//         console.log(i*i);
//     }
// }

// toSquare()

// function tenInTenToAHundred(){
//     for(let i = 10; i <=100; i+=10){
//         console.log(i);
//     }
// } 

// tenInTenToAHundred();

// function quadrados(){
//     for(let i = 15; i<=200; i++){
//         console.log(i*i);
//     }
// }
// quadrados()

// let soma = 0;

// function somari(){
//     for(let i = 0; i< 100; i++){
//        soma += (i+1);

//     }
//     console.log(soma)
// }
// somari()

// function divisivelPorQuatro(){
//     for (let i = 0; i<=200; i++){
//         if(i % 4 ==0 ){
//             console.log(`o número ${i} é divisivel por 4`)
//         }
//     }
// }
// divisivelPorQuatro()
let soma = 0;
let divididoPor = 0
let media = 0; 

function paresEntreCinquentaESetenta(){
    for(let i = 50; i <= 70; i++){
        if(i % 2 == 0){
            divididoPor++;
            soma += i++;
            media = soma / divididoPor;
            }
       
    }
   
    console.log(soma)
    console.log(divididoPor)
    console.log(media)
}
paresEntreCinquentaESetenta()