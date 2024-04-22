let xp = getSaldo(50,10)
let nivel;

if (xp < 10) {
  nivel = "Ferro";
} else if (xp >= 11 && xp <= 20) {
  nivel = "Bronze";
} else if (xp >= 21 && xp <= 50) {
  nivel = "Prata";
} else if (xp >= 51 && xp <= 80) {
  nivel = "Ouro";
} else if (xp >= 81 && xp <= 90) {
  nivel = "Diamante";
} else if (xp >= 91 && xp <= 100) {
  nivel = "Lendário";
}  else {
  nivel = "imortal";
}

function getSaldo(vitorias, derrotas){
    saldo = vitorias - derrotas
    return saldo
}

console.log("O Herói te um saldo de "+ xp + " vitórias e está no nível: "+ nivel)
