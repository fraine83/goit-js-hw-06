const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  // Add an input event listener to the name input
  nameInput.addEventListener("input", function () {
    // Get the current value of the input
    const inputValue = nameInput.value;

    // Update the content of the name output span
    if (inputValue.trim() === "") {
      nameOutput.textContent = "Anonymous";
    } else {
      nameOutput.textContent = inputValue;
    }
  });