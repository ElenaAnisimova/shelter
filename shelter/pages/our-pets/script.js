// BURGER MENU

const burgerOpenButton = document.querySelector('.burger-open-button');
const openMenu = document.querySelector('.burger-menu-container');
const burgerLinks = document.querySelectorAll('.burger-list-item');
const popup = document.querySelector('.pop-up-background');

burgerOpenButton.addEventListener('click', () => {
  openMenu.classList.toggle('burger-menu_active');
  popup.classList.toggle('appearing');
  burgerOpenButton.classList.toggle('burger-icon_active');
  document.body.classList.toggle('no-scroll');
});

if (window.innerWidth < 767.2) {
  for (let i = 0; i < burgerLinks.length; i += 1) {
    burgerLinks[i].addEventListener('click', () => {
      openMenu.classList.toggle('burger-menu_active');
      popup.classList.toggle('appearing');
      burgerOpenButton.classList.toggle('burger-icon_active');
      document.body.classList.toggle('no-scroll')
    })
  }
};

popup.addEventListener('click', (e) => {
  if (e.target.classList.contains('pop-up-background')) {
    openMenu.classList.toggle('burger-menu_active');
    popup.classList.toggle('appearing');
    burgerOpenButton.classList.toggle('burger-icon_active');
    document.body.classList.toggle('no-scroll')
  }
})


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

const numbers1 = [0, 1, 2, 3]
const numbers2 = [4, 5, 6, 7];
const numbers1_1 = [0, 1, 2, 3]
const numbers2_1 = [4, 5, 6, 7];
const numbers1_2 = [0, 1, 2, 3]
const numbers2_2 = [4, 5, 6, 7];

const numbers1_3 = [0, 1, 4, 7]
const numbers2_3 = [2, 3, 5, 6];
const numbers1_4 = [0, 1, 4, 7]
const numbers2_4 = [2, 3, 5, 6];
const numbers1_5 = [0, 1, 4, 7]
const numbers2_5 = [2, 3, 5, 6];


const numbers3 = [5, 6, 7, 3]
const numbers4 = [1, 2, 0, 4];
const numbers3_1 = [5, 6, 7, 3]
const numbers4_1 = [1, 2, 0, 4];
const numbers3_2 = [5, 6, 7, 3]
const numbers4_2 = [1, 2, 0, 4];

const numbers3_3 = [0, 1, 2, 5]
const numbers4_3 = [4, 3, 7, 6];
const numbers3_4 = [0, 1, 2, 5]
const numbers4_4 = [4, 3, 7, 6];
const numbers3_5 = [0, 1, 2, 5]
const numbers4_5 = [4, 3, 7, 6];

const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let randomArrays = [];
function makeRandomArrays() {
  let animalsArray = [];
  let arr1 = shuffleArr(numbers3);
  let arr2 = shuffleArr(numbers4);
  let arr3 = shuffleArr(numbers3_1);
  let arr4 = shuffleArr(numbers4_1);
  let arr5 = shuffleArr(numbers3_2);
  let arr6 = shuffleArr(numbers4_2);
  let arr7 = shuffleArr(numbers3_3);
  let arr8 = shuffleArr(numbers4_3);
  let arr9 = shuffleArr(numbers3_4);
  let arr10 = shuffleArr(numbers4_4);
  let arr11 = shuffleArr(numbers3_5);
  let arr12 = shuffleArr(numbers4_5);

  let arr1_1 = shuffleArr(numbers1);
  let arr2_1 = shuffleArr(numbers2);
  let arr3_1 = shuffleArr(numbers1_1);
  let arr4_1 = shuffleArr(numbers2_1);
  let arr5_1 = shuffleArr(numbers1_2);
  let arr6_1 = shuffleArr(numbers2_2);
  let arr7_1 = shuffleArr(numbers1_3);
  let arr8_1 = shuffleArr(numbers2_3);
  let arr9_1 = shuffleArr(numbers1_4);
  let arr10_1 = shuffleArr(numbers2_4);
  let arr11_1 = shuffleArr(numbers1_5);
  let arr12_1 = shuffleArr(numbers2_5);

  let lotteryNumbers = [0, 1];
  let numForRandom = shuffleArr(lotteryNumbers)[0];
  console.log(numForRandom);
  if (numForRandom == 0) {

    randomArrays.push(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12);
  } else if (numForRandom == 1) {
    randomArrays.push(arr1_1, arr2_1, arr3_1, arr4_1, arr5_1, arr6_1, arr7_1, arr8_1, arr9_1, arr10_1, arr11_1, arr12_1)
  }
  console.log(randomArrays.flat());
  for (let i = 0; i < 48; i++) {
    animalsArray.push(petsDescription[randomArrays.flat()[i]])
  };

  return animalsArray
}
const animals = makeRandomArrays();
console.log(animals);


