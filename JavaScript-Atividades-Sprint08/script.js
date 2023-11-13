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
    let notas = [];
    let somaNota = 0;
    let materias = [];
    let nomeDoAluno = prompt("Qual o nome do aluno")
    if(nomeDoAluno.length < 5){
        alert("Nome Invalido")
    }else{
    for(let i = 0; i < 10; i++){
    let materia = prompt("Digite a matéria")
    materias.push(materia)
    console.log(materias)
        let nota = parseInt(prompt("Digite a nota do aluno?"))
        if(nota > 0 && nota <= 10){
        somaNota += nota
    }else{
        alert("Nota inválida")
    }
    }
    media = somaNota / materias.length
       console.log(media)
let presenca = prompt("Digite qual foi a presenca do aluno")

if(media >= 8 && presenca >=6){
    alert(`A nota do aluno ${nomeDoAluno} é ${media} e sua presença é ${presenca}: Aluno aprovado!`)
}else {
    alert(`A nota do aluno ${nomeDoAluno} é ${media} e sua presença é ${presenca}: Aluno reprovado!`)
}
    }
