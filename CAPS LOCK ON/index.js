const input = "Caps";

if (
  input[0] === input[0].toUpperCase() &&
  input.slice(1) === input.slice(1).toUpperCase()
) {
  let formatado1 = input.toLowerCase();
  console.log(formatado1);
} else if (
  input[0] === input[0].toLowerCase() &&
  input.slice(1) === input.slice(1).toUpperCase()
) {
  let minuscula = input.toLocaleLowerCase();
  let formatado2 = input[0].toUpperCase() + minuscula.slice(1);
  console.log(formatado2);
} else {
  console.log(input);
}
