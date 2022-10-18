const texto =
  "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";

let tirarEspacos = texto.trim();
let separarPalavras = tirarEspacos.split(" ");
let espacoMeio = 0;
for (let caractere of separarPalavras) {
  if (caractere === "") {
    espacoMeio++;
  }
}
console.log(separarPalavras.length - espacoMeio);
