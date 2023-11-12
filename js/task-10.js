function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }

    const boxCountInput = document.getElementById('boxCountInput');
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createButton.addEventListener('click', createBoxesFromInput);
    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxesFromInput() {
      const amount = Number(boxCountInput.value);
      if (amount > 0 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    }

    function createBoxes(amount) {
      const baseSize = 30;

      for (let i = 0; i < amount; i++) {
        const size = baseSize + i * 10;
        const color = getRandomHexColor();
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = color;
        box.style.margin = '5px';
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
      boxCountInput.value = '';
    }