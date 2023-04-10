//     PAGINATION AND SLIDER 
import { petsDescription } from "../../assets/pet-info.js"

const slider = document.querySelector('.slider-visible-wrapper');
const firstPageButton = document.querySelector('.back-button.double-back');
const previousPageButton = document.querySelector('.back-button.back');
const currentPage = document.querySelector('.button-text.page-number');
const nextPageButton = document.querySelector('.next-page');
const lastPageButton = document.querySelector('.double-next-page');
const backButtonsText = document.querySelectorAll('.back-buttons-text');
const nextButtonsText = document.querySelectorAll('.next-buttons-text');

// RANDOMIZER 

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers5 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers6 = [0, 1, 2, 3, 4, 5, 6, 7];

const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let randomArrays = [];
function makeRandomArrays() {
  let arr1 = shuffleArr(numbers1);
  let arr2 = shuffleArr(numbers2);
  let arr3 = shuffleArr(numbers3);
  let arr4 = shuffleArr(numbers4);
  let arr5 = shuffleArr(numbers5);
  let arr6 = shuffleArr(numbers6);
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
      if (j === 0) { sliderCard.className = "slider-card zero"; }
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

// MOVE SLIDER 

// FIRST PAGE DEFAULT SETTINGS 
let i = 0;
slider.children[i].classList.add('visible');
currentPage.innerHTML = i + 1;
nextPageButton.classList.add("active-button");
lastPageButton.classList.add("active-button");
for (const span of backButtonsText) {
  span.classList.add("disabled-button-text")
};

// CHANGE PAGES FUNCTIONS 

function nextPage() {
  slider.children[i].classList.remove('visible');
  i++;
  slider.children[i].classList.add('visible');
  currentPage.innerHTML = i + 1;
  if (i >= 5) {
    lastPageButton.disabled = true;
    nextPageButton.disabled = true;
    lastPageButton.classList.remove("active-button");
    nextPageButton.classList.remove("active-button");
    for (const span of nextButtonsText) {
      span.classList.add("disabled-button-text")
    }
  }
  if (i > 0) {
    firstPageButton.disabled = false;
    previousPageButton.disabled = false;
    firstPageButton.classList.add("active-button");
    previousPageButton.classList.add("active-button");
    for (const span of backButtonsText) {
      span.classList.remove("disabled-button-text")
    }
  }
}

nextPageButton.addEventListener('click', function () {
  nextPage();
  console.log(i);
});

function previousPage() {
  slider.children[i].classList.remove('visible');
  i--;
  slider.children[i].classList.add('visible');
  currentPage.innerHTML = i + 1;
  if (i < 1) {
    firstPageButton.disabled = true;
    previousPageButton.disabled = true;
    firstPageButton.classList.remove("active-button");
    previousPageButton.classList.remove("active-button");
    for (const span of backButtonsText) {
      span.classList.add("disabled-button-text")
    }
  }
  if (i < 5) {
    lastPageButton.disabled = false;
    nextPageButton.disabled = false;
    lastPageButton.classList.add("active-button");
    nextPageButton.classList.add("active-button");
    for (const span of nextButtonsText) {
      span.classList.remove("disabled-button-text")
    }
  }
}

previousPageButton.addEventListener('click', function () {
  previousPage();
  console.log(i);
});

function lastPage() {
  slider.children[i].classList.remove('visible');
  i = 5;
  slider.children[i].classList.add('visible');
  currentPage.innerHTML = i + 1;
  
  firstPageButton.disabled = false;
  previousPageButton.disabled = false;
  firstPageButton.classList.add("active-button");
  previousPageButton.classList.add("active-button");
  for (const span of backButtonsText) {
    span.classList.remove("disabled-button-text")
  }

  lastPageButton.disabled = true;
  nextPageButton.disabled = true;
  lastPageButton.classList.add("active-button");
  nextPageButton.classList.add("active-button");
  for (const span of nextButtonsText) {
    span.classList.add("disabled-button-text")
  }
}


lastPageButton.addEventListener('click', function () {
  lastPage()
  console.log(i);
});

function firstPage() {
  slider.children[i].classList.remove('visible');
  i = 0;
  slider.children[i].classList.add('visible');
  currentPage.innerHTML = i + 1;

  firstPageButton.disabled = true;
  previousPageButton.disabled = true;
  firstPageButton.classList.add("active-button");
  previousPageButton.classList.add("active-button");
  for (const span of backButtonsText) {
    span.classList.add("disabled-button-text")
  }
  lastPageButton.disabled = false;
  nextPageButton.disabled = false;
  lastPageButton.classList.add("active-button");
  nextPageButton.classList.add("active-button");
  for (const span of nextButtonsText) {
    span.classList.remove("disabled-button-text")
  }
}

firstPageButton.addEventListener('click', function () {
  firstPage()
  console.log(i);
});


