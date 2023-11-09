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

// const carros = [
//     {
//         modelo: "Ka",
//         marca: "Ford",
//         ano: "2000",
//         cor: "Branco",
//         completo: false,
//         acessorios: ['Vidro Elétrico'],
//         preco: 6799.33
//     },
//     {
//         modelo: "Gol",
//         marca: "VW",
//         ano: "1996",
//         cor: "Preto",
//         completo: false,
//         acessorios: ['Trava'],
//         preco: 12199.13
//     },
//     {
//         modelo: "Palio",
//         marca: "Fiat",
//         ano: "1995",
//         cor: "Verde",
//         completo: false,
//         acessorios: [],
//         preco: 11099.1
//     },
//     {
//         modelo: "Monza",
//         marca: "Chevrolet",
//         ano: "1993",
//         cor: "Vinho",
//         completo: false,
//         acessorios: [],
//         preco: 14578.25
//     },
//     {
//         modelo: "Saveiro",
//         marca: "VW",
//         ano: "2013",
//         cor: "Prata",
//         completo: false,
//         acessorios: [],
//         preco: 28399.13
//     },
//     {
//         modelo: "Gol",
//         marca: "VW",
//         ano: "1996",
//         cor: "Preto",
//         completo: true,
//         acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//         preco: 14350.45
//     },
//     {
//         modelo: "Gol",
//         marca: "VW",
//         ano: "2013",
//         cor: "Preto",
//         completo: true,
//         acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//         preco: 22109.21
//     },
//     {
//         modelo: "Montana",
//         marca: "Chevrolet",
//         ano: "2011",
//         cor: "Azul",
//         completo: false,
//         acessorios: [],
//         preco: 15999.13
//     },
//     {
//         modelo: "Stilo",
//         marca: "Fiat",
//         ano: "2000",
//         cor: "Preto",
//         completo: false,
//         acessorios: [],
//         preco: 17251.36
//     },

//   ]

// function donos(carros, nome, telefone){

//         let proprietario = {
//             nome: nome,
//             telefone: telefone,
//         }
//         return proprietario;
//     }

// carros[0].proprietario = donos(carros,"Anderson", "(021) 96605-0464")
// console.log(carros)

//   function contaCarrosNovos(carros) {
//     let anoAtual = 2015;
//     let count = 0;
//     let anoFabricacao = [];

//    for(let i = 0; i < carros.length; i++){
//     let anoCarro = parseInt(carros[i].ano)
//     if((anoAtual - anoCarro) < 10){
//         novoArray.push(carros[i])
//         // anoFabricacao.push(parseInt(carros[i].ano))
//         // count++

//         }
//     }
//     // if((anoAtual - parseInt(carros.ano)) > 10){

//     //    return "Não existem carros com menos de 10 anos"
//     // }
//     // console.log(anoFabricacao)
//     // console.log(count)
//     return novoArray

// }

//   novoArray = []
//   console.log(contaCarrosNovos(carros))

//   function removeCarro(carros, indice) {

//     for( let i = 0; i < carros.length; i++){
//         if( i != indice ){
//             novoArray.push(carros[i])
//            }
//         }
//        if(novoArray.length < indice){
//         return "Posição inválida"
//        }

//        return novoArray;
//     }

// let novoArray = []
// console.log(removeCarro(carros, 3))

//   MINHA RESOLUÇÃO

//   function removeCarro(carros, numero) {
//     for(let i = 0; i < carros.length; i++){
//       delete (carros[numero])

//       }

//      return carros
//   }

//   let novoArray = []
// console.log(removeCarro(carros, 3))

//   function adicionaCarro(modelo1, marca1, ano1, cor1, completo1, acessorios1, preco1) {
//     let novoCarro = {
//     modelo: modelo1,
//     marca: marca1,
//     ano: ano1,
//     cor: cor1,
//     completo: completo1,
//     acessorios: [acessorios1],
//     preco: preco1,
//     }
//     return novoCarro;
//   }

//     carros.push(adicionaCarro("Celta", "Chevrolet", "2004", "Azul", false, "vidro, trava, ar", 11000.0))

//     console.log(carros)

//   function eCarroCompleto(carros) {
//     for( let i = 0; i < carros.length; i++){
//         if(carros[i].completo == true){
//             resultado.push(carros[i])
//         }
//     }
//     return resultado
//   }
//  let resultado = []
//  console.log(eCarroCompleto(carros))

