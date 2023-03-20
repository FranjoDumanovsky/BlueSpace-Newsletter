"use strict";

const animElArray = document.querySelectorAll(".anim-el");

setTimeout(() => {}, 1000);

// for (let i = 0; i < animElArray.length; i++) {
//   console.log("Hello, World!");
// }

var delay = 0;

for (let i = 0; i < animElArray.length; i++) {
  addAnimationClass(i);
}

function addAnimationClass(i) {
  setTimeout(function () {
    animElArray[i].classList.add("anim-fade-in-right");
  }, 300 * delay);
  delay++;
}
