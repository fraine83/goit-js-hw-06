const validationInput = document.getElementById("validation-input");
  const validClass = "valid";
  const invalidClass = "invalid";

  validationInput.addEventListener("blur", function () {
    const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);
    const inputValue = validationInput.value;
    
    if (inputValue.length === expectedLength) {
      validationInput.classList.add(validClass);
      validationInput.classList.remove(invalidClass);
    } else {
      validationInput.classList.add(invalidClass);
      validationInput.classList.remove(validClass);
    }
  });