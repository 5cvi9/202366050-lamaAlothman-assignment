# Technical Documentation — Assignment 2

## 1. Project Overview

This project extends the personal portfolio developed in Assignment 1 by adding interactive features and improving the user experience.

The website is built using HTML, CSS, and JavaScript and contains four main sections: Home, About, Projects, and Contact.

The main improvements introduced in Assignment 2 include interactive project filtering, real-time contact form validation, error and success feedback, and smooth animations.

## 2. Project Structure

The project uses separate files for content, styling, JavaScript functionality, images, and documentation.

```text
assignment-2/
├── README.md
├── index.html
├── css/
│   ├── styles.css
│   ├── components.css
│   └── responsive.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

The main files have the following responsibilities:

- `index.html` defines the website structure and content.
- `styles.css` contains the main layout, colors, and theme styling.
- `components.css` contains styling for interactive features, validation feedback, and animations.
- `responsive.css` contains media queries for different screen sizes.
- `script.js` handles JavaScript interactions and data processing.

This separation makes the code easier to read, maintain, and extend.

## 3. Dynamic Content — Project Filtering

The Projects section includes three filter buttons: All Projects, Development, and UI/UX Design.

Each project card is assigned a category using the HTML `data-category` attribute. The filter buttons use `data-filter` to identify the selected category.

JavaScript listens for button clicks and compares the selected filter with each project's category.

If a project matches the selected category, it remains visible. Otherwise, JavaScript hides it using the `hidden` property.

The selected button is updated using the `active` class and the `aria-pressed` attribute.

This feature allows users to explore projects by category without reloading the webpage.

## 4. Data Handling and State Management

The website uses JavaScript to handle user interactions and input data.

The dark/light theme feature uses `localStorage` to save the selected theme. When the page loads, JavaScript retrieves the saved preference and applies the appropriate CSS class.

The contact form also processes user input by reading and trimming field values before validation.

These features demonstrate basic data handling and state management without requiring a backend or external API.

## 5. Contact Form Validation and User Feedback

The Contact section includes Name, Email, and Message fields.

JavaScript applies the following validation rules:

- Name must contain at least two characters after trimming whitespace.
- Email must match a basic email format checked using a regular expression.
- Message must not be empty or contain only whitespace.

Validation occurs when the form is submitted and while users edit the fields.

Invalid inputs are highlighted with red borders, and specific error messages explain what needs to be corrected.

If the user attempts to submit invalid information, a general error message appears and the first invalid field receives focus.

When all inputs are valid, a confirmation message is displayed and the form fields are reset.

The form is a demonstration and does not send information to a server.

## 6. Animations and Transitions

The website uses CSS transitions and animations to improve the user experience.

Project cards use a short fade-in animation when the selected filter changes. The effect combines opacity and slight vertical movement to make the content update smoothly.

The contact form success message also uses a subtle fade-in effect.

Existing hover effects are applied to project cards, navigation links, buttons, and social icons. Smooth scrolling is used when navigating between sections.

Animations are kept short and subtle to avoid distracting users. The project filtering animation also respects the `prefers-reduced-motion` setting.

## 7. Responsive Design

The website uses CSS Grid and Flexbox to organize content across different screen sizes.

Two main responsive breakpoints are used:

- **800px:** The Projects and Contact layouts change to a single column.
- **550px:** Navigation, typography, spacing, project images, and form dimensions are adjusted for mobile devices.

The responsive rules are organized in `responsive.css`, keeping them separate from the main design and interactive component styles.

## 8. Accessibility and Code Quality

The website uses semantic HTML elements, descriptive image alternative text, and labels connected to form fields.

Accessibility attributes such as `aria-label`, `aria-describedby`, `aria-invalid`, `aria-live`, and `aria-pressed` are used to improve communication with assistive technologies.

The JavaScript code is organized into sections for form validation, theme switching, and project filtering.

CSS variables are used to maintain consistent colors, and comments identify important parts of the implementation.

## 9. Testing and Verification

The following tests were performed during development:

| Feature | Test | Expected Result |
|---|---|---|
| Project Filtering | Select Development | Only RouteRepair is displayed |
| Project Filtering | Select UI/UX Design | Only KFUPM StudyVerse is displayed |
| Project Filtering | Select All Projects | Both project cards are displayed |
| Form Validation | Enter a one-character name | An error message appears |
| Form Validation | Enter an invalid email | Email validation error appears |
| Form Validation | Leave the message empty | Message validation error appears |
| Real-time Feedback | Correct invalid input | The corresponding error disappears |
| Invalid Submission | Submit incomplete information | General error feedback appears |
| Valid Submission | Submit valid information | Confirmation appears and fields reset |
| Theme Toggle | Switch theme and refresh | Saved theme preference is restored |
| Responsive Design | Resize browser window | Layout adjusts to screen width |

The testing process helped verify that the new features worked correctly and did not interfere with the functionality carried over from Assignment 1.

## 10. Improvements from Assignment 1

Assignment 1 focused on building the initial responsive portfolio with basic JavaScript interactions.

Assignment 2 extends this foundation by introducing project filtering, more detailed form validation, real-time user feedback, and additional animations.

The CSS was also reorganized into separate stylesheets to make future development and maintenance easier.

These improvements make the portfolio more interactive, user-friendly, and easier to extend in future assignments.