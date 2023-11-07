// const livroObj = {
//     saga: "Harry Potter",
//     volume: "Harry Potter e a Pedra Filosofal",
//     paginas: 208,
//     codigo: 15648977,
//   }

//   console.log(livroObj.saga)      //Retorna "Harry Potter"
// console.log(livroObj.paginas)   //Retorna 208

// livroObj.codigo = 65487565;
// //ou
// livroObj.codigo = "65487565";

// livroObj.autora = "J.K Rowling";
// console.log(livroObj) //Retorna {saga: "Harry Potter", volume: "Harry Potter e a Pedra Filosofal", paginas: 208, codigo: 15648977, autora: "J.K Rowling"}

// // Atributos Computados?
// // Diferentemente dos Arrays, um Objeto pode ter como índice um atributo computado. Um atributo computado é um atributo que tem como nome uma expressão envolta de [].


// livroObj["capitulo 1"] = "O menino que sobreviveu";
// console.log(livroObj) //Retorna {saga: "Harry Potter", volume: "Harry Potter e a Pedra Filosofal", paginas: 208, codigo: 15648977, autora: "J.K Rowling", "capitulo 1": "O menino que sobreviveu"}


// // Arrays em Objetos
// // Também é possível incluir Arrays dentro de objetos. Se precisarmos criar uma lista de capítulos para nosso objeto livroObj, por exemplo, basta adicionarmos um Array contendo os capítulos dentro do objeto.


// livroObj.capitulos = [
//     "O menino que sobreviveu",
//     "O vidro que sumiu",
//     "As cartas de ninguém",
//     "O guardião das chaves",
//     "O Beco Diagonal"
//   ];


//   S7-02 | 📘 Aula: Aplicando o Conceito de Objetos

// const meuObjetoPessoa = {
//     nome: "Ino",
//     idade: 25,
//     cidade: "Curitiba",
//   };

// //   console.log(meuObjetoPessoa.nome);

// //   ou

// console.log(meuObjetoPessoa["nome"]);

// // meuObjetoPessoa.nome = "Anderson";

// // ou

// meuObjetoPessoa["nome"] = "Anderson"

// console.log(meuObjetoPessoa.nome);

// console.log(meuObjetoPessoa.endereco)
// //undefined

// meuObjetoPessoa.endereco = "Av. Brasil 49001";
// console.log(meuObjetoPessoa.endereco)
// meuObjetoPessoa.cidade = "Rio de Janeiro"
// console.log(meuObjetoPessoa)


// delete meuObjetoPessoa.idade;
// console.log(meuObjetoPessoa)




// Objetos e Arrays
// Você pode querer ter uma lista de pessoas, funcionários, endereços, contatos. Para isso podemos combinar uma estrutura de listas com uma estrutura de objetos. Exemplo:



// const enderecos = [ 
//     {
//       logradouro: "A1",
//       cidade: "Brasilia",
//       numero: 120,
//     },
//     {
//       logradouro: "A2",
//       cidade: "Brasilia",
//       numero: 10,
//     },
//     {
//       logradouro: "B1",
//       cidade: "Brasilia",
//       numero: 5,
//     }
//   ]

//   console.log(enderecos[0].logradouro) 



// const meuObjetoPessoa = 
// {
//   nome: "João",
//   idade: 30,
//   enderecos:
//   [ 
//     {
//       logradouro: "A1",
//       cidade: "Brasilia",
//       numero: 120,
//     },
//     {
//       logradouro: "A2",
//       cidade: "Brasilia",
//       numero: 10,
//     },
//     {
//       logradouro: "B1",
//       cidade: "Brasilia",
//       numero: 5,
//     }
//   ]
// }

// meuObjetoPessoa.enderecos[0].numero = 320;
// console.log(meuObjetoPessoa.enderecos[0])

// meuObjetoPessoa.nome = "Anderson";
// meuObjetoPessoa.idade = 40;
// meuObjetoPessoa.enderecos[0].logradouro = "Av. Brasil"
// meuObjetoPessoa.enderecos[0].cidade = "Rio de Janeiro"
// meuObjetoPessoa.enderecos[0].numero = "49001, Bloco 33, apto 103"
// meuObjetoPessoa.enderecos[0].cep = "23078-002";

// console.log(meuObjetoPessoa)


// S7-03 | 📘 Aula: Avançando com Funções e Objetos



// function criarPessoa(nome, idade, cidade) {
//     let pessoa = {
//       nome: nome,
//       idade: idade,
//       cidade: cidade,
//     };
    
//     return pessoa;
//   }

//   console.log(criarPessoa("Anderson", 40, "Rio de Janeiro"))

//   function alterarNome(novoNome, pessoa){
//     pessoa.nome = novoNome;
//   }
  
  
//   function alterarIdade(novaIdade, pessoa){
//     pessoa.idade = novaIdade;
//   }
  
//   function alterarCidade(novaCidade, pessoa){
//     pessoa.cidade = novaCidade;
//   }
// //   pessoa.push({

//  novoNome = "Regina",
//  novaIdade = 45,
//  novaCidade = "Malucolandia",


