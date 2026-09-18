# Brandon Holda: BUDT748 website

Live website: https://bmh-code57.github.io/budt748-website/

Repository: https://github.com/BMH-code57/budt748-website

A three-page client-side technology project for Fall 2026. The visual style uses a deep green-black background, lime accents, Montserrat typography, and consistent page navigation.

## Open the site

Open `index.html` in a browser, or open this folder in VS Code and use the Live Server extension. All fonts and Bootstrap files are included locally. There is no build step or package installation.

## Files

```text
index.html                 Home
about.html                 About
contact.html               Contact
css/styles.css             Shared styles and Home layout
css/styles2.css             About styles
css/styles3.css             Contact styles
css/fonts.css              Local Montserrat font definitions
js/site.js                 Contact form validation and draft preparation
images/                    Original vector assets
fonts/                     Montserrat fonts and OFL license
vendor/bootstrap/          Official Bootstrap 5.3.8 CSS, JS bundle, license
.nojekyll                  Publish these files directly with GitHub Pages
```

## Tutorial requirements

Primary source: **BUDT748_Fall2026_ClientSideTechTutorial.pdf**, Dr. Shapiro, 11 pages.

| Requirement | Implementation |
| --- | --- |
| Three connected pages (pages 1, 7) | `index.html`, `about.html`, `contact.html` |
| Personalized header | Brandon Holda appears in the header on all pages and links to Home |
| Home hero, subtitle, Get Started button (pages 4–5) | Centered Home hero; lime button opens About |
| About course description and professor/TA details (pages 5–6) | Tutorial BMGT407 course description and all four teaching-team members |
| Contact title, supporting text, professor/TA emails (pages 6–7) | Contact introduction, all four email links, recipient selector |
| Separate CSS files and images folder (page 7) | Shared `styles.css`, `styles2.css`, `styles3.css`, and `images/` |
| Responsive styles and interactions (pages 8–9) | Mobile layouts, focus styles, hover styles, reduced-motion support |
| Bootstrap CSS, navbar, grid, buttons, form controls (pages 9–11) | Local official Bootstrap CSS and JS; real collapse navbar; rows/columns; buttons; cards; form controls and validation |
| Correct page links | All links use exact lowercase filenames, including `index.html` |
| Figma frames and export/conversion (pages 2–7) | **Pending Figma access.** The HTML was authored directly; it has not been exported from Figma or generated with AutoHTML |
| GitHub push and Pages deployment (page 11) | Completed: files committed on main and published at https://bmh-code57.github.io/budt748-website/. All three live pages verified |

The tutorial contains conflicting sample semesters (Spring 2025 and Spring 2027). The assignment semester is shown as Fall 2026. BMGT407 information and teaching-team contacts are labeled as tutorial examples; the site does not assert that these TAs are the current BUDT748 teaching team.

## Bootstrap integration

This site uses the official Bootstrap **5.3.8** distribution. The tutorial demonstrates Bootstrap 5.3.0; this site uses a newer release in the same 5.3 family. Bootstrap is loaded before the custom CSS. The JavaScript bundle is loaded on every page, which is necessary for the mobile collapse menu.

Files are served locally instead of using the CDN, so the site works without an external network connection. The distribution retains its upstream MIT license. Its default blockquote attribution separator has been customized to omit the em dash.

## Contact form behavior

The form checks required fields, rejects whitespace-only names/subjects/messages, and validates email syntax. It prepares a properly encoded `mailto:` link for the selected teaching-team member. The visitor explicitly opens their email app and sends the draft themselves.

The site has no backend and never claims a message has been sent. Editing a field hides the old draft status. Direct email links remain available without JavaScript.

## GitHub Pages deployment

Repository: https://github.com/BMH-code57/budt748-website. Place the contents of this folder in its root, commit, and push. Preserve any existing repository files unless replacement is agreed.

In **Settings → Pages**, choose **Deploy from a branch**, select the branch containing the site (normally `main`), choose **/ (root)**, and save. The Pages URL for a project repository normally has the form `https://OWNER.github.io/REPOSITORY/`.

Do not submit an assumed URL. Wait for the Pages deployment to succeed and check all three live pages before recording the live link.

Official references: [Bootstrap integration](https://getbootstrap.com/docs/5.3/getting-started/introduction/) and [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
