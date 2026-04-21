# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# NOTES

## step 1:
As a User who is interested in the artist in this record label website, I want a short bio for each artist (links to their social), description of the artist,Name, Merch of the artist, songs/album the yput out  so that users looking at the artist can access artist info easily.

As a User who using the phone to view the website. I want to be able see every important thing that a user on a computer would see on this website. so that mobile user can easily access all the information easily on a smaller screen.



A user story tells you what to build. Acceptance criteria tell you when it's done.

Acceptance criteria make "done" specific and testable. "It works" and "it looks good on mobile" are subjective judgements that two people on a team will interpret differently. A well-written criterion is something you can check with a concrete yes or no.

The format uses three parts, Given / When / Then.

Given sets the starting state (where the user is, what conditions exist)
When describes the action the user takes
Then describes the observable result
Here's an example for the artist browsing story from above:

Given I am on the label's homepage, when the page loads, then all artists are displayed with their name, genre, and bio visible.

Given I view the page on a screen 375px wide, when the page loads, then the artist cards stack vertically and all text remains readable without horizontal scrolling.

Each criterion is a test you can actually run. Either the text is readable at 375px or it isn't. Either every artist shows their genre or it doesn't.

## step 2:

Given I am on the label's homepage, when the page loads, then all artists are displayed with their name, genre, and bio visible (Links to their social, songs, merch, etc.).

Given I view the page on a phone screen (~375px wide). when the page loads,Then each artist info card will collapse when it detects a smaller screen. The user could scroll down to view more artist. (no horizontal scrolling).

Given I am viewing a specific artist card, when a user clicks a certian link of their socials. Then it will take the user to an external website that they wanted to go.


