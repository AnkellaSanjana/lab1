# Rock, Paper, Scissors Game

This is a simple web-based Rock, Paper, Scissors game. In this README, I will explain my design choices and how CSS was used to realize those changes.

## Design Choices:

### 1. Game Structure:

- I designed the game to have a centered layout using Flexbox, making it visually appealing and easy to play.
- The game consists of two images representing player 1 and player 2, a "Play" button, and a result text.

### 2. Images:

- Images for player 1 and player 2 are loaded from the "img" folder and are initially set to "scissor.png."
- On each play, the images change based on random numbers generated using JavaScript.
- I've added a margin of 10px between the images to improve their spacing.

### 3. Responsive Design:

- To make the game responsive, I utilized CSS Media Queries.
- When the screen width is less than 768px (e.g., on mobile devices), the image size is reduced to 100px, and the button's font size is adjusted for better mobile usability.

## CSS Usage:

### 1. External CSS:

- I separated the CSS code into an external "style.css" file for better code organization and maintainability.
- The CSS file is linked in the HTML file's `<head>` section.

### 2. CSS for Styling:

- CSS was used to style various elements in the game:
  - Fonts, colors, and background for the body.
  - Styling for the "Play" button to make it visually appealing.
  - Margins added between the images for better spacing.
  - Responsive design adjustments using Media Queries.
