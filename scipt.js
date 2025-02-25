"use strict";
// getting the HTML DOM elements
const colorOne = document.querySelector('.colorOne');
const colorTwo = document.querySelector('.colorTwo');
const body = document.getElementById('gradient');

const headerThree = document.querySelector('h3');
// ends here

// function that changes the background
const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
    headerThree.textContent = body.style.background + ";";
}

// used the event lisrener to  change the gradient
colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);