//   function filtraPorAcessorio(carros, acessorio) {
//     for( let i = 0; i < carros.length; i++){
//         if(carros[i].acessorios.includes(acessorio)){
//             resultado.push(carros[i])
//         }
//     }
//     return resultado;
//   }

//   let resultado = [];
//   console.log(filtraPorAcessorio(carros, "Trava"))

//   function filtraPorMarca(carros, marca) {
//     for( let i = 0; i < carros.length; i++){

//         if(carros[i].marca.includes(marca)){
//             resultado.push(carros[i].modelo)

//         }

//     }
//     return resultado;

// }
//  let resultado = []
//   console.log(filtraPorMarca(carros, "VW"))

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

// const departmentList = [
//   {
//     departmentName: "Financial",
//     employees: [
//       {
//         name: "Rose",
//         age: 26,
//         responsibility: "Financial director",
//         salary: 5600,
//       },
//       {
//         name: "Stevem",
//         age: 32,
//         responsibility: "Financial manager",
//         salary: 4200,
//       },
//       {
//         name: "Beca",
//         age: 26,
//         responsibility: "Financial analyst",
//         salary: 2800,
//       },
//     ],
//     working: true,
//   },
//   {
//     departmentName: "Expedition",
//     employees: [
//       {
//         name: "Rooper",
//         age: 35,
//         responsibility: "Expedition director",
//         salary: 5600,
//       },
//       {
//         name: "Maggie",
//         age: 22,
//         responsibility: "Expedition manager",
//         salary: 4200,
//       },
//       {
//         name: "Thompson",
//         age: 41,
//         responsibility: "Expedition analyst",
//         salary: 2800,
//       },
//     ],
//     working: true,
//   },
//   {
//     departmentName: "Capitation",
//     employees: [
//       {
//         name: "Saory",
//         age: 35,
//         responsibility: "Capitation director",
//         salary: 5600,
//       },
//       {
//         name: "Silvia",
//         age: 22,
//         responsibility: "Capitation manager",
//         salary: 4200,
//       },
//       {
//         name: "Sonem",
//         age: 41,
//         responsibility: "Capitation analyst",
//         salary: 2800,
//       },
//       {
//         name: "Havi",
//         age: 41,
//         responsibility: "Trainee Capitation manager",
//         salary: 1500,
//       },
//       {
//         name: "Margie",
//         age: 25,
//         responsibility: "Capitation analyst",
//         salary: 2800,
//       },
//       {
//         name: "Victoria",
//         age: 18,
//         responsibility: "Trainee Capitation analyst",
//         salary: 1500,
//       },
//     ],
//     working: true,
//   },
// ];



// function insertNewEmployeeInDepartment(department, name, age, responsibility,salary) {
//   let pessoa = {
//     name: name,
//     age: age,
//     responsibility: responsibility,
//     salary: salary,
//   };
//   for (let i = 0; i < departmentList.length; i++) {
//     if (departmentList[i].departmentName == department) {
//       departmentList[i].employees.push(pessoa)
//       return departmentList;
//     }
//   }
//   return "Department not found."
// }

// console.log(insertNewEmployeeInDepartment("Financial", "Anderson", 40, "Manager", 16560))
// console.log(insertNewEmployeeInDepartment("Expedition", "Regina", 45, "Trainee", 8350))
// console.log(insertNewEmployeeInDepartment("capitacao", "Regina", 45, "Trainee", 8350))




// function howManyDepartments(){
//   let count = 0;
//   for(let i = 0; i < departmentList.length; i++)

//   if(departmentList[i].departmentName){
//   count++;
//   }
//   return count;
// }

// console.log(howManyDepartments())

// function changeDepartmentName(nome, novoNome){
//   for(let i = 0; i < departmentList.length; i++){
//     if(departmentList[i].departmentName == nome){

//       departmentList[i].departmentName = novoNome;

//       return departmentList;
//     }

//   }
//   return "Department not found."
// }
// console.log(changeDepartmentName("Capitation", "Captação"))

// function howManyEmployeesInDepartment(department){

//   for(let i = 0; i < departmentList.length; i++){
//     if(departmentList[i].departmentName == department){
//       console.log(departmentList[i].employees.length)
//       return departmentList[i].employees

//     }

//   }
//   return "Departament not found";
// }

// console.log(howManyEmployeesInDepartment("bunda"



// let ganhador = {
//   nome: 'Adamastor',
//   nascimento: '16/09/1986',
//   cpf: '123.321.789-98',
//   estadoCivil: 'Casado'
// }

