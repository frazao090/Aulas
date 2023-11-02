// const meuArray = [12, "Olá", 34, 2.3, "world", 10, 20, 16, 11]

// // Acessando o primeiro elemento (índice 0)
// console.log(meuArray[0])
// // Saída: 12

// // Acessando o quinto elemento (índice 4)
// console.log(meuArray[4])
// // Saída: "world"


// push
// const frutas = ['maçã', 'laranja']; 
// frutas.push('limão'); // adiciona um elemento no final
// console.log(frutas); // ['maçã', 'laranja', 'limão']
// // exibindo o tamanho do array
// console.log(frutas.length); // 3 

// // pop
// const atividadesDiarias = ['trabalhar', 'comer', 'estudar', 'dormir'];


// // remover o último elemento e armazená-lo em uma variável
// const elementoRemovido = atividadesDiarias.pop();
// console.log(atividadesDiarias); // ['trabalhar', 'comer', 'estudar']
// // exibir o elemento removido
// console.log(elementoRemovido); // 'dormir'

// // shift
// const atividadesSemanais = ['mercado', 'correr', 'churrasco'];


// // remover o primeiro elemento e armazená-lo em uma variável
// const atividadeRemovida = atividadesSemanais.shift();
// console.log(atividadesSemanais); // ['correr', 'churrasco']
// // exibir o elemento removido
// console.log(atividadeRemovida); // 'mercado'

// // unshift
// const numeros = [20, 30, 40, 50];
// const novoComprimento = numeros.unshift(10);

// console.log(numeros); // [10, 20, 30, 40, 50]
// console.log(novoComprimento); // 5

// const usuarios = ['Joao', 'Maria', 'Pedro', 'Nicole']

// for (let indice = 0; indice < usuarios.length; indice++){
//   console.log(usuarios[indice])
// }

// const usuarios = ['Joao', 'Maria', 'Pedro', 'Nicole'];

// // Acessando manualmente o último elemento do array (indice 3)
// console.log(usuarios[3]);
// // Saída: 'Nicole'

// // Acessando dinamicamente o último elemento do array (indice 3)
// const ultimoIndice = usuarios.length - 1;
// console.log(usuarios[ultimoIndice]);
// // Saída: 'Nicole'

// // Também poderiamos fazer direto nos colchetes
// console.log(usuarios[usuarios.length - 1]);
// // Saída: 'Nicole'

// // Adicionando um novo nome ao fim do array
// usuarios.push('Mahara');

// /* 
//   Nossa lógica de capturar o ultimo elemento funciona
//   da mesma forma, mesmo que tenhamos alterado o tamanho do array
//   com a adição de mais um nome
// */
// console.log(usuarios[usuarios.length - 1]);
// // Saída: 'Mahara'

// console.log(usuarios.length);


// function criandoUmArray(str){
//     let novoArray = []
   
//     if(str.length >= 5){
//         novoArray.push(str)
//     }
//     return novoArray
// }



// console.log(criandoUmArray("text"));

// function criandoArray(number){
//    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]

//    if(number < arr.length){

//    return console.log(arr[number]);

//    }
//     return console.log("Valor não encontrado");
       
//     }
    
