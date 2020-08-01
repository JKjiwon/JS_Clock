const body = document.querySelector("body");
const amountOfImage = 4;

function genRandom() {
  const number = parseInt(Math.random() * amountOfImage + 1);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

function paintImage(number) {
  const image = new Image();
  image.src = `./images/${number}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

init();
