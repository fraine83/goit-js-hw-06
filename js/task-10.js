function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount > 0 && amount <= 100) {
      createBoxes(amount);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', clearBoxes);

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

  function clearBoxes() {
    boxesContainer.innerHTML = '';
  }
