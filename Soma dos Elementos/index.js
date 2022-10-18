const lista = [1, 2, 3, 4];

let cofre = 0;

for (let valor of lista) {
  if (valor <= 1000) {
    cofre += valor;
  }
}
console.log(cofre);
