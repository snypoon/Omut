const main = document.querySelector('.main');
const contactsBtn = document.querySelector('.nav__contacts');
const aboutBtn = document.querySelector('.nav__about');
const backBtn = document.querySelector('.nav__back');
const navLogo = document.querySelector('.nav__logo');
const menu = document.querySelector('.menu');
const works = document.querySelector('.scroll__container');
const firstPageBlur = document.querySelector('.one__blur')

const mainActiveAdd = () => { main.classList.add('main-active');};
const mainActiveDel = () => { main.classList.remove('main-active');};
const menuActive = () =>{
  menu.classList.add('menu-active');
  works.classList.add('scroll__container-hidden');
  contactsBtn.classList.add('nav__contacts-hidden');
  aboutBtn.classList.add('nav__about-hidden');
  backBtn.classList.add('nav__back-active');
};
const menuClose = () => {
  menu.classList.remove('menu-active');
  works.classList.remove('scroll__container-hidden');
  contactsBtn.classList.remove('nav__contacts-hidden');
  aboutBtn.classList.remove('nav__about-hidden');
  backBtn.classList.remove('nav__back-active');
}

main.addEventListener('click', function(e){
  e.preventDefault();
  mainActiveAdd();
  firstPageBlur.classList.add('blur-active')
})

contactsBtn.addEventListener('click', function(e){
  e.preventDefault();
  mainActiveDel();
})

navLogo.addEventListener('click', function(e){
  e.preventDefault();
  mainActiveDel();
})

aboutBtn.addEventListener('click', function(e){
  e.preventDefault();
  menuActive();
})

backBtn.addEventListener('click', function(e){
  e.preventDefault();
  menuClose();
});

// Full Page Scroll

const screenTwo = document.querySelector('.work__two');
const blueScreenTwo = document.querySelector('.two__blur');
const screenThree = document.querySelector('.work__three');
const blueScreenThree = document.querySelector('.three__blur');
const screenFour = document.querySelector('.work__four');
const blueScreenFour= document.querySelector('.four__blur');
const screenFive = document.querySelector('.work__five');
const blueScreenFive = document.querySelector('.five__blur');
const screenSix = document.querySelector('.work__six');
const blueScreenSix = document.querySelector('.six__blur');
const screenSeven = document.querySelector('.work__seven');
const blueScreenSeven = document.querySelector('.seven__blur');
const screenEight = document.querySelector('.work__eight');
const blueScreenEight= document.querySelector('.eight__blur');

docSlider.init({
  speed : 1000,
  pager: false,
  beforeChange: function(){
    if(screenTwo.classList.contains('docSlider-current')){
      blueScreenTwo.classList.add('blur-active');
    };
    if(screenThree.classList.contains('docSlider-current')){
      blueScreenThree.classList.add('blur-active');
    };
    if(screenFour.classList.contains('docSlider-current')){
      blueScreenFour.classList.add('blur-active');
    };
    if(screenFive.classList.contains('docSlider-current')){
      blueScreenFive.classList.add('blur-active');
    };
    if(screenSix.classList.contains('docSlider-current')){
      blueScreenSix.classList.add('blur-active');
    };
    if(screenSeven.classList.contains('docSlider-current')){
      blueScreenSeven.classList.add('blur-active');
    };
    if(screenEight.classList.contains('docSlider-current')){
      blueScreenEight.classList.add('blur-active');
    };
  }
});




