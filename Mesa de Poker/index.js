const valores = [2, 0, 5, 6, 10, 11];
function solucao(min, max, valores) {
  let permitidosNaMesa = [];
  for (let valor of valores) {
    if (valor >= min && valor <= max) {
      permitidosNaMesa.push(valor);
    }
  }
  console.log(permitidosNaMesa);
}
solucao(5, 10, valores);
