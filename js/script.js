const main = document.querySelector('.main');
const contactsBtn = document.querySelector('.nav__contacts');
const aboutBtn = document.querySelector('.nav__about');
const backBtn = document.querySelector('.nav__back');
const menu = document.querySelector('.menu');
const works = document.querySelector('.scroll__container');

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
})

contactsBtn.addEventListener('click', function(e){
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

