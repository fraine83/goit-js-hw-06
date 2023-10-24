// Initialize counterValue to store the current counter value
  let counterValue = 0;

  // Get references to the buttons and the value span
  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const valueSpan = document.getElementById("value");

  // Function to update the value span with the current counterValue
  function updateCounterDisplay() {
    valueSpan.textContent = counterValue;
  }

  // Add a click event listener to the decrement button
  decrementButton.addEventListener("click", function () {
    counterValue -= 1; // Decrease the counter value by 1
    updateCounterDisplay(); // Update the display
  });

  // Add a click event listener to the increment button
  incrementButton.addEventListener("click", function () {
    counterValue += 1; // Increase the counter value by 1
    updateCounterDisplay(); // Update the display
  });

  // Initial display update
  updateCounterDisplay();