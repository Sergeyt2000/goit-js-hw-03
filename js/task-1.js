'use strict';
function slugify(title) {
  const arrayFromTitle = title.split(" ");
  const arrayFromTitleLower = [];
  for (let i = 0; i < arrayFromTitle.length; i++) {
    arrayFromTitleLower.push(arrayFromTitle[i].toLowerCase());
  }
  return arrayFromTitleLower.join('-');
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"