// function dadosDoGanhador(nomeConferir, cpfConferir){
//   novoNomeGanhador = ganhador.nome.charAt(0).toUpperCase() + ganhador.nome.substring(1)
//   novoNomeConferir = nomeConferir.charAt(0).toUpperCase() + ganhador.nome.substring(1)
//   if(novoNomeGanhador == novoNomeConferir && ganhador.cpf == cpfConferir){
    
    
//     return "É ganhador"

//   }
//   return "Não é ganhador"
// }

// console.log(dadosDoGanhador("Adamastor", "123.321.789-98"))

// let ganhador = {
//   nome: 'Adamastor',
//   nascimento: '16/09/1986',
//   cpf: '123.321.789-98',
//   estadoCivil: 'Casado',
// }

// function cadastrarNaoGanhadores(nome1, nascimento, cpf, estadoCivil){
//   novoNomeGanhador = ganhador.nome.charAt(0).toUpperCase() + ganhador.nome.substring(1)
//   novoNome = nome1.charAt(0).toUpperCase() + nome1.substring(1)

//   let possivelGanhador = {
//     nome: nome1,
//     nascimento: nascimento,
//     cpf: cpf,
//     estadoCivil: estadoCivil,
//   }
//   if(ganhador.nome == novoNome && ganhador.cpf == possivelGanhador.cpf){
//     return "Você é o ganhador, Parabéns!!"
//   }else {
    
//     novoArray.push(possivelGanhador)
   
 
//     return novoArray
//   }
// }

// let novoArray = []
// console.log(cadastrarNaoGanhadores("Anderson", "06/07/1983",'102.611.617-17','Casado'))
// console.log(cadastrarNaoGanhadores("Regina", "21/10/1978",'089.125.627-03','Casado'))



// Array aninhado
// const arrayAninhado = [
//   [1, 2, 3], // Indice 0
//   [4, 5, 6], // Indice 1
//   [7, 8, 9], // Indice 2
// ];

// // Acessando o terceiro sub-array (indice 2 do arrayAninhado)
// const terceiroSubArray = arrayAninhado[2];
// console.log(terceiroSubArray);
// // Saída: [7, 8, 9]

// /*
//   Acessando o primeiro elemento do terceiro sub-array
//   (indice 0 do terceiroSubArray)
// */
// const valorSete = terceiroSubArray[0];
// console.log(valorSete); // Saída: 7


// Array aninhado
// const arrayAninhado = [
//   [1, 2, 3], // Indice 0
//   [4, 5, 6], // Indice 1
//   [7, 8, 9], // Indice 2
// ];

// /*
//   Acessando o terceiro sub-array (indice 2 do arrayAninhado)
//   em seu primeiro elemento (indice 0 do sub-array) 
// */
// const valorSete= arrayAninhado[2][0];
// console.log(valorSete); // Saída: 7

// const instrumentos = [
//   ["Bateria", "Pandeiro", "Repinique"], // Percussão
//   ["Violão", "Guitarra", "Baixo"], // Corda
//   ["Flauta", "Saxofone", "Trompete"], // Sopro
// ];

// // Primeiro for itera sobre o array instrumentos
// for (let i = 0; i < instrumentos.length; i++) {
//   // Segundo for itera sobre cada sub-array
//   for (let j = 0; j < instrumentos[i].length; j++) {
//     console.log(instrumentos[i][j]);
//   }
// }

// const instrumentos = [
//   ["Bateria", "Pandeiro", "Repinique"], // Percussão
//   ["Violão", "Guitarra", "Baixo"], // Corda
//   ["Flauta", "Saxofone", "Trompete"], // Sopro
// ];

// console.log(instrumentos[0][2])

// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

// function parOuImpar(){
// for (let i = 0; i < a.length; i++){
//   if(a[i] % 2 == 0){
//     par.push(a[i])
//   }else{
//     impar.push(a[i])
    
//   }
// }
//   return `A lista recebida possui ${par.length} elementos pares e ${impar.length} elementos ímpares.`
// }

// let par = [];
// let impar = []
// console.log(parOuImpar())


// let b = [1,2,3,4,5,6,7,10,13,15]


// function quantosPorcento(){
//   for(let i = 0; i < b.length; i++){
//     if(b[i] % 2 != 0){
//       impar.push(b[i])
//     }
   
//   }
//   porcento = (impar.length*100)/b.length
//   return `O total de valores ímpares é ${impar.length} e corresponde a ${porcento}% da lista`
// }

