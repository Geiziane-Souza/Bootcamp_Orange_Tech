/* function meuNome(nome){
   console.log(`Meu nome é ${nome}`);
}

//invocação da função
meuNome('Geiziane');
meuNome('Renan');



function verificarIdade(idade) {
    
    if (idade >= 18){
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

verificarIdade(30); 
 */


function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}


    const precoEtiqueta = 100.00;
    const condicaoPagamento = 4;

    if (condicaoPagamento === 1){
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (condicaoPagamento === 2){
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (condicaoPagamento === 3){
        console.log(aplicarDesconto (precoEtiqueta));
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }

    
