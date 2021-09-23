// Full Page Scroll

const logoBtn = document.querySelector('.nav__logo');
const panels = document.querySelectorAll('.panel');
const blurs = document.querySelectorAll('.blur');

docSlider.init({
  speed : 1000,
  pager: false,
  beforeChange: function(){
    for (let i = 0; i < panels.length; i++) {
      const panel = panels[i];
      if(panel.classList.contains('docSlider-current')){
        blurs[i-1].classList.add('blur-active');
      } 
    }
  } 
});

logoBtn.addEventListener('click', () => docSlider.jumpPage('main'));
document.querySelector('.nav__link_phone').addEventListener('click', () => docSlider.jumpPage('main'));
document.querySelector('.nav__contacts').addEventListener('click', () => docSlider.jumpPage('main'));
// VIDEO

const scrollIcon = document.querySelector('.scroll__icon');
const navContact = document.querySelector('.nav__contacts');
const navAbout = document.querySelector('.nav__about');
const navLinksMob = document.querySelector('.nav__links_mob');
const navBack = document.querySelector('.nav__back');
const playBtns = document.querySelectorAll('.play');
const modals = document.querySelectorAll(".modal");
const video = document.querySelectorAll(".video");

for (let i = 0; i < playBtns.length; i++) {
  const playBtn = playBtns[i];
  playBtn.addEventListener("click", function(){
    modals[i].classList.add('modal-active');
    scrollIcon.classList.add('scroll__icon-active');
    navContact.classList.add('nav__contacts-hidden');
    navLinksMob.classList.add('nav__links_mob-hidden');
    navAbout.classList.add('nav__about-hidden');
    navBack.classList.add('nav__back-active');
  })
}

const closeVideo = (btn) => {
  btn.addEventListener('click', () => {
    modals.forEach(i => i.classList.remove('modal-active'));
    scrollIcon.classList.remove('scroll__icon-active');
    navContact.classList.remove('nav__contacts-hidden');
    navAbout.classList.remove('nav__about-hidden');
    navLinksMob.classList.remove('nav__links_mob-hidden');
    navBack.classList.remove('nav__back-active');
    video.forEach(i => i.src = i.src);
  })
}

closeVideo(navBack);
closeVideo(logoBtn);
