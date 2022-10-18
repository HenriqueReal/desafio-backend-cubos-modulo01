const lista = [12, 18, 27];
let pessoaMaisJovem = Math.max(...lista);

for (let idade of lista) {
  let tamanho = lista.length >= 1 && lista.length <= 100 ? true : false;
  if (tamanho === true && idade >= 18 && idade < pessoaMaisJovem) {
    pessoaMaisJovem = idade;
  }
}
if (pessoaMaisJovem >= 18) {
  console.log(pessoaMaisJovem);
} else {
  console.log("CRESCA E APARECA");
}
