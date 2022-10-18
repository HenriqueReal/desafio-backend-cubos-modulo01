const precos = [200, 150, 50, 100];
let precoTotal = 0;
let menorPreco = Math.min(...precos);

for (let preco of precos) {
  precoTotal += preco;
}
if (precos.length >= 3) {
  menorPreco *= 0.5;
  precoTotal -= menorPreco;
}
console.log(precoTotal);
