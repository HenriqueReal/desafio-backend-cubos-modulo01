const jogadores = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 0,
  },
  {
    nome: "Beach",
    jogada: 0,
  },
  {
    nome: "Laurel",
    jogada: 0,
  },
  {
    nome: "Beatrice",
    jogada: 0,
  },
  {
    nome: "Alison",
    jogada: 0,
  },
  {
    nome: "Saundra",
    jogada: 0,
  },
  {
    nome: "Klein",
    jogada: 0,
  },
];

let jogadas0 = 0;
let jogadas1 = 0;
let nomeDoGanhador0 = "";
let nomeDoGanhador1 = "";

for (let jogador of jogadores) {
  if (jogador.jogada === 0) {
    jogadas0++;
    nomeDoGanhador0 = jogador.nome;
  } else {
    jogadas1++;
    nomeDoGanhador1 = jogador.nome;
  }
}
if (jogadas0 === 1) {
  console.log(nomeDoGanhador0);
} else if (jogadas1 === 1) {
  console.log(nomeDoGanhador1);
} else {
  console.log("NINGUEM");
}
