function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxCountInput = document.getElementById('boxCountInput');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

let currentAmount = 0;

createButton.addEventListener('click', createBoxesFromInput);
destroyButton.addEventListener('click', destroyBoxes);
boxCountInput.addEventListener('input', createBoxesFromInput);

function createBoxesFromInput() {
  const amount = Number(boxCountInput.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    currentAmount = amount;
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function createBoxes(amount) {
  const baseSize = 30;
  let html = '';

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const color = getRandomHexColor();
    const box = `
      <div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>
    `;
    html += box;
  }

  boxesContainer.innerHTML = html;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  boxCountInput.value = '';
  currentAmount = 0;
}
