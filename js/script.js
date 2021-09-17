// Full Page Scroll
const screenZero = document.querySelector('.work__zero');
const blueScreenZero  = document.querySelector('.zero__blur');
const screenOne = document.querySelector('.work__one');
const blueScreenOne = document.querySelector('.one__blur');
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
const blueScreenEight = document.querySelector('.eight__blur');
const logoBtn = document.querySelector('.nav__logo');


docSlider.init({
  speed : 1000,
  pager: false,
  beforeChange: function(){
    if(screenZero.classList.contains('docSlider-current')){
      blueScreenZero.classList.add('blur-active');
    };
    if(screenOne.classList.contains('docSlider-current')){
      blueScreenOne.classList.add('blur-active');
    };
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

logoBtn.addEventListener('click', () => docSlider.jumpPage('main'));
document.querySelector('.nav__link_phone').addEventListener('click', () => docSlider.jumpPage('main'));

// VIDEO

const scrollIcon = document.querySelector('.scroll__icon');
const navContact = document.querySelector('.nav__contacts');
const navAbout = document.querySelector('.nav__about');
const navLinksMob = document.querySelector('.nav__links_mob');
const navBack = document.querySelector('.nav__back');
const zeroBtn = document.querySelector('.zero__play');
const zeroModal = document.querySelector('.zero__modal');
const zeroVideo = document.querySelector('.zero__video');
const oneBtn = document.querySelector('.one__play');
const oneModal = document.querySelector('.one__modal');
const oneVideo = document.querySelector('.one__video');
const twoBtn = document.querySelector('.two__play');
const twoModal = document.querySelector('.two__modal');
const twoVideo = document.querySelector('.two__video');
const threeBtn = document.querySelector('.three__play');
const threeModal = document.querySelector('.three__modal');
const threeVideo = document.querySelector('.three__video');
const fourBtn = document.querySelector('.four__play');
const fourModal = document.querySelector('.four__modal');
const fourVideo = document.querySelector('.four__video');
const fiveBtn = document.querySelector('.five__play');
const fiveModal = document.querySelector('.five__modal');
const fiveVideo = document.querySelector('.five__video');
const sixBtn = document.querySelector('.six__play');
const sixModal = document.querySelector('.six__modal');
const sixVideo = document.querySelector('.six__video');
const sevenBtn = document.querySelector('.seven__play');
const sevenModal = document.querySelector('.seven__modal');
const sevenVideo = document.querySelector('.seven__video');
const eightBtn = document.querySelector('.eight__play');
const eightModal = document.querySelector('.eight__modal');
const eightVideo = document.querySelector('.eight__video');


zeroBtn.addEventListener('click', () => {
  zeroModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  zeroModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  zeroVideo.src = zeroVideo.src;
})

oneBtn.addEventListener('click', () => {
  oneModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  oneModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  oneVideo.src = oneVideo.src;
})

twoBtn.addEventListener('click', () => {
  twoModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  twoModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  twoVideo.src = twoVideo.src;
})

threeBtn.addEventListener('click', () => {
  threeModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  threeModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  threeVideo.src = threeVideo.src;
})

fourBtn.addEventListener('click', () => {
  fourModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  fourModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  fourVideo.src = fourVideo.src;
})

fiveBtn.addEventListener('click', () => {
  fiveModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  fiveModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  fiveVideo.src = fiveVideo.src;
})

sixBtn.addEventListener('click', () => {
  sixModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  sixModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  sixVideo.src = sixVideo.src;
})

sevenBtn.addEventListener('click', () => {
  sevenModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  sevenModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  sevenVideo.src = sevenVideo.src;
})

eightBtn.addEventListener('click', () => {
  eightModal.classList.add('modal-active');
  scrollIcon.classList.add('scroll__icon-active');
  navContact.classList.add('nav__contacts-hidden');
  navLinksMob.classList.add('nav__links_mob-hidden');
  navAbout.classList.add('nav__about-hidden');
  navBack.classList.add('nav__back-active');
})

navBack.addEventListener('click', () => {
  eightModal.classList.remove('modal-active');
  scrollIcon.classList.remove('scroll__icon-active');
  navContact.classList.remove('nav__contacts-hidden');
  navAbout.classList.remove('nav__about-hidden');
  navLinksMob.classList.remove('nav__links_mob-hidden');
  navBack.classList.remove('nav__back-active');
  eightVideo.src = eightVideo.src;
})