const lista = [2, 3, 4];

let cofre = 0;

for (let valor of lista) {
  if (lista.length >= 0 && lista.length <= 1000) {
    cofre += valor;
  }
}
cofre = cofre / lista.length;
console.log(cofre);
