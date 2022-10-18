const numeros = [1, 3, 2, 1];

let soma = 0;
for (let numero of numeros) {
  soma += numero;
}

let jogador = 0;
if (soma > numeros.length) {
  jogador = soma % numeros.length;
  if (jogador == 0) {
    jogador = numeros.length;
  }
} else {
  jogador = soma;
}
console.log(jogador);
