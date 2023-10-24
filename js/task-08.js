 const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
      alert("All fields must be filled in");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(formData); // Display the entered data in the console
      loginForm.reset(); // Clear the form fields
    }
  });
