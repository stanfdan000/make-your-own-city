// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const pickClimate = document.getElementById('climate-select');
const climatesPic = document.getElementById('climate');
const climateImg = document.getElementById('climates');
console.log(climatesPic);
console.log(pickClimate);
const places = document.getElementById('select-structures');
const buildings = document.getElementById('structures');
const picTown = document.getElementById('towns');


const sloganType = document.getElementById('slogan-input');
const sloganBut = document.getElementById('slogan-button');
const sloganLi = document.getElementById('slogan-list');

let catchphrases = [];
let climateCounter = 0;
let structuresCounter = 0;

climatesPic.addEventListener('change', () => {
  
    climateCounter++;
    climateImg.src = `./assets/${climatesPic.value}.jpg`;
    pickClimate.style.backgroundImage = `url('./assets/${climatesPic.value}.jpg')`;
    console.log(climatesPic);
});

places.addEventListener('change', () => {
    structuresCounter++;
    picTown.src = `./assets/${places.value}.jpg'`;
    buildings.style.backgroundImage = `url('./assets/${places.value}.jpg')`;

});

 


