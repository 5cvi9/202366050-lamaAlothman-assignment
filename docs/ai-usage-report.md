# AI Usage Report — Assignment 2

## AI Usage Log

The following log summarizes how ChatGPT (GPT-6) assisted with Assignment 2 development on October 12, 2026, with an additional documentation update on October 19, 2026.

| ID | Tool (model) | Date | Purpose | Files affected | What I changed and how I verified it |
|---|---|---|---|---|---|
| A01 | ChatGPT (GPT-6) | 2026-10-12 | Assignment planning and requirements review | Project planning, `README.md` | Reviewed the requirements for Assignments 2 and 3 and selected features appropriate for Assignment 2. |
| A02 | ChatGPT (GPT-6) | 2026-10-12 | Project filtering and dynamic content | `index.html`, `css/components.css`, `js/script.js` | Added category attributes and filter buttons. Tested that Development, UI/UX Design, and All Projects displayed the correct cards. |
| A03 | ChatGPT (GPT-6) | 2026-10-12 | CSS organization and responsive design | `index.html`, `css/styles.css`, `css/components.css`, `css/responsive.css` | Separated styles into three CSS files and checked the stylesheet references and layout. |
| A04 | ChatGPT (GPT-6) | 2026-10-12 | Contact form validation and feedback | `index.html`, `css/components.css`, `js/script.js` | Implemented validation rules, error messages, and success feedback. Tested invalid and valid submissions. |
| A05 | ChatGPT (GPT-6) | 2026-10-12 | Real-time validation | `css/components.css`, `js/script.js` | Added validation during input events. Tested that errors appeared for invalid values and disappeared after correction. |
| A06 | ChatGPT (GPT-6) | 2026-10-12 | Animations and debugging | `css/components.css`, `js/script.js` | Added fade-in effects and corrected the animation class mismatch from `animate__animate` to `filter-animate`. |
| A07 | ChatGPT (GPT-6) | 2026-10-12 | Project search and empty-state feedback | `index.html`, `css/components.css`, `js/script.js` | Combined searching with category filtering and added an empty-state message and reset button. |
| A08 | ChatGPT (GPT-6) | 2026-10-12 | Documentation and code review | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` | Revised the documentation to describe the implemented features and reviewed it against the assignment rubric. |
| A09 | ChatGPT (GPT-6) | 2026-10-12 | Full-page dark mode improvement | `css/styles.css`, `css/components.css` | Extended dark-mode styling to additional sections and components. |
| A10 | ChatGPT (GPT-6) | 2026-10-19 | AI usage declaration and reporting | `docs/ai-usage-report.md` | Prepared the usage log and declaration based on the assignment instructions. |


## AI Usage Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Lama Alothman  
**Student ID:** 202366050  
**Date:** 2026-10-19  
**Signature:** Lama Alothman

---
## Git Commit History & AI Assistance

The following table summarizes the Git commits made during Assignment 2. ChatGPT (GPT-6) was used to assist with code suggestions, debugging, explanations, documentation, and Git workflow guidance. The changes were reviewed and tested during development.

The commands below show the corresponding Git commit commands. They are included for documentation and do not necessarily represent the exact commands originally typed in the terminal.

| ID | Date | Git Commit Message | AI Tool (Model) | AI Assistance |
|---|---|---|---|---|
| C0027816 | 2026-10-12 | Organize CSS into modular stylesheets and Add interactive project filtering | ChatGPT (GPT-6) | CSS organization and project filtering |
| C9d679f4 | 2026-10-12 | Improve contact form validation and feedback | ChatGPT (GPT-6) | Input validation and user feedback |
| Cc2bba54 | 2026-10-12 | Add smooth animations for projects and form feedback | ChatGPT (GPT-6) | CSS animations and transitions |
| C917d515 | 2026-10-12 | Add real-time validation and error feedback | ChatGPT (GPT-6) | Real-time form validation |
| C863ac82 | 2026-10-12 | Add Readme | ChatGPT (GPT-6) | README organization |
| C928a162 | 2026-10-12 | Update technical documentation for Assignment 2 | ChatGPT (GPT-6) | Technical documentation |
| C3072dec | 2026-10-12 | Document AI usage for Assignment 2 | ChatGPT (GPT-6) | AI usage documentation |
| Ce8c6e3d | 2026-10-12 | Fix project filter fade-in animation | ChatGPT (GPT-6) | Animation debugging and correction |
| C59f7e98 | 2026-10-12 | Add project search and empty state feedback | ChatGPT (GPT-6) | Project search and empty-state handling |
| C7fcf9a1 | 2026-10-12 | Update README with project search feature | ChatGPT (GPT-6) | README feature updates |
| Cf828fd3 | 2026-10-12 | Document project search and empty state behavior | ChatGPT (GPT-6) | Search documentation |
| C449c3f2 | 2026-10-12 | Update AI usage report for project search | ChatGPT (GPT-6) | AI usage reporting |
| C6fdeac0 | 2026-10-12 | Update README | ChatGPT (GPT-6) | README review and improvements |
| C4a3f85a | 2026-10-12 | Update README with project search feature | ChatGPT (GPT-6) | README refinements |
| C021ed66 | 2026-10-12 | Document project search and empty state behavior | ChatGPT (GPT-6) | Technical documentation refinements |
| Ccf8a467 | 2026-10-12 | Update AI usage report for project search | ChatGPT (GPT-6) | AI report refinements |
| C854f59c | 2026-10-19 | Extend dark mode styling across entire portfolio Assisted by: ChatGPT (GPT-6) | ChatGPT (GPT-6) | Full-page dark mode improvement |
| Cf50e119 | 2026-10-19 | Add AI usage log and signed declaration | ChatGPT (GPT-6) | AI usage log and declaration |
| C5aee1cd | 2026-10-19 | Expand AI usage reflection and technical learning outcomes | ChatGPT (GPT-6) | Expanded AI reflection and learning outcomes |


## 1. Tools Used & Use Cases

I used ChatGPT (GPT-6) as an AI-assisted development tool throughout Assignment 2 to help me improve my personal portfolio website. Since this assignment builds on Assignment 1, my main goal was to introduce new interactive features while keeping the existing website structure, visual design, and functionality consistent.

I used ChatGPT for explanations, code suggestions, debugging, code review, testing guidance, and documentation. The main use cases were:

- **Dynamic Content and Project Filtering:** ChatGPT helped me understand how to implement interactive project filtering using HTML `data-category` and `data-filter` attributes, JavaScript event listeners, and DOM manipulation. The feature allows visitors to display all projects or select a specific category without reloading the page.

- **Live Project Search:** I used ChatGPT to help implement a search field that filters projects as the user types. It also helped me understand how to combine search functionality with the existing category filters using the `updateProjects()` function, allowing both features to work together.

- **Error Handling and User Feedback:** ChatGPT provided suggestions for handling situations where no projects match the selected category or search keyword. This led to the implementation of an empty-state message and a Clear Search button that allows users to return to the default project view.

- **Contact Form Validation:** ChatGPT helped me improve the contact form by adding validation for the name, email, and message fields. It also assisted with implementing real-time validation, field-specific error messages, visual error indicators, and confirmation feedback.

- **Animations and Transitions:** I used ChatGPT to explore simple CSS animations that could improve the user experience without making the website distracting. This included fade-in animations for project cards and form feedback, as well as reviewing the interaction between JavaScript classes and CSS selectors.

- **Dark and Light Mode:** ChatGPT helped me review the existing theme toggle and explore improvements to make the theme more consistent across different sections of the portfolio, including navigation, project cards, and form elements.

- **Code Organization:** As the website became more interactive, the original CSS file became longer. ChatGPT assisted me in organizing the styles into three files: `styles.css` for the main design, `components.css` for interactive components, and `responsive.css` for media queries.

- **Code Review, Testing, and Documentation:** I used ChatGPT to review code, identify possible issues, understand Git commands, plan meaningful commits, and prepare the README, technical documentation, and AI usage report.

I reviewed the suggested solutions and considered whether they matched the assignment requirements and the design of my portfolio before including them.

## 2. Benefits & Challenges

Using ChatGPT during Assignment 2 helped me understand the implementation of interactive web features and made it easier to approach problems step by step.

One of the main benefits was receiving explanations about how HTML, CSS, and JavaScript work together. For example, implementing project filtering involved defining categories in HTML, designing interactive buttons in CSS, and writing JavaScript logic to show or hide project cards. ChatGPT helped me understand the purpose of each part and how they connect.

Another benefit was improving my problem-solving process. When I added project search, I needed to make sure that searching and category filtering worked together correctly. Rather than treating them as completely separate features, I used a shared `updateProjects()` function that checks both conditions before deciding which project cards to display. This helped keep the logic organized and avoid conflicting behavior.

AI assistance was also useful for improving user feedback. In Assignment 1, the contact form only displayed a simple confirmation message. In Assignment 2, I improved it by adding field-specific validation, real-time feedback, and a general error message for invalid submissions. ChatGPT helped explain how to use event listeners, conditional statements, and input values to implement these improvements.

However, using AI also introduced challenges.

One challenge was that AI-generated suggestions did not always match the existing code. For example, during the implementation of project animations, the JavaScript class name did not match the CSS selector. The JavaScript used `animate__animate`, while the CSS expected `filter-animate`. After reviewing the code, I corrected the mismatch so the animation could work properly.

Another challenge was deciding which features were necessary. ChatGPT suggested different possibilities, including additional interactive features and API integration. I compared these suggestions with the requirements of Assignments 2 and 3 before deciding which features to implement.

Maintaining consistency was also important. As I introduced new components and separated the CSS into multiple files, I needed to make sure the original navigation, theme toggle, project layout, and contact form continued working correctly.

These challenges helped me understand that AI-generated code should not be accepted automatically. It is important to review suggestions, identify possible problems, and test the results.

## 3. Learning Outcomes

Through Assignment 2 and the use of ChatGPT, I improved my understanding of several web development concepts and gained more experience extending an existing website.

**JavaScript and DOM Manipulation**

I learned how JavaScript can respond to user interactions and update webpage content without requiring a page reload. Through project filtering, I practiced using event listeners, selecting HTML elements, reading custom data attributes, and changing element visibility.

**Search Functionality and Conditional Logic**

Implementing live project search helped me understand how JavaScript string methods such as `trim()`, `toLowerCase()`, and `includes()` can be used to process user input and compare it with existing content.

I also learned how logical operators can combine multiple conditions. In my project, a card is displayed only when it matches both the selected category and the search keyword. This helped me understand how multiple interactive features can share the same logic.

**Form Validation and User Feedback**

I gained a better understanding of validating user input before processing a form. I learned how to use regular expressions for basic email validation, check string lengths, and prevent whitespace-only input.

I also learned the difference between validation during form submission and real-time validation while the user types. Providing immediate feedback makes it easier for visitors to identify and correct mistakes.

**CSS Animations and Responsive Design**

Working with CSS animations helped me understand how `@keyframes`, opacity, transforms, and transitions can create smoother interactions.

I also improved my understanding of responsive layouts and the role of media queries in adjusting a website for different screen sizes.

**Theme Management and Local Storage**

I developed a better understanding of how JavaScript and CSS work together to manage dark and light themes. I also reviewed how `localStorage` can save a user's selected preference and restore it after refreshing the page.

**Code Organization and Development Workflow**

Separating the CSS into multiple files helped me understand the importance of organizing code based on responsibility. This makes the project easier to maintain and extend as new features are introduced.

I also gained more experience using Git commands, writing meaningful commit messages, and testing changes before pushing them to GitHub.

Overall, the most important lesson I learned was how to build on an existing project while maintaining its structure and functionality. I also became more aware of the importance of understanding and testing AI-generated suggestions instead of relying on them without review.

## 4. Responsible Use & Modifications

I used ChatGPT as a supporting tool during Assignment 2 and reviewed the suggested code and explanations before including them in my project. I focused on understanding how the features worked and checking whether they were appropriate for the assignment.

I made several decisions and modifications during development.

**Project Filtering and Search**

I tested the project filtering buttons to confirm that each category displayed the correct project cards. After adding live search, I checked that searching and filtering worked together.

I also tested the empty-state behavior by entering keywords that did not match any project. The Clear Search button was included to help users return to the default view instead of leaving the Projects section empty.

**Contact Form Validation**

I reviewed and tested the contact form validation using different inputs, including a one-character name, invalid email addresses, empty messages, and valid information.

I also tested the real-time feedback to confirm that error messages appeared for invalid inputs and disappeared after the user corrected them.

One modification I made was changing the confirmation message to:

"Your message is ready! This form is for demonstration only."

I preferred this message because it is shorter and makes it clear that the form does not send an actual email.

**Animation Debugging**

During code review, I identified a mismatch between the JavaScript class used to trigger the project animation and the corresponding CSS selector.

I corrected the class name from `animate__animate` to `filter-animate` so that the JavaScript and CSS referred to the same animation class.

This was an example of reviewing and correcting an implementation issue instead of assuming that the suggested code was already correct.

**Code Organization and Theme Improvements**

I organized the CSS into separate files to make the code easier to read and maintain. I also reviewed the theme styling to improve consistency between the different sections and interactive components.

These changes were intended to improve maintainability and the user experience while preserving the original portfolio design.

**Feature Selection and Assignment Requirements**

I did not implement every feature suggested during the development process.

For example, I initially considered postponing project search to Assignment 3. However, after reviewing the requirements, I decided to include it in Assignment 2 because live search was an appropriate example of dynamic content and improved the Projects section.

I also decided not to add external API integration at this stage because it is a major requirement of Assignment 3, where it can be implemented and documented as a separate improvement.

**Testing and Verification**

Throughout development, I checked the behavior of the new features using different inputs and user interactions. This included project filtering, searching, empty-state feedback, form validation, and theme switching.

I also reviewed the documentation to make sure it described the features implemented in the project.

Overall, I used ChatGPT to support learning, problem-solving, debugging, and documentation. I reviewed and adapted its suggestions based on the assignment requirements, my design preferences, and the results of testing. This helped me maintain responsibility for the final implementation and develop a better understanding of the code included in my portfolio.