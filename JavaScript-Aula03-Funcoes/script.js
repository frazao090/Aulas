// function formataNomeEmpresa() {
//     const nome = "Lucas";
//     const sobrenome = "Jozefovicz";
//     const empresa = "Kenzie Academy Brasil";
  
//     console.log(
//       `O nome completo é: ${nome} ${sobrenome}\nTrabalha na ${empresa}`
//     );
//   }
  
//   // Execução da função declarada acima
//   formataNomeEmpresa();
//   formataNomeEmpresa();
//   formataNomeEmpresa();
//   formataNomeEmpresa();
//   // Será mostrado 4 vezes na tela:
//   // O nome completo é: Lucas Jozefovicz
//   // Trabalha na Kenzie Academy Brasil

// function olaMundo(){
//     console.log("Hello, World")
// }
// olaMundo()
// const aluno = "Regina Frazão";
// const entregas = 99;
// const entrevistaTecnica = 100;
// const presenca = 100;
// function aprovacaoMonitor() {
//   if (entregas >= 100 && entrevistaTecnica >= 100 && presenca >= 100) {
//     console.log(`O aluno(a) ${aluno} é um possível monitor.`);
//   } else {
//     console.log(`selecionar outro aluno(a)`);
//   }
// }
// aprovacaoMonitor();
// let num1 = 40;
// let num2 = 40;
// let num3 = 40;
// function qualOmaior(){
// if(num1 > num2 && num1 > num3){
// console.log(`O número ${num1} é o maior.`)
// }else if(num2 > num1 && num2 > num3){
//     console.log(`O número ${num2} é o maior.`)
// }else if(num3 > num1 && num3 > num2){
//     console.log(`O número ${num3} é o maior.`)
// }else {
//     console.log("Os números são iguais")
// }
// }
// qualOmaior();
// let nome = "Anderson";
// let sobrenome = "Frazão";
// let idade = 40;
// function dadosPessoas(){
//     console.log(`Meu nome é ${nome} ${sobrenome} e minha idade é de ${idade} anos.`)
// }
// dadosPessoas();
// function qualOmaior(){
// let num1 = 58;
// let num2 = 78;
// let num3 = 88;
// let maior = num3;
// if(num1 > maior){
//     maior = num1;
// }else if(num2 > maior){
//     maior = num2;
// }
// console.log(`O número ${maior} é o maior.`)
// }
// qualOmaior();
// function doubleCalculate() {
//     let num = 2 * 10;
//     if (num / 3 < 7) {
//       num = num * 2;
//     } 
//     return num;
//   }
//   const numero = doubleCalculate();
// console.log(numero);
//   function calculaAreaCirculo() {
//     const pi = 3.14;
//     const areaCirculoDeRaioQuatro = pi * 4 * 4;
//     return areaCirculoDeRaioQuatro;
//   }
//   const resultado = calculaAreaCirculo();
//   console.log(resultado);
// Funções com parametro.
//   function calculaAreaCirculo(raio) {
//     const pi = 3.14;
//     const areaCirculoDeRaioQuatro = pi * raio * raio;
//     return areaCirculoDeRaioQuatro;
//   }
//   const resultado = calculaAreaCirculo(5);
//   console.log(resultado);
// exemplo 2 :
function calculaAreaTriangulo(base, altura) {
    console.log(`base é igual a: ${base}`);
    console.log(`altura é igual a: ${altura}`);

    const areaTriangulo = (base * altura) / 2;

    return areaTriangulo;
}
const resultado = calculaAreaTriangulo(5, 10);
console.log(resultado);

