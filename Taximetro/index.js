const min = 10;
const km = 10;

let kmAcimaDe10 = km - 10;
let minAcimaDe20 = min - 20;
let minx50cents = min * 50;
let valorTotaldaCorrida = 0;

if (km > 10 && min > 20) {
  valorTotaldaCorrida = kmAcimaDe10 * 50;
  valorTotaldaCorrida += 10 * 70;
  valorTotaldaCorrida += minAcimaDe20 * 30;
  valorTotaldaCorrida += 20 * 50;
} else if (km < 10 && min < 20) {
  valorTotaldaCorrida += min * 50;
  valorTotaldaCorrida += km * 70;
} else if (km > 10 && min < 20) {
  valorTotaldaCorrida += valorTotaldaCorrida = kmAcimaDe10 * 50;
  valorTotaldaCorrida += 10 * 70;
  valorTotaldaCorrida += min * 50;
} else {
  valorTotaldaCorrida += km * 70;
  valorTotaldaCorrida += minAcimaDe20 * 30;
  valorTotaldaCorrida += 20 * 50;
}
console.log(valorTotaldaCorrida);