//   console.log(criarPessoa(novoNome, novaIdade,novaCidade));



// S7-04 | 📘 Aula: Métodos de um Objeto


// const pessoa = {
//     nome: "Marlena",
//     idade: 22,
//     cidade: "Juiz de Fora",
//     andar: function () {
//       console.log("Andou")
//     },
//     falar: function() {
//       console.log("Estou falando")
//     },
//     fazerAniversario: function() {
//       this.idade++
//       console.log(`Estou fazendo ${this.idade} anos!`)
//     }
//   }

// pessoa.andar()
// pessoa.falar()
// pessoa.fazerAniversario()

// const calculadora = {
//     somar: function(valueA, valueB) {
//       return valueA + valueB;
//     },
//     subtrair: function(valueA, valueB) {
//       if (valueA > valueB) {
//         return valueA - valueB;
//       } else {
//         return valueB - valueA
//       }
//     },
//     multiplicar: function(valueA, valueB) {
//       return valueA * valueB;
//     }
//   }

//   console.log(calculadora.multiplicar(2,3))
// // retorno: 6
// console.log(calculadora.subtrair(9,10))
// //retorno: 1
// console.log(calculadora.subtrair(10,5))
// //retorno: 5
// console.log(calculadora.somar(5,5))
// //retorno: 10



// 💪 Atividade: Trabalhando com Objetos I


// let pessoa = {
//     nome: "Anderson",
//     anoNascimento : 1983,
//     cpf : 10261161717,
//     cidade :"Rio de Janeiro",
//     logradouro : "Av. Brasil 49001",

// }

// let escola = {

// nome: "Colégio Pedro II",
// cnpj : "182.786.0001/05",
// areaAtuacao :  "Educação",
// cidade: "Rio de Janeiro",
// estado : "Rio de Janeiro",
// logradouro : "Av. Brasil 49001",
// curso : "Do fundamental ao Médio",
// }

// let curso = {
// Nome : "Kenzie",
// duracaoEmAnos : 3,
// turma : "T21",
// modulos : 25,
// }

// let endereco = {
// cidade : "Rio de Janeiro",
// estado : "Rio de Janeiro",
// logradouro : "Av. Brasil 49001",
// cep : "23078-002",
// }


// const carro = {  
//     placa: "ABC123",   
//     classes: ["sedan"],  
//     luxo: true,
//     potencia: 200, 
//     estacionado: true,  

//     obterPlaca: function() {
//         return carro.placa;
//     },

//     verificarClasses: function(){
//         return carro.classes[0]
//     },
    
//     potenciaReal: function(){
//         if(carro.luxo == true){
//         return carro.potencia * carro.potencia;
//         }else {
//             return carro.potencia;
//         }
//     },

//     naoMaisLuxo: function(){
//         if(carro.estacionado == true && carro.luxo == true){
//             carro.luxo = false;
//             return `O carro placa ${carro.placa} não é mais considerado um carro de luxo`
//         }else if (carro.estacionado == false){
//             return `O carro placa ${carro.placa} não está estacionado`
//         }else{
//             return  `O carro ${carro.placa} não é luxuoso.`
//         }
    
    
//     },
    
    
    
//     // carro.luxo = false;
//     // console.log(carro.naoMaisLuxo());
    
//     adicionarNovaClasse: function(novaClasse){
        
//         if(carro.classes.length >= 3){
//             return "Este carro não pode ter mais classes"

        
//         }else if((novaClasse == "sedan" || novaClasse == "hatchback" || novaClasse == "suv" || novaClasse == "crossover" || novaClasse == "cupê") && !carro.classes.includes(novaClasse)) {
//             carro.classes.push(novaClasse);
            
//             return `Classe adicionada com sucesso ${novaClasse}`;

//         }else if(carro.classes.includes(novaClasse)) {
            
            
//             return `O carro já possui a classe ${novaClasse}`
           

            
//         }else{
//             return "Classe Inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê."
//         }
       
//   }

// }


    
  

// console.log(carro.adicionarNovaClasse("crossover"))
// console.log(carro.adicionarNovaClasse("crossover"))
// console.log(carro.adicionarNovaClasse("ford"))
// console.log(carro.adicionarNovaClasse("hatchback"))
  
  
  


 
//   console.log(carro.classes)


const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]

  function filtraPorMarca(carros, marca) {
    for( let i = 0; i < carros.length; i++){
       
        if(carros[i].marca.includes(marca)){
            resultado.push(carros[i].modelo)
            
        }
      
    }
    return resultado;
    
}
 let resultado = []
  console.log(filtraPorMarca(carros, "VW"))

//   function precoTotal(carros) {
//     let total = 0;
//     for(let i = 0; i < carros.length; i++){
//        total += carros[i].preco
//         }
//         return `A soma do preço de todos veículos é R$ ${total.toFixed(2)}`
//     }
    

//     console.log(precoTotal(carros))

//   function contaTotal(carros) {
//     for(let i = 0; i < carros.length; i++){
//         this.carros++
//     }
//   return carros.length;

//   }

//   console.log(contaTotal(carros))
