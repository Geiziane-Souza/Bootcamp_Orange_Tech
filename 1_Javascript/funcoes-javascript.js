//aula de funções 


/* function sayMyName(name){
    console.log('Your name is: ' + name);
}

sayMyName('Geiziane'); */


/* function quadrado(valor){
    return valor * valor
}

const quadradoDeDez = quadrado (10);
console.log(quadradoDeDez); */

/* function incrementarJuros(valor, percentualDeJuros){

    const valorAcrescimo = (percentualDeJuros / 100);
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
 */



function calcularImc(peso,altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5){
        return 'Abaixo do peso';   
    }  else if (imc >= 18.5 &&  imc <= 25){       
        return 'Peso normal';
    
    } else if (imc >= 25 && imc <= 30){       
        return 'Acima do peso';    
    } else if (imc >= 30 && imc <= 40){   
       return 'Obeso';
    } else {
        return 'Obesidade Grave';    
    }
}


//Main
(function () {
    const peso = 70;
    const altura = 1.63;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
