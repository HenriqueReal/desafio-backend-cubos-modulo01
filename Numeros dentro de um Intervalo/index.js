function solucao(numero, limiteInferior, limiteSuperior) {
  let inteiro = numero % 1;
  if (
    inteiro === 0 &&
    limiteInferior <= limiteSuperior &&
    numero >= limiteInferior &&
    numero <= limiteSuperior
  ) {
    console.log("PERTENCE");
  } else {
    console.log("NAO PERTENCE");
  }
}

solucao(10, 5, 20);
