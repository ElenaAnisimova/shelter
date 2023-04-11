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

const slider = document.querySelector('.slider-visible-wrapper')
const sliderPartOne = document.querySelector('.slider-part-zero');
const sliderPartTwo = document.querySelector('.slider-part-one');
const sliderPartThree = document.querySelector('.slider-part-two');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

//              RANDOMAIZER
const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

const shuffleArr = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

let randomNumbersArr = shuffleArr(numbers);
console.log(randomNumbersArr);


function definePopupPet() {
  if (petsDescription[randomNumbersArr[i]].name === "Woody") {
    sliderCard.className = "slider-card woody";
    const elements = document.querySelectorAll('.woody *');
    elements.forEach((element) => {
      element.classList.add('woody');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Charly") {
    sliderCard.className = "slider-card charly";
    const elements = document.querySelectorAll('.charly *');
    elements.forEach((element) => {
      element.classList.add('charly');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Freddie") {
    sliderCard.className = "slider-card freddie";
    const elements = document.querySelectorAll('.freddie *');
    elements.forEach((element) => {
      element.classList.add('freddie');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Jennifer") {
    sliderCard.className = "slider-card jennifer";
    const elements = document.querySelectorAll('.jennifer *');
    elements.forEach((element) => {
      element.classList.add('jennifer');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Timmy") {
    sliderCard.className = "slider-card timmy";
    const elements = document.querySelectorAll('.timmy *');
    elements.forEach((element) => {
      element.classList.add('timmy');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Scarlett") {
    sliderCard.className = "slider-card scarlett";
    const elements = document.querySelectorAll('.scarlett *');
    elements.forEach((element) => {
      element.classList.add('scarlett');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Sophia") {
    sliderCard.className = "slider-card sophia";
    const elements = document.querySelectorAll('.sophia *');
    elements.forEach((element) => {
      element.classList.add('sophia');
    });
  }
  if (petsDescription[randomNumbersArr[i]].name === "Katrine") {
    sliderCard.className = "slider-card katrine";
    const elements = document.querySelectorAll('.katrine *');
    elements.forEach((element) => {
      element.classList.add('katrine');
    });
  }
}
// definePopupPet();

// APPEND SLIDER ITEMS

let cardNumber;
function addPetsCardsOne() {
  sliderPartOne.innerHTML = '';

  if (window.innerWidth >= 1280) {
    cardNumber = 3
  }
  if (window.innerWidth < 1279 && window.innerWidth >= 640) {
    cardNumber = 2
  }
  if (window.innerWidth < 640) {
    cardNumber = 1
  }
  for (let i = 0; i < cardNumber; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card";
    sliderPartOne.append(sliderCard);

    const petImage = document.createElement('img');
    petImage.className = "pet-img"
    sliderCard.append(petImage);
    petImage.style.backgroundImage = `url(${(petsDescription[randomNumbersArr[i]].img)})`;

    const petName = document.createElement('div');
    petName.className = "pet-name paragraph-20"
    sliderCard.append(petName);
    petName.innerHTML = petsDescription[randomNumbersArr[i]].name;

    const formLearn = document.createElement('form');
    formLearn.className = "buttons form_learn-more"
    sliderCard.append(formLearn);

    const buttonLearn = document.createElement('button');
    buttonLearn.className = "button_learn-more button";
    buttonLearn.type = "button";
    formLearn.append(buttonLearn);

    const spanLearn = document.createElement('span');
    spanLearn.className = "button-text"
    spanLearn.innerHTML = "Learn more"
    buttonLearn.append(spanLearn);

    if (petsDescription[randomNumbersArr[i]].name === "Woody") {
      sliderCard.className = "slider-card woody";
    }
    if (petsDescription[randomNumbersArr[i]].name === "Charly") {
      sliderCard.className = "slider-card charly";
      const elements = document.querySelectorAll('.charly *');
      elements.forEach((element) => {
        element.classList.add('charly');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Freddie") {
      sliderCard.className = "slider-card freddie";
      const elements = document.querySelectorAll('.freddie *');
      elements.forEach((element) => {
        element.classList.add('freddie');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Jennifer") {
      sliderCard.className = "slider-card jennifer";
      const elements = document.querySelectorAll('.jennifer *');
      elements.forEach((element) => {
        element.classList.add('jennifer');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Timmy") {
      sliderCard.className = "slider-card timmy";
      const elements = document.querySelectorAll('.timmy *');
      elements.forEach((element) => {
        element.classList.add('timmy');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Scarlett") {
      sliderCard.className = "slider-card scarlett";
      const elements = document.querySelectorAll('.scarlett *');
      elements.forEach((element) => {
        element.classList.add('scarlett');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Sophia") {
      sliderCard.className = "slider-card sophia";
      const elements = document.querySelectorAll('.sophia *');
      elements.forEach((element) => {
        element.classList.add('sophia');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Katrine") {
      sliderCard.className = "slider-card katrine";
      const elements = document.querySelectorAll('.katrine *');
      elements.forEach((element) => {
        element.classList.add('katrine');
      });
    }
  };
};

addPetsCardsOne();

function addPetsCardsTwo() {
  sliderPartTwo.innerHTML = '';

  if (window.innerWidth >= 1280) {
    cardNumber = 3
  }
  if (window.innerWidth < 1279 && window.innerWidth >= 640) {
    cardNumber = 2
  }
  if (window.innerWidth < 640) {
    cardNumber = 1
  }
  for (let i = 0; i < cardNumber; i++) {
    randomNumbersArr[i]
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card";

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
    buttonLearn.className = "button_learn-more button";
    buttonLearn.type = "button";
    formLearn.append(buttonLearn);

    const spanLearn = document.createElement('span');
    spanLearn.className = "button-text"
    spanLearn.innerHTML = "Learn more"
    buttonLearn.append(spanLearn);
    if (petsDescription[randomNumbersArr[i]].name === "Woody") {
      sliderCard.className = "slider-card woody";
    }
    if (petsDescription[randomNumbersArr[i]].name === "Charly") {
      sliderCard.className = "slider-card charly";
      const elements = document.querySelectorAll('.charly *');
      elements.forEach((element) => {
        element.classList.add('charly');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Freddie") {
      sliderCard.className = "slider-card freddie";
      const elements = document.querySelectorAll('.freddie *');
      elements.forEach((element) => {
        element.classList.add('freddie');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Jennifer") {
      sliderCard.className = "slider-card jennifer";
      const elements = document.querySelectorAll('.jennifer *');
      elements.forEach((element) => {
        element.classList.add('jennifer');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Timmy") {
      sliderCard.className = "slider-card timmy";
      const elements = document.querySelectorAll('.timmy *');
      elements.forEach((element) => {
        element.classList.add('timmy');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Scarlett") {
      sliderCard.className = "slider-card scarlett";
      const elements = document.querySelectorAll('.scarlett *');
      elements.forEach((element) => {
        element.classList.add('scarlett');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Sophia") {
      sliderCard.className = "slider-card sophia";
      const elements = document.querySelectorAll('.sophia *');
      elements.forEach((element) => {
        element.classList.add('sophia');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Katrine") {
      sliderCard.className = "slider-card katrine";
      const elements = document.querySelectorAll('.katrine *');
      elements.forEach((element) => {
        element.classList.add('katrine');
      });
    }
  };
};
addPetsCardsTwo();


function addPetsCardsThree() {
  sliderPartThree.innerHTML = '';
  if (window.innerWidth >= 1280) {
    cardNumber = 3
  }
  if (window.innerWidth < 1279 && window.innerWidth >= 640) {
    cardNumber = 2
  }
  if (window.innerWidth < 640) {
    cardNumber = 1
  }

  for (let i = 0; i < cardNumber; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card";
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
    buttonLearn.className = "button_learn-more button";
    buttonLearn.type = "button";
    formLearn.append(buttonLearn);

    const spanLearn = document.createElement('span');
    spanLearn.className = "button-text"
    spanLearn.innerHTML = "Learn more"
    buttonLearn.append(spanLearn);

    if (petsDescription[randomNumbersArr[i]].name === "Woody") {
      sliderCard.className = "slider-card woody";
    }
    if (petsDescription[randomNumbersArr[i]].name === "Charly") {
      sliderCard.className = "slider-card charly";
      const elements = document.querySelectorAll('.charly *');
      elements.forEach((element) => {
        element.classList.add('charly');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Freddie") {
      sliderCard.className = "slider-card freddie";
      const elements = document.querySelectorAll('.freddie *');
      elements.forEach((element) => {
        element.classList.add('freddie');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Jennifer") {
      sliderCard.className = "slider-card jennifer";
      const elements = document.querySelectorAll('.jennifer *');
      elements.forEach((element) => {
        element.classList.add('jennifer');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Timmy") {
      sliderCard.className = "slider-card timmy";
      const elements = document.querySelectorAll('.timmy *');
      elements.forEach((element) => {
        element.classList.add('timmy');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Scarlett") {
      sliderCard.className = "slider-card scarlett";
      const elements = document.querySelectorAll('.scarlett *');
      elements.forEach((element) => {
        element.classList.add('scarlett');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Sophia") {
      sliderCard.className = "slider-card sophia";
      const elements = document.querySelectorAll('.sophia *');
      elements.forEach((element) => {
        element.classList.add('sophia');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Katrine") {
      sliderCard.className = "slider-card katrine";
      const elements = document.querySelectorAll('.katrine *');
      elements.forEach((element) => {
        element.classList.add('katrine');
      });
    }
  };
};
addPetsCardsThree();

window.addEventListener('resize', addPetsCardsOne)
window.addEventListener('resize', addPetsCardsTwo)
window.addEventListener('resize', addPetsCardsThree)

function fillCardsContentOnLoad(n, arr) {
  slider.children[n].innerHTML = '';

  for (let i = 0; i < cardNumber; i++) {
    const sliderCard = document.createElement('div');
    sliderCard.className = "slider-card";
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
    if (petsDescription[randomNumbersArr[i]].name === "Woody") {
      sliderCard.className = "slider-card woody";
      const elements = document.querySelectorAll('.woody *');
      elements.forEach((element) => {
        element.classList.add('woody');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Charly") {
      sliderCard.className = "slider-card charly";
      const elements = document.querySelectorAll('.charly *');
      elements.forEach((element) => {
        element.classList.add('charly');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Freddie") {
      sliderCard.className = "slider-card freddie";
      const elements = document.querySelectorAll('.freddie *');
      elements.forEach((element) => {
        element.classList.add('freddie');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Jennifer") {
      sliderCard.className = "slider-card jennifer";
      const elements = document.querySelectorAll('.jennifer *');
      elements.forEach((element) => {
        element.classList.add('jennifer');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Timmy") {
      sliderCard.className = "slider-card timmy";
      const elements = document.querySelectorAll('.timmy *');
      elements.forEach((element) => {
        element.classList.add('timmy');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Scarlett") {
      sliderCard.className = "slider-card scarlett";
      const elements = document.querySelectorAll('.scarlett *');
      elements.forEach((element) => {
        element.classList.add('scarlett');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Sophia") {
      sliderCard.className = "slider-card sophia";
      const elements = document.querySelectorAll('.sophia *');
      elements.forEach((element) => {
        element.classList.add('sophia');
      });
    }
    if (petsDescription[randomNumbersArr[i]].name === "Katrine") {
      sliderCard.className = "slider-card katrine";
      const elements = document.querySelectorAll('.katrine *');
      elements.forEach((element) => {
        element.classList.add('katrine');
      });
    }
  }
}


// MOVE SLIDER 

let currentArr;
let direction;
let uniqueNumbersArr;

arrowRight.addEventListener('click', function () {
  currentArr = [];
  if (uniqueNumbersArr == undefined) {
    for (var i = 0; i < 3; i++) {
      currentArr.push(randomNumbersArr[i])
    }
  } else {
    for (var i = 0; i < 3; i++) {
      currentArr.push(uniqueNumbersArr[i])
    }
  }
  const s = new Set(currentArr);
  randomNumbersArr = shuffleArr(numbers);
  uniqueNumbersArr = randomNumbersArr.filter(e => !s.has(e));

  fillCardsContentOnLoad(0, uniqueNumbersArr);
  slider.style.transform = 'translate(33.33%';
  slider.style.transitionDuration = "1s"
  direction = "right";
});

arrowLeft.addEventListener('click', function () {
  currentArr = [];
  if (uniqueNumbersArr == undefined) {
    for (var i = 0; i < 3; i++) {
      currentArr.push(randomNumbersArr[i])
    }
  } else {
    for (var i = 0; i < 3; i++) {
      currentArr.push(uniqueNumbersArr[i])
    }
  }
  const s = new Set(currentArr);
  randomNumbersArr = shuffleArr(numbers);
  uniqueNumbersArr = randomNumbersArr.filter(e => !s.has(e));
  fillCardsContentOnLoad(2, uniqueNumbersArr);
  direction = "left";
  slider.style.transform = 'translate(-33.33%';
  slider.style.transitionDuration = "1s"
});


slider.addEventListener('transitionend', function () {
  if (direction === "right") {
    slider.prepend(slider.lastElementChild);

  } else if (direction === "left") {
    slider.appendChild(slider.firstElementChild)
  };
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';
  setTimeout(function () {
    slider.style.transition = 'all 1s';
  })
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
  // console.log(event.target.classList)
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
  console.log(petItem);
  // DEFINE POPUP PET 

  popUpImage.style.backgroundSize = "cover";
  popUpImage.style.backgroundRepeat = "no-repeat";
  popUpPetName.innerHTML = petsDescription[petItem].name;
  popUpImage.style.backgroundImage = `url(${(petsDescription[petItem].img)})`;
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


