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

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers5 = [0, 1, 2, 3, 4, 5, 6, 7];
const numbers6 = [0, 1, 2, 3, 4, 5, 6, 7];

const numbers61 = [0, 1, 2, 3, 4, 5];
const numbers62 = [6, 7, 0, 1, 2, 3];
const numbers63 = [4, 5, 6, 7, 0, 1];
const numbers64 = [2, 3, 4, 5, 6, 7];
const numbers65 = [0, 1, 2, 3, 4, 5];
const numbers66 = [6, 7, 0, 1, 2, 3];
const numbers67 = [4, 5, 6, 7, 0, 1];
const numbers68 = [2, 3, 4, 5, 6, 7];


const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let randomArrays = [];
function makeRandomArrays() {
  let animalsArray = [];
  let arr1 = shuffleArr(numbers1);
  let arr2 = shuffleArr(numbers2);
  let arr3 = shuffleArr(numbers3);
  let arr4 = shuffleArr(numbers4);
  let arr5 = shuffleArr(numbers5);
  let arr6 = shuffleArr(numbers6);

  let arr61 = shuffleArr(numbers61);
  let arr62 = shuffleArr(numbers62);
  let arr63 = shuffleArr(numbers63);
  let arr64 = shuffleArr(numbers64);
  let arr65 = shuffleArr(numbers65);
  let arr66 = shuffleArr(numbers66);
  let arr67 = shuffleArr(numbers67);
  let arr68 = shuffleArr(numbers68);


  randomArrays.push(arr1, arr2, arr3, arr4, arr5, arr6);
  // console.log(randomArrays);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      animalsArray.push(petsDescription[randomArrays[i][j]])
    }
  };

  // if (window.innerWidth < 1270 && window.innerWidth >= 640) {
  //   randomArrays.push(arr61, arr62, arr63, arr64, arr65, arr66, arr67, arr68)
  // }
  return animalsArray
}
const animals = makeRandomArrays()
console.log(animals);

function slice(array) {
  // 
  const chunkSize = 8;
  let r = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    r.push(array.slice(i, i + chunkSize));
  }
  return r;
}
let animals2D = slice(animals)
// console.log(slice(animals));



// APPEND PAGES 
let cardNumber;
let pageNumber;

function appendSliderPages() {
  // if (window.innerWidth >= 1271) {
  pageNumber = 6;
  cardNumber = 8;
  // }
  // if (window.innerWidth < 1270 && window.innerWidth >= 640) {
  //   pageNumber = 8;
  //   cardNumber = 6;
  // }
  // if (window.innerWidth < 640) {
  //   pageNumber = 16;
  //   cardNumber = 3;
  // }

  for (let i = 0; i < pageNumber; i++) {
    const sliderPage = document.createElement('div');
    sliderPage.className = "slider-page";
    slider.append(sliderPage);
    for (let j = 0; j < cardNumber; j++) {
      const sliderCard = document.createElement('div');
      sliderCard.className = "slider-card";
      sliderPage.append(sliderCard);
      if (animals2D[i][j].name === "Jennifer") {
        sliderCard.className = "slider-card jennifer";
      }
      if (animals2D[i][j].name === "Woody") {
        sliderCard.className = "slider-card woody";
      }
      if (animals2D[i][j].name === "Charly") {
        sliderCard.className = "slider-card charly";
      }
      if (animals2D[i][j].name === "Freddie") {
        sliderCard.className = "slider-card freddie";
      }
      if (animals2D[i][j].name === "Jennifer") {
        sliderCard.className = "slider-card jennifer";
      }
      if (animals2D[i][j].name === "Timmy") {
        sliderCard.className = "slider-card timmy";
      }
      if (animals2D[i][j].name === "Scarlett") {
        sliderCard.className = "slider-card scarlett";
      }
      if (animals2D[i][j].name === "Sophia") {
        sliderCard.className = "slider-card sophia";
      }
      if (animals2D[i][j].name === "Katrine") {
        sliderCard.className = "slider-card katrine";
      }

      const petImage = document.createElement('img');
      petImage.className = "pet-img"
      sliderCard.append(petImage);
      petImage.style.backgroundImage = `url(${(animals2D[i][j].img)})`;

      const petName = document.createElement('div');
      petName.className = "pet-name paragraph-20"
      sliderCard.append(petName);
      petName.innerHTML = animals2D[i][j].name;

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
// window.addEventListener('resize', appendSliderPages);

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




// POP UP 

const section = document.querySelector(".section-our-friends");
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


popUpImage.style.background = `url(${(petsDescription[0].img)})`;
popUpImage.style.backgroundSize = "cover";
popUpImage.style.backgroundRepeat = "no-repeat";
const allCards = document.querySelectorAll('.slider-card');
let petItem;


petType.innerHTML = petsDescription[0].type + " - " + petsDescription[0].breed;
petInfo.innerHTML = petsDescription[0].description;
age.innerHTML = petsDescription[0].age;
vaccines.innerHTML = petsDescription[0].inoculations;
diseases.innerHTML = petsDescription[0].diseases;
parasites.innerHTML = petsDescription[0].parasites;
// function definePet () {

// }
const sliderP = document.querySelector('.visible')
slider.addEventListener('click', (e) => {

  console.log(event.target.classList);
  if (e.target.classList.contains('timmy')) {
    petItem = 6
  } else petItem = 0;

  popUpPetName.innerHTML = petsDescription[petItem].name;
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



