function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirNivel(saldo) {
    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let jogadores = [
    { nome: "Gimli filho de Gloin", vitorias: 150, derrotas: 37 },
    { nome: "Legolas do Reino da Floresta", vitorias: 129, derrotas: 29 }
];

for (let jogador of jogadores) {
    let saldoVitorias = calcularSaldo(jogador.vitorias, jogador.derrotas);
    let nivel = definirNivel(saldoVitorias);

    console.log(`O Herói ${jogador.nome} tem saldo de ${saldoVitorias} está no nível de ${nivel}!`);
}
