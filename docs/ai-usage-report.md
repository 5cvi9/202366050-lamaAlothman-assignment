# AI Usage Report — Assignment 2

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