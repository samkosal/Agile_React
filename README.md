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
As a User who is interested in the artist in this record label website, I want a short bio for each artist the yput out  so that users looking at the artist can access artist info easily.

As a User who using the phone to view the website. I want to be able see every important thing that a user on a computer would see on this website. so that mobile user can easily access all the information easily on a smaller screen.



## step 2:

Given I am on the label's homepage, when the page loads, then all artists are displayed with their (links to their social), description of the artist,Name, Merch of the artist, songs/album.

Given I view the page on a phone screen (~375px wide). when the page loads,Then each artist info card will collapse when it detects a smaller screen. The user could scroll down to view more artist. (no horizontal scrolling).

Given I am viewing a specific artist card, when a user clicks a certian link of their socials. Then it will take the user to an external website that they wanted to go.

## step 3:

# User Story Feedback
## Story 1: Artist Bio
Format: Correct.

User Specificity: Vague. "User who is interested in the artist" is broad. Consider if this is a "Fan," a "Music Journalist," or a "Booking Agent," as their needs for info might differ.

Goal: Mixed. While it describes user needs, it is becoming a "laundry list" of features (merch, songs, bio, name) rather than a single cohesive goal.

Reason: Vague filler. "Access artist info easily" essentially repeats the goal. Why do they need this info? Is it to decide to buy a ticket? To follow them on social media?

## Story 2: Mobile View
Format: Correct.

User Specificity: Vague. "User who using the phone" describes the device, but not the persona or their intent.

Goal: Implementation-focused. "See every important thing" is a requirement for parity, but a user story should focus on the value of being able to browse on the go or in a specific context.

Reason: Vague filler. "Access all the information easily" is a generic statement that doesn't explain the underlying benefit of mobile access.

# Acceptance Criteria Feedback
## Criterion 1: Artist Display
Format: Correct.

Specificity: Issues with measurable specifics. The list of items in the "Then" statement is broad ("etc."). A test cannot verify "etc." You need to define exactly which links must be present to pass the test.

Observable Outcome: Correct.

## Criterion 2: Mobile Responsiveness
Format: Correct.

Specificity: Vague language. "Artist info card will collapse" is a bit ambiguous. Does it collapse into an accordion? Does it stack vertically? You should specify the expected layout behavior. Also, "detects a smaller screen" describes the logic, whereas the test should focus on the visual result at that width.

Observable Outcome: Correct.

## Criterion 3: Social Links
Format: Correct.

Specificity: Vague language. "A certain link" and "website that they wanted to go" are not testable. A tester wouldn't know which link to click or which URL to verify. You need to specify a representative example (e.g., "the Instagram icon") and the expected destination behavior.

Observable Outcome: Correct.

General Advice for Improvement
When you revise these, try to put yourself in the shoes of a Quality Assurance (QA) tester. If a tester reads your Acceptance Criteria and has to ask you, "Which link should I click?" or "What counts as 'working'?", the criteria are not specific enough yet. Use hard numbers, specific button names, and clear "Why" statements.


App
  reads data.json directly
  renders: label header, then ArtistList

ArtistList
  receives: the artists array as a prop
  renders: one ArtistCard per artist

ArtistCard
  receives: a single artist object as a prop
  renders: name, genre, bio, then one AlbumItem per album

AlbumItem
  receives: a single album object as a prop
  renders: the album title and year