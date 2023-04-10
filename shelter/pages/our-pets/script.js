//     PAGINATION AND SLIDER 
import { petsDescription } from "../../assets/pet-info.js"

const slider = document.querySelector('.slider-visible-wrapper');
const firstPageButton = document.querySelector('.double-back');
const previousPageButton = document.querySelector('.back');
const currentPage = document.querySelector('.page-number');
const nextPageButton = document.querySelector('.next-page');
const lastPageButton = document.querySelector('.double-next-page');


// APPEND PAGES 

function appendSliderPages() {
  for (let i = 0; i < 6; i++) {
    const sliderPage = document.createElement('div');
    sliderPage.className = "slider-page";
    slider.append(sliderPage);
    for (let i = 0; i < 8; i++) {
      const sliderCard = document.createElement('div');
      sliderCard.className = "slider-card";
      sliderPage.append(sliderCard);

      const petImage = document.createElement('img');
      petImage.className = "pet-img"
      sliderCard.append(petImage);
      petImage.style.backgroundImage = `url(${(petsDescription[0].img)})`;

      const petName = document.createElement('div');
      petName.className = "pet-name paragraph-20"
      sliderCard.append(petName);
      petName.innerHTML = petsDescription[0].name;

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
  // for (let i = 0; i < 6; i++) {
  // }
}

appendSliderPages();