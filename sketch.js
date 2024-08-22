let palavra;

function setup() {
  createCanvas(450, 450);

  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Wolverine ␥", "Jean Grey🔥", "Emma Frost💎", "Cyclops 🕶️"];
  return random(palavras);
}

function inicializaCores() {

  background("blue");
  fill("yellow");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {

  inicializaCores();

  let texto = palavraParcial(0, width);
  text(texto, 225, 225);
}
