// CONTACT FORM


// Get the contact form and the message area
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

// Handle the form submission without reloading the page
form.addEventListener("submit", function (event) {
    event.preventDefault();

   
    message.textContent =
        "Thank you! Your message has been received.";

   
    form.reset();
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
        });

    });
});