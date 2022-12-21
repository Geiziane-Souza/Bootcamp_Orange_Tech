/* 
const numero = 5;

const numeroDivisivelPor5 = (numero % 5) === 0;
console.log(eNumeroPar);

if (numero === 0){
    console.log('O número é inválido')
} else if (numero === 5)

if (eNumeroPar) {
    console.log('O numero é inválido');
} else {
    console.log('Não');
} 
 */

const precoEtanol = 4.99;
const precoGasolina = 5.70;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros


if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}