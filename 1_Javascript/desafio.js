/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:

1- Preço do combustível
2- Valor médio gasto pelo carro em KM
3- Distância em KM da viagem

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */


const precoCombustivel = 4.19;
const consumoCombustivel = 12;
const distanciaKm = 1500;

const litrosConsumidos = distanciaKm / consumoCombustivel;
const valorGasto = precoCombustivel * litrosConsumidos

console.log(valorGasto.toFixed(2));


