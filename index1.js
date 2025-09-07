// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = (1);
let quantidade = (3);

let estoque = 5;


if (operacao === 1) {
    
    estoque += quantidade;
    print(estoque);
} else if (operacao === 2) {
   
    if (quantidade <= estoque) {
        estoque -= quantidade;
        print(estoque);
    } else {
        print("Estoque insuficiente");
    }
}