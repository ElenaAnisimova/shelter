//     PAGINATION AND SLIDER 
import { petsDescription } from "../../assets/pet-info.js"

const slider = document.querySelector('.slider-visible-wrapper');
const firstPageButton = document.querySelector('.double-back');
const previousPageButton = document.querySelector('.back');
const currentPage = document.querySelector('.page-number');
const nextPageButton = document.querySelector('.next-page');
const lastPageButton = document.querySelector('.double-next-page');

// RANDOMIZER 

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers5 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers6 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers7 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers8 = [0, 1, 2, 3, 4, 5, 6, 7];

const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

// let randomNumbersArr = shuffleArr(numbers);
let randomNumbersArr

// let arr3;
// let arr4;
// let arr5;
// let arr6;
// let arr7;
// let arr8;

let randomArrays = [];
function makeRandomArrays() {
  let arr1 = shuffleArr(numbers1);
  let arr2 = shuffleArr(numbers2);
  let arr3 = shuffleArr(numbers3);
  let arr4 = shuffleArr(numbers4);
  let arr5 = shuffleArr(numbers5);
  let arr6 = shuffleArr(numbers6);
  let arr7 = shuffleArr(numbers7);
  let arr8 = shuffleArr(numbers8);
  randomArrays.push(arr1, arr2, arr3, arr4, arr5, arr6)
  return randomArrays
}

console.log(makeRandomArrays());



// APPEND PAGES 

function appendSliderPages() {
  for (let i = 0; i < 6; i++) {
    const sliderPage = document.createElement('div');
    sliderPage.className = "slider-page";
    slider.append(sliderPage);
    for (let j = 0; j < 8; j++) {
      const sliderCard = document.createElement('div');
      sliderCard.className = "slider-card";
      sliderPage.append(sliderCard);

      const petImage = document.createElement('img');
      petImage.className = "pet-img"
      sliderCard.append(petImage);
      petImage.style.backgroundImage = `url(${(petsDescription[randomArrays[i][j]].img)})`;

      const petName = document.createElement('div');
      petName.className = "pet-name paragraph-20"
      sliderCard.append(petName);
      petName.innerHTML = petsDescription[randomArrays[i][j]].name;

      const formLearn = document.createElement('form');
      formLearn.className = "buttons form_learn-more"
      sliderCard.append(formLearn);

      const buttonLearn = document.createElement('button');
      buttonLearn.className = "button_learn-more button"
      formLearn.append(buttonLearn);

      const spanLearn = document.createElement('span');
      spanLearn.className = "button-text"
      spanLearn.innerHTML = "Learn more"
      buttonLearn.append(spanLearn);
    }
  }
}

appendSliderPages();

