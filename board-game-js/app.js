const board = document.querySelector('#board');
const colors = [
  '#397754',
  '#f0a3bc',
  '#70be51',
  '#eb6b40',
  '#9b45b2',
  '#f9e45b',
  'f6e9d7',
  '#c8d8e4',
];
const squaresNum = 750;

for (let i = 0; i < squaresNum; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;

  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
