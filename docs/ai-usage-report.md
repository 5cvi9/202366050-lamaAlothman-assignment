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

## 1. Tools Used & Use Cases

I used ChatGPT as an AI-assisted development tool while improving my personal portfolio for Assignment 2. My goal was to introduce interactive features while maintaining the design and structure developed in Assignment 1.

ChatGPT supported several parts of the development process:

- **Dynamic Content:** Helped me implement project filtering using JavaScript event listeners and HTML data attributes.
- **Project Search:** Provided guidance on adding live search and combining it with category filtering through a shared JavaScript function.
- **Error Handling:** Helped me implement empty-state feedback and a Clear Search button when no projects match.
- **Form Validation:** Provided explanations and suggestions for validating user input and displaying real-time error messages.
- **Animations:** Helped me implement subtle fade-in effects for project cards and form feedback.
- **Code Organization:** Assisted with separating the original CSS into three files for better maintainability.
- **Testing and Documentation:** Helped me review features, plan test cases, organize Git commits, and prepare documentation.

I reviewed these suggestions to understand how the new functionality worked with the existing portfolio.

## 2. Benefits & Challenges

One of the main benefits of using ChatGPT was understanding how HTML, CSS, and JavaScript work together to create interactive features.

For example, project filtering required adding category attributes in HTML, styling buttons in CSS, and using JavaScript to update the visible project cards.

Adding project search introduced another challenge because searching and filtering needed to work together. AI assistance helped me understand how to combine both conditions in the `updateProjects()` function rather than using separate functions that could interfere with each other.

AI was also helpful when improving form validation and user feedback. It helped me understand how to validate different types of input, display errors, and update feedback as the user corrects information.

As the project grew, I also reorganized the CSS into separate files to make the code easier to read and maintain.

One challenge was deciding which AI suggestions were appropriate for the assignment. Some suggestions introduced unnecessary complexity, so I reviewed the requirements before deciding what to implement.

I also needed to check that new features worked correctly with existing functionality, including theme switching, form validation, and responsive design.

## 3. Learning Outcomes

Through Assignment 2, I improved my understanding of JavaScript event listeners, DOM manipulation, conditional logic, and dynamic content updates.

I learned how to use HTML `data-*` attributes to categorize project cards and how JavaScript can filter content based on user selections.

Implementing live project search helped me understand how `toLowerCase()`, `trim()`, and `includes()` can be used to process search input and match text.

I also learned how to combine multiple conditions using logical operators so that project filtering and searching work together.

Improving the contact form helped me understand regular expressions, input validation, error handling, and real-time feedback.

In addition, I gained experience with CSS animations, transitions, accessibility attributes, and organizing code into separate stylesheets.

Overall, this assignment helped me understand how to extend an existing website while keeping its features consistent and maintainable.

## 4. Responsible Use & Modifications

I reviewed AI-generated suggestions before including them in the project and tested the implemented features to confirm that they behaved as expected.

For project filtering, I checked that each category button displayed the correct projects. For project search, I tested different keywords and combinations of search terms and categories.

I also checked the empty-state behavior by searching for keywords that did not match any project and using the Clear Search button to restore the default view.

For the contact form, I tested invalid names, invalid email addresses, empty messages, and valid submissions. I also checked that error messages updated as the input was corrected.

I modified suggestions based on my preferences and project requirements. For example, I changed the contact form confirmation message to make it shorter and clearer for a demonstration website.

I initially considered postponing project search to a later assignment, but after reviewing the functionality already implemented, I decided to add it to Assignment 2 as an additional interactive feature.

ChatGPT was used as a supporting tool for explanations, code review, problem-solving, and documentation. I made decisions about which suggestions to include based on the assignment requirements and the results of testing.