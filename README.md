# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Main rating Page](https://kappa.lol/E0McO)
![Active states](https://kappa.lol/1DxRt)
![Thank you page](https://kappa.lol/8w_cM)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- How to use the forEach class in Javascript
```
rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.textContent = rate.textContent;
  })
});
```
- Use IDs for interactions with Javascript

### Continued development

- Setting the positions and paddings as near as the screenshots is very difficult and with just guessing the right pixels/REMs is just a waste of time for me. You get the exact sizes and spacing when downloading the Figma sketches but I can't download them because I am not a 'Pro' member.

### Useful resources

- [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - See [What I Learned](#what-i-learned) for an example.

## Author

- Frontend Mentor - [@vrlclk](https://www.frontendmentor.io/profile/vrlclk)
- GitHub - [@vrlclk](https://www.github.com/vrlclk)