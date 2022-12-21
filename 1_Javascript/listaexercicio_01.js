
//exercicio 1

/* const nota1 = 6;
const nota2 = 8;
const nota3 = 7;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal >= 7){
    console.log('Passou de semestre');
} else if(mediaFinal < 5){
    console.log('Reprovado');
} else{
    console.log('Recuperação')
} */


//exercicio 2 

/* const peso = 130;
const altura = 1.63;
const imc = peso / Math.pow(altura,2);



if (imc <= 18.5){

    console.log('Abaixo do peso');

}  else if (imc >= 18.5 &&  imc <= 25){
    
    console.log('Peso normal');

} else if (imc >= 25 && imc <= 30){
    
    console.log('Acima do peso');

} else if (imc >= 30 && imc <= 40){

    console.log('Obeso');

} else {

    console.log('Obesidade Grave');
    
}   
  */

// Exercicio 3 

//Código condição do pagamento: -à vista Débito, recebe 10% de desconto; à vista no dinheiro ou Pix, recebe 15% de desconto; - Em duas vezews, preço normal de etiqueta sem juros; - Acima de 2 x, preço normal de etiqueta + 10% de juros.

const precoEtiqueta = 100.00;
const condicaoPagamento = 4;


if (condicaoPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (condicaoPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condicaoPagamento === 3){
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}
