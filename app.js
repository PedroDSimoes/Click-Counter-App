const clickSound = new Audio('click.mp3');
const resetSound = new Audio('reset.mp3');

const button = document.getElementById("click-button");
const countEl = document.getElementById("count");
const resetEl = document.getElementById("reset-button")
const styleLink = document.querySelector("#style-link");
const h4 = document.querySelector('h4');

const waterLink = document.getElementById("water-link");
const coffeeLink = document.getElementById("coffee-link");
const wineLink = document.getElementById("wine-link");
const beerLink = document.getElementById("beer-link")

let count = localStorage.getItem("count") || 0;
let style = "styles.css";

updateCount();

button.addEventListener('click', function() {
    count++;

    updateCount();
    saveCount();
    clickSound.play();
});

resetEl.addEventListener('click', function() {
    count = 0;

    updateCount();
    saveCount();
    resetSound.play();
});


function updateCount() {
    countEl.textContent = count.toString();
}

function saveCount() {
    localStorage.setItem("count", count);
}

waterLink.addEventListener("click", function(event) {
    event.preventDefault();
    style = "style_water.css";
    updateStyle();
    h4.textContent = `Make sure to get 8 clicks a day!`
});

coffeeLink.addEventListener("click", function(event) {
    event.preventDefault();
    style = "style_coffee.css";
    updateStyle();
    h4.textContent = `Click it at least once to help you maintain your sunny personality!`
});

wineLink.addEventListener("click", function(event) {
    event.preventDefault();
    style = "style_wine.css";
    updateStyle();
    h4.textContent = `Doctors say 2 clicks a day is healthy for you! `
});

beerLink.addEventListener("click", function(event) {
    event.preventDefault();
    style = "style_beer.css";
    updateStyle();
    h4.textContent = `1 click = 1 chug! `
});

function updateStyle() {
    styleLink.setAttribute("href", style);
}

updateStyle();

