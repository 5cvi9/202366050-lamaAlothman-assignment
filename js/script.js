// ========================================
// CONTACT FORM VALIDATION
// ========================================

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Display or clear an error for a specific field
function showError(input, errorId, errorText) {
    const errorElement = document.getElementById(errorId);

    errorElement.textContent = errorText;
    input.classList.toggle("input-error", Boolean(errorText));
    input.setAttribute("aria-invalid", String(Boolean(errorText)));
}

// Validate the form when the user submits it
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const userMessage = messageInput.value.trim();

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        showError(nameInput, "name-error", "Please enter at least 2 characters.");
        isValid = false;
    } else {
        showError(nameInput, "name-error", "");
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showError(emailInput, "email-error", "Please enter a valid email address.");
        isValid = false;
    } else {
        showError(emailInput, "email-error", "");
    }

    // Validate message
    if (userMessage.length === 0) {
        showError(messageInput, "message-error", "Please enter a message.");
        isValid = false;
    } else {
        showError(messageInput, "message-error", "");
    }

    if (isValid) {
        message.textContent =
            "Your message is ready! This form is for demonstration only.";

        message.classList.add("success-message");

        form.reset();

        // Reset validation state after a successful submission
        [nameInput, emailInput, messageInput].forEach(function (input) {
            input.classList.remove("input-error");
            input.removeAttribute("aria-invalid");
        });
    } else {
        message.textContent = "";
        message.classList.remove("success-message");

        // Focus on the first invalid field
        const firstInvalid = form.querySelector(".input-error");

        if (firstInvalid) {
            firstInvalid.focus();
        }
    }
});

// Clear feedback when the user edits a field
[nameInput, emailInput, messageInput].forEach(function (input) {
    input.addEventListener("input", function () {
        const errorId = input.id + "-error";

        showError(input, errorId, "");
        message.textContent = "";
        message.classList.remove("success-message");
    });
});

// DARK / LIGHT MODE


const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}


// Update the theme button icon and accessibility label
function updateThemeButton() {

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☾︎";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {

        themeToggle.textContent = "☀︎";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    }
}

updateThemeButton();


// Change the theme when the button is clicked
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("portfolio-theme", "light");
    } else {
        localStorage.setItem("portfolio-theme", "dark");
    }

    updateThemeButton();
});
// PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedFilter = button.dataset.filter;

        // Update the active filter button
        filterButtons.forEach(function (btn) {
            const isActive = btn === button;

            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        // Show or hide projects based on category
        projectCards.forEach(function (card) {

            const matches =
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter;

            card.hidden = !matches;

            // Restart the animation for visible cards
            card.classList.remove("animate__animate");

            if(matches){
                void card.offsetWidth; // Trigger reflow
                card.classList.add("animate__animate");
            }
        });

    });
});