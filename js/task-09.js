function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButton = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  changeColorButton.addEventListener("click", function () {
    const randomColor = getRandomHexColor();

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Update the color value in the <span>
    colorSpan.textContent = randomColor;
  });