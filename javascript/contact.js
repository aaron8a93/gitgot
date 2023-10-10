document.addEventListener("DOMContentLoaded", function () {

    const body = document.querySelector("body");
    const modeToggle = document.getElementById("mode-toggle");
    const modeStatus = document.querySelector(".mode-status");
    
    function toggleMode() {
      body.classList.toggle("dark-mode");
    
      // Check if the body has the dark-mode class
      if (body.classList.contains("dark-mode")) {
        // If it does, update the mode status to "Dark Mode"
        modeStatus.innerText = "Currently in Dark Mode";
      } else {
        // update the mode status to "Light Mode"
        modeStatus.innerText = "Currently in Light Mode";
      }
    }
    
    modeToggle.addEventListener("click", toggleMode);
    
    
    });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submit-btn");
    const successMessage = document.getElementById("success-message");

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            form.style.display = "none";
            successMessage.style.display = "block";
        }
    });

    function validateName() {
        if (nameInput.value.trim() === "") {
            nameInput.classList.add("invalid");
        } else {
            nameInput.classList.remove("invalid");
        }
        validateSubmitButton();
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.classList.add("invalid");
        } else {
            emailInput.classList.remove("invalid");
        }
        validateSubmitButton();
    }

    function validateSubmitButton() {
        if (nameInput.classList.contains("invalid") || emailInput.classList.contains("invalid")) {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    }

    function validateForm() {
        validateName();
        validateEmail();
        return !nameInput.classList.contains("invalid") && !emailInput.classList.contains("invalid");
    }
});