function slice(array) {

  const chunkSize = 8;
  let r = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    r.push(array.slice(i, i + chunkSize));
  }
  return r;
}
const animals2D = slice(animals);
// console.log(animals2D);


// APPEND PAGES 
let cardNumber;


function appendSliderPages() {
  cardNumber = 48;
  for (let j = 0; j < cardNumber; j++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card";
    slider.append(sliderCard);

    if (animals[j].name === "Woody") {
      sliderCard.className = "slider-card woody";
      const elements = document.querySelectorAll('.woody *');
      elements.forEach((element) => {
        element.classList.add('woody');
      });
    }
    if (animals[j].name === "Charly") {
      sliderCard.className = "slider-card charly";
      const elements = document.querySelectorAll('.charly *');
      elements.forEach((element) => {
        element.classList.add('charly');
      });
    }
    if (animals[j].name === "Freddie") {
      sliderCard.className = "slider-card freddie";
      const elements = document.querySelectorAll('.freddie *');
      elements.forEach((element) => {
        element.classList.add('freddie');
      });
    }
    if (animals[j].name === "Jennifer") {
      sliderCard.className = "slider-card jennifer";
      const elements = document.querySelectorAll('.jennifer *');
      elements.forEach((element) => {
        element.classList.add('jennifer');
      });
    }
    if (animals[j].name === "Timmy") {
      sliderCard.className = "slider-card timmy";
      const elements = document.querySelectorAll('.timmy *');
      elements.forEach((element) => {
        element.classList.add('timmy');
      });
    }
    if (animals[j].name === "Scarlett") {
      sliderCard.className = "slider-card scarlett";
      const elements = document.querySelectorAll('.scarlett *');
      elements.forEach((element) => {
        element.classList.add('scarlett');
      });
    }
    if (animals[j].name === "Sophia") {
      sliderCard.className = "slider-card sophia";
      const elements = document.querySelectorAll('.sophia *');
      elements.forEach((element) => {
        element.classList.add('sophia');
      });
    }
    if (animals[j].name === "Katrine") {
      sliderCard.className = "slider-card katrine";
      const elements = document.querySelectorAll('.katrine *');
      elements.forEach((element) => {
        element.classList.add('katrine');
      });
    }

    const petImage = document.createElement('img');
    petImage.className = "pet-img"
    sliderCard.append(petImage);
    petImage.style.backgroundImage = `url(${(animals[j].img)})`;

    const petName = document.createElement('div');
    petName.className = "pet-name paragraph-20"
    sliderCard.append(petName);
    petName.innerHTML = animals[j].name;

    const formLearn = document.createElement('form');
    formLearn.className = "buttons form_learn-more"
    sliderCard.append(formLearn);

    const buttonLearn = document.createElement('button');
    buttonLearn.className = "button_learn-more button"
    buttonLearn.type = "button";
    formLearn.append(buttonLearn);

    const spanLearn = document.createElement('span');
    spanLearn.className = "button-text"
    spanLearn.innerHTML = "Learn more"
    buttonLearn.append(spanLearn);
    // }
  }
}
appendSliderPages();
// window.addEventListener('resize', appendSliderPages);

// MOVE SLIDER 

// FIRST PAGE DEFAULT SETTINGS 
let i = 0;
let page;
// slider.children[i].classList.add('visible');
currentPage.innerHTML = i + 1;
nextPageButton.classList.add("active-button");
lastPageButton.classList.add("active-button");
for (const span of backButtonsText) {
  span.classList.add("disabled-button-text")
};

