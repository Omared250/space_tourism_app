# space_tourism_app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Navigate the page easily and intuitively
- Click on the explorer button that will take you to the different destinations
- Click on any of the navigation options in the menu, each of these options will take you to a more detailed page of them
- Click inside the destinations page where you can find destinations like the moon and more
- Know more about the technology that will accompany each trip
- Learn more about the crew that will accompany each trip and that will be there to support all travelers

### Screenshot

![Design](https://github.com/Omared250/space_tourism_app/blob/master/src/design/home_page.png)

### Links

- Solution URL: [https://github.com/Omared250/space_tourism_app]
- Live Site URL: [https://omared250.github.io/space_tourism_app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design
- [Vanilla JS]
- [Architecture - MVC]

### What I learned

This project taught me a lot about how to make a page that can be adjusted to the size of the device used by the user. I made several checks with
friends and acquaintances to see if it worked in all of them in the same way, I can say that thanks to this I was able to find some errors. and to be
able to work on them, I can also say that it is not 100% complete or perfect but I have worked a lot on it, I have been able to work with more confidence
with JS than in previous projects.

```js proud-of-this:
const updateDest = function (dest, arr, handler) {
  const destn = dest
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

  view.cleaner();
  destination.renderDestination(arr.filter((d) => d.name === destn));
  handler();
};
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)
