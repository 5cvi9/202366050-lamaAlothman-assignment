# AI Usage Report — Assignment 2

## 1. Tools Used & Use Cases

I used ChatGPT as an AI-assisted development tool while improving my personal portfolio for Assignment 2. My main goal was to understand how to introduce more interactive features while maintaining the structure and design developed in Assignment 1.

ChatGPT supported several parts of the development process:

- **Dynamic Content:** Helped me understand and implement project filtering using JavaScript event listeners and HTML `data-category` attributes.
- **Form Validation:** Provided explanations and suggestions for validating user input, displaying field-specific error messages, and updating feedback while users type.
- **Animations and Transitions:** Helped me implement subtle fade-in animations for project cards and form feedback without making the website distracting.
- **Code Organization:** Assisted with separating the original CSS file into `styles.css`, `components.css`, and `responsive.css` to improve readability and maintainability.
- **Code Review and Testing:** Helped me identify possible implementation issues and plan tests for the new interactive features.
- **Documentation and Git:** Provided guidance on meaningful commits and organizing the README and technical documentation.

I used these suggestions as guidance and reviewed the code to understand how the new features worked with the existing portfolio.

## 2. Benefits & Challenges

One of the main benefits of using ChatGPT was understanding how HTML, CSS, and JavaScript work together to create interactive features. For example, implementing project filtering required adding category attributes in HTML, styling the filter buttons in CSS, and using JavaScript to update the displayed project cards.

AI assistance was also useful when improving the contact form. It helped me understand how to validate different types of user input, display errors for invalid fields, and provide feedback when the user corrects the information.

Another benefit was improving code organization. As the project grew, I decided to separate the CSS into three files rather than continuing to add everything to one large stylesheet.

However, I faced some challenges. Not every AI suggestion was appropriate for the current assignment, and some features would have introduced unnecessary complexity.

For example, project search and external API integration were discussed as possible improvements. After comparing the requirements for Assignments 2 and 3, I decided to postpone these features and focus on dynamic content, validation, and user feedback.

I also needed to verify that the new code worked correctly with the existing portfolio, including checking stylesheet references and making sure that previously implemented features continued working.

## 3. Learning Outcomes

Through this assignment, I improved my understanding of JavaScript and interactive web development.

I learned how to use event listeners and DOM manipulation to respond to user actions without reloading the page. Project filtering helped me understand how `data-*` attributes and conditional logic can control which elements are displayed.

I also learned how to implement form validation using string methods, conditional statements, and regular expressions. Adding real-time validation helped me understand how JavaScript can provide immediate feedback and improve the user experience.

Working with animations helped me understand CSS `@keyframes`, transitions, and how small visual effects can make interactions smoother.

I also gained experience organizing CSS into separate files and using accessibility attributes such as `aria-pressed`, `aria-invalid`, and `aria-live` to communicate interface changes.

Overall, this assignment helped me understand how to extend an existing website while keeping its functionality, design, and code structure consistent.

## 4. Responsible Use & Modifications

I reviewed AI-generated suggestions before including them in the project and tested the implemented features to confirm that they behaved as expected.

For project filtering, I tested the All Projects, Development, and UI/UX Design buttons to verify that the correct project cards were displayed.

For the contact form, I tested different input cases, including short names, invalid email addresses, empty messages, and valid submissions. I also checked that error messages disappeared when the input was corrected.

I made modifications to the suggested implementation based on my preferences and project requirements. For example, I changed the contact form confirmation message to make it shorter and clearer for a demonstration website.

I also decided not to implement every suggested feature. Project search and API integration were postponed because they were not required for Assignment 2 and could be introduced as more advanced functionality in a later assignment.

These decisions helped me use AI responsibly by reviewing its suggestions, understanding the implementation, and selecting features that matched the assignment requirements. ChatGPT supported my learning and problem-solving process, while the final implementation decisions were based on my project goals and testing.