// CHANGE PAGES FUNCTIONS 
let position;
function defineSliderStep() {
  if (window.innerWidth >= 1268) {
    position = 1233.3 * i;
    page = 5;
  }
  if (window.innerWidth < 1268 && window.innerWidth >= 640) {
    position = 615 * i;
    page = 7;
  }
  if (window.innerWidth < 640) {
    position = 307.5 * i;
    page = 15;
  }
  return position
}
window.addEventListener('resize', defineSliderStep)
defineSliderStep();
function nextPage() {

  i++;

  defineSliderStep();
  slider.style.transform = 'translate(' + -position + 'px';
  currentPage.innerHTML = i + 1;
  if (i >= page) {
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
});

function previousPage() {
  i--;
  currentPage.innerHTML = i + 1;
  defineSliderStep();
  slider.style.transform = 'translate(' + -position + 'px';
  if (i < 1) {
    firstPageButton.disabled = true;
    previousPageButton.disabled = true;
    firstPageButton.classList.remove("active-button");
    previousPageButton.classList.remove("active-button");
    for (const span of backButtonsText) {
      span.classList.add("disabled-button-text")
    }
  }
  if (i < page) {
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
});




function lastPage() {
  i = page;
  defineSliderStep();
  slider.style.transform = 'translate(' + -position + 'px';
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
});

function firstPage() {
  i = 0;
  defineSliderStep();
  slider.style.transform = 'translate(' + -position + 'px';
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
});




// POP UP 

const popUpImage = document.querySelector(".pop-up-image");
const popUpPetName = document.querySelector(".pop-up-pet-name");
const petType = document.querySelector(".pet-type");
const petInfo = document.querySelector(".pet-desription");
const age = document.querySelector(".pet-age.popup-list-item");
const vaccines = document.querySelector(".pet-vaccines.popup-list-item");
const diseases = document.querySelector(".pet-diseases.popup-list-item");
const parasites = document.querySelector(".pet-parasites.popup-list-item");
const closePopup = document.querySelector(".pop-up-close-button");
const openPopUpCont = document.querySelector('.pop-up-container');
const popupBack = document.querySelector('.pop-up-back');



let petItem;

slider.addEventListener('click', (e) => {
  if (e.target.classList.contains('jennifer')) {
    petItem = 0;
  } else if (e.target.classList.contains('sophia')) {
    petItem = 1;
  } else if (e.target.classList.contains('woody')) {
    petItem = 2;
  } else if (e.target.classList.contains('scarlett')) {
    petItem = 3;
  } else if (e.target.classList.contains('katrine')) {
    petItem = 4;
  } else if (e.target.classList.contains('timmy')) {
    petItem = 5;
  } else if (e.target.classList.contains('freddie')) {
    petItem = 6;
  } else if (e.target.classList.contains('charly')) {
    petItem = 7;
  }

  // DEFINE POPUP PET 

  popUpImage.style.backgroundSize = "cover";
  popUpImage.style.backgroundRepeat = "no-repeat";
  popUpImage.style.backgroundImage = `url(${(petsDescription[petItem].img)})`;
  popUpPetName.innerHTML = petsDescription[petItem].name;
  petType.innerHTML = petsDescription[petItem].type + " - " + petsDescription[petItem].breed;
  petInfo.innerHTML = petsDescription[petItem].description;
  age.innerHTML = petsDescription[petItem].age;
  vaccines.innerHTML = petsDescription[petItem].inoculations;
  diseases.innerHTML = petsDescription[petItem].diseases;
  parasites.innerHTML = petsDescription[petItem].parasites;
  openPopUpCont.classList.toggle('appear');
  popupBack.classList.toggle('appearing-block');
  document.body.classList.toggle('no-scroll');
});

closePopup.addEventListener('click', () => {
  openPopUpCont.classList.toggle('appear');
  popupBack.classList.toggle('appearing-block');
  document.body.classList.toggle('no-scroll');
});



popupBack.addEventListener('click', (e) => {
  if (e.target.classList.contains('pop-up-back')) {
    openPopUpCont.classList.toggle('appear');
    popupBack.classList.toggle('appearing-block');
    document.body.classList.toggle('no-scroll');
  }
})



