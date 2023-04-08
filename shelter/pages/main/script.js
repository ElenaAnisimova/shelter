

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

// console.log("Итого: 100/100");




// SLIDER
import { petsDescription } from "../../assets/pet-info.js"
// console.log(petsDescription[6].name)

const slider = document.querySelector('.slider-visible-wrapper')
const sliderPartOne = document.querySelector('.slider-part-zero');
const sliderPartTwo = document.querySelector('.slider-part-one');
const sliderPartThree = document.querySelector('.slider-part-two');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
// const animalCards = document.querySelectorAll('.card-container');
// const animalCardsArray = [...document.querySelectorAll('.card-container')];

//              RANDOMAIZER
const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let randomNumbersArr = shuffleArr(numbers);
// console.log(randomNumbersArr);

// APPEND SLIDER ITEMS
let petImagesOne;
let petNamesOne;
function addPetsCardsOne() {
  sliderPartOne.innerHTML = '';
  for (let i = 3; i < 6; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card"
    sliderPartOne.append(sliderCard);

    petImagesOne = document.createElement('img');
    petImagesOne.className = "pet-img"
    sliderCard.append(petImagesOne);
    petImagesOne.style.backgroundImage = `url(${(petsDescription[randomNumbersArr[i]].img)})`;

    petNamesOne = document.createElement('div');
    petNamesOne.className = "pet-name paragraph-20"
    sliderCard.append(petNamesOne);
    petNamesOne.innerHTML = petsDescription[randomNumbersArr[i]].name;

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

    // const answerText = document.createElement('span');
    // answerText.innerHTML = birdsData[levelCounter][i].name;
    // answerOption.append(answerText);
  };
};

addPetsCardsOne();

function addPetsCardsTwo() {
  // sliderPartTwo.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card"
    sliderPartTwo.append(sliderCard);

    const petImage = document.createElement('img');
    petImage.className = "pet-img"
    sliderCard.append(petImage);
    petImage.style.backgroundImage = `url(${(petsDescription[randomNumbersArr[i]].img)})`;

    const petName = document.createElement('div');
    petName.className = "pet-name paragraph-20"
    sliderCard.append(petName);
    petName.innerHTML = petsDescription[randomNumbersArr[i]].name

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
  };
};
addPetsCardsTwo();


function addPetsCardsThree() {
  sliderPartThree.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card"
    sliderPartThree.append(sliderCard);

    const petImage = document.createElement('img');
    petImage.className = "pet-img"
    sliderCard.append(petImage);
    petImage.style.backgroundImage = `url(${(petsDescription[randomNumbersArr[i]].img)})`;

    const petName = document.createElement('div');
    petName.className = "pet-name paragraph-20"
    sliderCard.append(petName);
    petName.innerHTML = petsDescription[randomNumbersArr[i]].name

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

  };
};
addPetsCardsThree();
let currentArr;
let theRestNumbersArr;

function fillCardsContentOnLoad(n, arr) {
  console.log(currentSliderPart);
  console.log(slider.children[currentSliderPart]);

  // if (currentSliderPart === 0) {
  // console.log(slider.children[currentSliderPart + 2].previousElementSibling);

  slider.children[n].innerHTML = '';
  for (let i = 0; i < 3; i++) {

    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card"
    slider.children[n].append(sliderCard);

    const petImage = document.createElement('img');
    petImage.className = "pet-img"
    sliderCard.append(petImage);
    petImage.style.backgroundImage = `url(${(petsDescription[arr[i]].img)})`;

    const petName = document.createElement('div');
    petName.className = "pet-name paragraph-20"
    sliderCard.append(petName);
    petName.innerHTML = petsDescription[arr[i]].name

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

// MOVE SLIDER 

let currentSliderPart = 1;
let direction;
console.log(currentSliderPart);
function makeArray(arr) {
  currentArr = [];
  for (var i = 0; i < 3; i++) {
    currentArr.push(randomNumbersArr[i])
  }
  // console.log(currentArr);
  const s = new Set(currentArr);
  let newArr = arr.slice(3, 8).filter(e => !s.has(e));
  return newArr;
}

arrowRight.addEventListener('click', function () {
  console.log(currentSliderPart);
  // for (var i = sliderPartOne.children.length; i >= 0; i--) 
  if (currentSliderPart > 0) {
    currentSliderPart--
  } else { currentSliderPart = 2 }


  randomNumbersArr = shuffleArr(numbers);
  theRestNumbersArr = makeArray(randomNumbersArr);
  fillCardsContentOnLoad(0, theRestNumbersArr);


  // addPetsCardsOne();
  // addPetsCardsThree();
  direction = "right";
  slider.style.transform = 'translate(33.33%';
  slider.style.transitionDuration = "1s"
  // console.log(randomNumbersArr);
});

arrowLeft.addEventListener('click', function () {
  if (currentSliderPart < 2) {
    currentSliderPart++
  } else { currentSliderPart = 0 };

  randomNumbersArr = shuffleArr(numbers);
  theRestNumbersArr = makeArray(randomNumbersArr);
  fillCardsContentOnLoad(2, theRestNumbersArr);

  direction = "left";
  slider.style.transform = 'translate(-33.33%';
  slider.style.transitionDuration = "1s"
});


slider.addEventListener('transitionend', function () {
  if (direction === "right") {
    slider.prepend(slider.lastElementChild);
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function () {
      slider.style.transition = 'all 1s';
    })
  } else if (direction === "left") {
    slider.appendChild(slider.firstElementChild);
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function () {
      slider.style.transition = 'all 1s';
    })

  }
});