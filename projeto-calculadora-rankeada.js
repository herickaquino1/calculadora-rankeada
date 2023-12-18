calcularPartida(17, 5)

function calcularPartida(vitorias, derrotas) {
  let saldo = vitorias - derrotas;
  let rank = "";
  if (vitorias < 10) {
    rank = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    rank = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    rank = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    rank = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    rank = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    rank = "Lendario";
  } else if (vitorias > 101) {
    rank = "Imortal";
  }
  console.log("O Heroi tem saldo de " + saldo + " esta no nivel de " + rank);
}
