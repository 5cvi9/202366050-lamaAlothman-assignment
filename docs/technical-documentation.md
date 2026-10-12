# Technical Documentation — Assignment 2

## 1. Project Overview

This project extends the personal portfolio developed in Assignment 1 by adding interactive features and improving the user experience.

The website is built using HTML, CSS, and JavaScript and contains four main sections: Home, About, Projects, and Contact.

The main improvements introduced in Assignment 2 include project filtering and live search, real-time contact form validation, error and success feedback, and smooth animations.

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

## 3. Dynamic Content — Project Filtering and Search

The Projects section includes three filter buttons: All Projects, Development, and UI/UX Design, along with a search field.

Each project card is assigned a category using the HTML `data-category` attribute. The filter buttons use `data-filter` to identify the selected category.

JavaScript listens for button clicks and search input events to update the displayed projects without reloading the page.

The `updateProjects()` function combines two conditions:

- **Category filtering:** Checks whether the project matches the selected category.
- **Text searching:** Uses `toLowerCase()` and `includes()` to check whether the project title or description contains the search keyword.

A project is displayed only when both conditions are satisfied. Otherwise, it is hidden using the `hidden` property.

The selected filter button is updated using the `active` class and `aria-pressed` attribute.

This allows users to search and filter projects together while keeping the interface responsive to their actions.

## 4. Empty-State Feedback

JavaScript counts the number of projects matching the selected category and search keyword.

If no projects match, the website displays a friendly message:

"No projects found. Try another keyword or category."

A Clear Search button allows users to reset both the search input and selected category filter.

This ensures that users receive feedback instead of seeing an empty Projects section without explanation.

## 5. Data Handling and State Management

The website uses JavaScript to handle user interactions and input data.

The dark/light theme feature uses `localStorage` to save the selected theme. When the page loads, JavaScript retrieves the saved preference and applies the appropriate CSS class.

The contact form also processes user input by reading and trimming field values before validation.

These features demonstrate basic data handling and state management without requiring a backend or external API.

## 6. Contact Form Validation and User Feedback

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

## 7. Animations and Transitions

The website uses CSS transitions and animations to improve the user experience.

Project cards use a short fade-in animation when the selected filter or search results change. The effect combines opacity and slight vertical movement to make content updates smoother.

The contact form success message also uses a subtle fade-in effect.

Existing hover effects are applied to project cards, navigation links, buttons, and social icons. Smooth scrolling is used when navigating between sections.

Animations are kept short and subtle to avoid distracting users. The project animation respects the `prefers-reduced-motion` setting.

## 8. Responsive Design

The website uses CSS Grid and Flexbox to organize content across different screen sizes.

Two main responsive breakpoints are used:

- **800px:** The Projects and Contact layouts change to a single column.
- **550px:** Navigation, typography, spacing, project images, and form dimensions are adjusted for mobile devices.

The responsive rules are organized in `responsive.css`, keeping them separate from the main design and interactive component styles.

## 9. Accessibility and Code Quality

The website uses semantic HTML elements, descriptive image alternative text, and labels connected to form fields.

Accessibility attributes such as `aria-label`, `aria-describedby`, `aria-invalid`, `aria-live`, and `aria-pressed` are used to improve communication with assistive technologies.

The JavaScript code is organized into sections for form validation, theme switching, and project filtering/search.

CSS variables are used to maintain consistent colors, and comments identify important parts of the implementation.

## 10. Testing and Verification

The following tests should be completed before submission:

| Feature | Test | Expected Result |
|---|---|---|
| Project Filtering | Select Development | Only RouteRepair is displayed |
| Project Filtering | Select UI/UX Design | Only KFUPM StudyVerse is displayed |
| Project Filtering | Select All Projects | Both project cards are displayed |
| Project Search | Search for "Route" | Only RouteRepair is displayed |
| Project Search | Search for "Study" | Only KFUPM StudyVerse is displayed |
| Project Search | Search for "networking" | RouteRepair is displayed |
| Empty State | Search for "xyz123" | No projects found message appears |
| Combined Filtering | Select Development and search for "Study" | Empty-state feedback appears |
| Clear Search | Click Clear Search | Search and category filter are reset |
| Form Validation | Enter invalid input | Relevant error messages appear |
| Real-time Feedback | Correct invalid input | The corresponding error disappears |
| Invalid Submission | Submit incomplete information | General error feedback appears |
| Valid Submission | Submit valid information | Confirmation appears and fields reset |
| Theme Toggle | Switch theme and refresh | Saved theme preference is restored |
| Responsive Design | Resize browser window | Layout adjusts to screen width |

These tests help verify that the new features work correctly and do not interfere with the functionality carried over from Assignment 1.

## 11. Improvements from Assignment 1

Assignment 1 focused on building the initial responsive portfolio with basic JavaScript interactions.

Assignment 2 extends this foundation by introducing project filtering, live project search, empty-state feedback, more detailed form validation, real-time user feedback, and additional animations.

The CSS was also reorganized into separate stylesheets to make future development and maintenance easier.

These improvements make the portfolio more interactive, user-friendly, and easier to extend in future assignments.