// let impar = []
// let porcentagem = 0;

// console.log(quantosPorcento())


// let a = []
// let b = []


// function validarTamanho(a,b){
 
//     if(a.length == 10 & b.length == 10){
//       return "Lista ok"
//     }

//     return "Lista fora dos Padrões"
//   }

//   console.log(validarTamanho([1,2,3,4,5,6,7,8,9,10],[2,4,6,8,12,14,16,18,20]))



//  let a = []
//  let b = []

//  let novoA = []
//  let novoB = []
//  let numeroIncorreto = []

//  function divisiveisEmultiplos(a,b){
//   if(a.length != 10 || b.length !== 10){
//          return "Lista fora dos padrões"
//          }
//   for(let i = 0; i < a.length; i++){
//   if(a[i] % 2 == 0 || a[i] % 3 == 0){
//     novoA.push(a[i]) 
//   }else {
//     numeroIncorreto.push(a[i])
//     console.log(i)
//     return `valores não permitidos encontrados, corrigir o valor ${numeroIncorreto} na posição ${i} do Array`
//   }
  
//   }
  
//   for(let j = 0; j < b.length; j++){
//     if(b[j] % 5 == 0){
//       novoB.push(b[j])
//     }else {
//       numeroIncorreto.push(b[j])
//       return `valores não permitidos encontrados, corrigir o valor ${numeroIncorreto} na posição ${j} do Array`
//     }
   
//   }
  
//   return " A composição da lista foi validada"
//  }
//  console.log(divisiveisEmultiplos([2,4,6,8,9,12,15,16,18,20],[0,10,15,20,25,30,35,40,45,50]))
 
// let lista = []
// let teste = "caralho"

// function novosElementos(lista){
//   for(let i = 0; i < lista.length; i++){
    
//     if(lista[i].length > teste.length || lista.length > 10){
//       return "Não foi possível inserir este valor"
      
//     }
//     else {
//       lista.push(lista[i])
//       lista.pop()
     
//        }
    
//   }
//   return `"Elemento inserido com sucesso, a lista agora é: ${lista}`


// }

// console.log(novosElementos(["bunda", 11 , 19 , "xoxota" , 24, "paralel", "ovo", 25,"fechou",13,15]))


// let a = []

// let b = []

// function quadrado(a){
//   for(let i = 0; i < a.length; i++){
//     b.push(a[i]*a[i])
    
//   }
//   return b
// }

// console.log(quadrado([1,3,5,7,9,10,11,2,4,6,25,36,12,8,6]))






// function acampamento(caixaDeSuprimentos) {
//     for (let i = 0; i < caixaDeSuprimentos.length; i++) {
//         console.log(caixaDeSuprimentos)

//         for (let j = 0; j < caixaDeSuprimentos[i].length; j++) {
//             console.log(caixaDeSuprimentos[j].length);
//         }

//         novaVariavel = caixaDeSuprimentos[i].length
//         novoArray = caixaDeSuprimentos[j].length

//         if (novoArray < 5) {
//           console.log("Aluno Aprovado");
//         } else {
//             console.log("Aluno Reprovado");
//         }
//     }
// }

// console.log(acampamento(caixaDeSuprimentos));


// listarNotas(arrayNotas);

let caixaDeSuprimentos = [
  
  higiene = ["papel de bunda", "sabonete", "pasta de dente", "fio dental", "shampoo"],
  
  alimentacao = ["carne", "frango", "peixe","arroz", "feijao"],


 farmacia = ["enalapril", "band-aid", "esparadrapo", "gaze", "alcool"],
  
 
 lazer =  ["bola de futebol", "bola de voley", "jogos de tabuleiro", "maconha"]

]
let novaVariavel = []
let novoArray = []


function acampamento(caixaDeSuprimentos) {
    for (let i = 0; i < caixaDeSuprimentos.length; i++) {
        // console.log(caixaDeSuprimentos[i]);
        let somaItens = 0;
        let media = 0;

        for (let j = 0; j < caixaDeSuprimentos[i].length; j++) {
          console.log(caixaDeSuprimentos[j].length)
            somaItens += caixaDeSuprimentos[j].length;
            
        }

        console.log(somaItens)
        media = somaNotas / arrayNotas[i].length;
        console.log(media, "Media")

        if (somaItens == 20) {
            console.log("Podemos Acampar");
        } else {
            console.log("Não podemos acampar");
        }
    }
}

acampamento(caixaDeSuprimentos);