// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "


function adicionarMultiplos (a, N){
  const somaDosMultiplos = gets()
  let total = 0;
  
  for (i = a; i <= N; i += a){
    total += i
  }
  return total
}

print(adicionarMultiplos(a,N));