//     (criandoArray(4))


    // function novoArray(numeroInteiro){
    //     let arr = [1,2,3,4,5,6,7,8,9,10]

    //     if(numeroInteiro <= arr.length && arr[numeroInteiro] %2 == 0){
    //         console.log(arr[numeroInteiro])
    //         return "O valor encontrado nesta posição é par"
            
    //     }else if(numeroInteiro <= arr.length && arr[numeroInteiro] %2 != 0){
    //         console.log(arr[numeroInteiro])
    //         return "O valor encontrado nesta posição é ímpar"
    //     }

    //   return "Valor não encontrado"

    // }
    
    // console.log(novoArray(9));


    // function listaNomes(nome1, nome2, nome3){
    //     if((nome1.length > nome2.length) && (nome1.length > nome3.length)){
    //         return `O nome ${nome1} é o maior da lista`
    //     }else if((nome2.length > nome1.length) && (nome2.length > nome3.length)){
    //         return `O nome ${nome2} é o maior da lista`
    //     }
    //     return `O nome ${nome3} é o maior da lista`

    // }
    // console.log(listaNomes("Garibaldo","Rafael", "José"));

    // function listaNomes(nomes){
    //     if(nomes.length == 1){
    //         return nomes[0]
    //     }
    //     else if((nomes[0].length > nomes[1].length) && (nomes[0].length > nomes[2].length)){
    //         return `O nome ${nomes[0]} é o maior da lista`
    //     }else if((nomes[1].length > nomes[0].length) && (nomes[1].length > nomes[2].length)){
    //         return `O nome ${nomes[1]} é o maior da lista`
    //     }
    //     return `O nome ${nomes[2]} é o maior da lista`

    // }
    // let nomes = ["Pedro", "Gumercindo","Aldaberto"]
    // console.log(listaNomes(nomes));


    


    // function listaNumeros(numeros){
        

    //     let soma = numeros[numeros.length - 1] + numeros[numeros.length - 2];
    //     if(soma % 2 == 0){
    //         return `A soma é um múltiplo de 2`
    //     }
        
    //     return  "A soma não é um múltiplo de 2"
       
    // }
    // numeros = [1,4,6,9,11,8];
    // console.log(listaNumeros(numeros))


    // function novoArray(nomes, nome, numero){
    //     let posicao = nomes[numero].toLowerCase()
    //     console.log(posicao)
    //     for(let i = 0; i <= nomes.length; i++){
    //         if(nome == posicao)
    //       return "Acertei"
    //     }
    //     return "Não é quem eu pensava"
    // }

    // let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
    
    // console.log(novoArray(nomes,"maria", 4))

    // function qualOmaior(numeros, outrosNumeros){
    //     if(numeros.length > outrosNumeros.length){
    //         return  `A maior lista é a lista cujo último número é: ${numeros[numeros.length - 1]}`
    //     }

    //     return  `A maior lista é a lista cujo último número é: ${outrosNumeros[outrosNumeros.length - 1]}`

    // }
    
    // let numeros = [1,2,3,4,5,6,10,7]
    // let outrosNumeros = [5,7,9,4,2,3,9,11,18,25]
    // console.log(qualOmaior(numeros, outrosNumeros))

    

    // function retornaTodosElementos(){
    //     return alert(listaDeElementos)
    // }

    // console.log(retornaTodosElementos())
    
    // function retornaValorEpecifico(number){
    //     for(let i = 0; i <= listaDeElementos.length; i++){
    //         if( number === i){
    //             return `O valor contido nesta posição é: ${parseInt(listaDeElementos[i])}`;
    //         }
    //     }
    // }
    // // console.log(retornaValorEpecifico(3))
    // console.log(retornaValorEpecifico(6))

    
    
    // function retornarTipoElemento(number){
    //     for(let i = 0; i <= listaDeElementos.length; i++ ){
    //         if(number == i){
    //             let resultado = typeof(listaDeElementos[i])
    //             return alert(`O elemento ${listaDeElementos[i]} é um elemento do tipo ${resultado}`)
    //         }
           
    //     }
    //     return alert("O número digitado não consta na lista")
    // }

    // console.log(retornarTipoElemento(0))
    

    // function removeUltimoElementoString(){
    //     for(let i = 0; i <= listaDeElementos.length; i++)
    //     if(typeof(listaDeElementos[listaDeElementos.length - 1]) == "String".toLocaleLowerCase()){
    //         listaDeElementos.pop()
    //         return `"Elemento deletado com sucesso".`
    //     }
    //     return "Falha ao remover o elemento da lista"
    // }
    // console.log(listaDeElementos)
    // console.log(removeUltimoElementoString())
    // console.log(listaDeElementos)
    // console.log(removeUltimoElementoString())
    // console.log(listaDeElementos)
    // console.log(removeUltimoElementoString())
    // console.log(listaDeElementos)
    // console.log(removeUltimoElementoString())
    // console.log(listaDeElementos)
    
    
// function consultaPosicao(posicao){

//     for(let i = 0; i <= listaDeElementos.length; i++ ){
//         if(posicao == listaDeElementos[i]){
//                 //   let resultado = listaDeElementos[i]
//                   return(`O valor procurado está na posição: ${i}`)
//               }
               
//          }
//            return ("Valor não encontrado")
//          }
    
//         console.log(consultaPosicao(10))




// function removerElementoEspecifico(elemento){
    
//     // let novoElemento = [];
//     for(let i = 0; i <= listaDeElementos.length; i++){
        
//         if(elemento == i){
//         //    listaDeElementos.splice(listaDeElementos.indexOf(listaDeElementos[i]),0)
//             // novoElemento.push(listaDeElementos[i])
            
//             // console.log(novoElemento)
            

//             return `Elemento ${listaDeElementos.splice(listaDeElementos.indexOf(listaDeElementos[i]),1)} deletado com sucesso`
            
//         }
//         }
//         for(let i = 0; i < listaDeElementos.length; i++){
        
//             if(elemento != i){
               
//                 // novoElemento.push(listaDeElementos[i])
//                 return "Elemento não encontrado"
//             }
// }
// }
// console.log(listaDeElementos)
// console.log(removerElementoEspecifico(1))
// console.log(listaDeElementos)

const listaDeElementos = [1,5,7,9,3,"10", "11", "15"]

function  inserirNaPosicaoCorreta(elemento){
    // for(let i = 0; i <= listaDeElementos.length; i++ )
    if(typeof(elemento) === "number"){
        listaDeElementos.unshift(elemento)
        return `(${listaDeElementos}) lista atualizada com sucesso`;
    }else{
        listaDeElementos.push()
        return `(${listaDeElementos},${elemento}) lista atualizada com sucesso`;
    }
    }
   


console.log(inserirNaPosicaoCorreta(12))
