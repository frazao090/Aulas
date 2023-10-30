// function umaNovaFrase(frase, palavraAntiga, palavraNova){

// let fraseModificada = frase.replaceAll(palavraAntiga, palavraNova);

// return fraseModificada;

// }

// console.log(umaNovaFrase("Meu piru é caseiro, não pula no quintal de nínguem, meu piru só fica no espaço que tem.","piru", "Cachorro"));

// function mediaAritmetica(nota1, nota2, nota3){

// let media = (nota1 + nota2 + nota3) / 3;

// return `A média do aluno é ${media.toFixed(1)}`;
// }

// console.log(mediaAritmetica(8,7.8,5.5));

function valorTotalProduto(valorUnitario, quantidade) {
  if(quantidade >= 10) {
    let valorDaCompra = (valorUnitario - (valorUnitario * 0.2)) * quantidade;

    return `O valor total da compra é R$ ${valorDaCompra.toFixed(2)}`;
  }else if(quantidade >= 5) {
    let valorDaCompra = (valorUnitario - (valorUnitario * 0.1)) * quantidade;

    return `O valor total da compra é R$ ${valorDaCompra.toFixed(2)}`;
  }
  return `O valor total da compra é R$ ${(valorUnitario * quantidade).toFixed(
    2
  )}`;
}
console.log(valorTotalProduto(10,9).replaceAll(".", ","));
