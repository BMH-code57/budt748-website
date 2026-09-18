# Brandon Holda: BUDT748 website

A three-page website for BUDT748 Fall 2026, based on Dr. Shapiro's Client-Side Technology Tutorial.

- [Live website](https://bmh-code57.github.io/budt748-website/)
- [GitHub repository](https://github.com/BMH-code57/budt748-website)
- [Editable Figma design](https://www.figma.com/design/PeztrXUaCcjbeFy3fRZXaY/Brandon-Holda---BUDT748-Website-Design)

## Figma design and conversion

The Figma file contains native editable Landing Page, About Page, and Contact Page frames. All three are 1440px wide and 1024px high, with a 12-column grid, 80px margins, and 20px gutters. Headers display Brandon Holda, with Homepage, About, and Contact navigation.

Home follows the tutorial's Montserrat 60px bold heading, 32px subtitle, 30px spacing, and lime #A8FF35 button sized 180 by 57px with 10px corners and a drop shadow. About includes the tutorial's BMGT407 course description, professor, teaching assistants, and Spring 2027 semester. Contact was personalized after conversion to show Brandon Holda at bholda@umd.edu, with an email-draft form addressed only to Brandon.

Each frame was converted separately using **AutoHTML | Components to Code**. The downloaded generated HTML and CSS were used as the starting point for the published pages. The exports' layout and class names are retained. The files were renamed to the tutorial's structure, fonts were connected to local Montserrat files, and semantic headings and functional links were added.

The untouched original ZIPs are preserved in [design/autohtml](design/autohtml). The published HTML is formatted for convenient editing in VS Code.

The tutorial's numbered instructions specify Spring 2027, while its illustration shows Spring 2025. This project follows the numbered instruction and labels the semester as tutorial sample information. The assignment footer says BUDT748 Fall 2026.

## Project structure

```text
index.html                   Home, converted from Landing Page
about.html                   About, converted from About Page
contact.html                 Contact, converted from Contact Page
css/styles.css               Generated Home CSS, normalized font families
css/styles2.css              Generated About CSS, normalized font families
css/styles3.css              Generated Contact CSS, normalized font families
css/responsive.css           Bootstrap integration and responsive refinements
css/fonts.css                Local Montserrat font definitions
images/                      Website assets and design exports
js/site.js                   Contact form validation and email draft preparation
fonts/                       Montserrat fonts and license
vendor/bootstrap/            Bootstrap 5.3.8 CSS, JS bundle, and license
.nojekyll                    GitHub Pages static publishing configuration
```

## Bootstrap and responsive behavior

Every page loads Bootstrap before its generated CSS and custom refinements, and includes the Bootstrap JavaScript bundle. The navbar uses `navbar-expand-lg` with a working collapse toggle. Contact cards and form fields use Bootstrap rows, columns, cards, buttons, form controls, validation feedback, and an alert.

Bootstrap 5.3.8 is included locally so the website works offline. The tutorial demonstrates 5.3.0, and the implementation remains within the same 5.3 family. Licenses are included.

Responsive refinements replace fixed frame heights with flexible page heights, allow text and cards to fit small screens, and correct clipped contact-card content. Keyboard focus and a skip link are available. Navigation remains accessible without JavaScript.

## Contact form

The form validates required fields and email syntax, then prepares an encoded email draft to Brandon Holda at bholda@umd.edu. The visitor reviews and sends it in their email app. The static site has no backend and does not claim to send messages. Direct email links also work without JavaScript.

## Open in VS Code

Open this folder with **File > Open Folder**. There is no installation or build step. Open `index.html` in your browser, or use the VS Code Live Server extension. The HTML, CSS, fonts, and Bootstrap files are all included.

## Testing and deployment

All three pages were checked at 320, 375, 768, 1024, and 1440px. Checks cover headings, personalized branding, active links, Bootstrap loading, mobile menu opening and closing, horizontal overflow, all nine navigation combinations, Get Started, contact validation, the fixed Brandon Holda recipient, and rendering without JavaScript.

GitHub Pages publishes the repository's `main` branch from `/ (root)`. The live URL and repository URL above are the assignment links.
