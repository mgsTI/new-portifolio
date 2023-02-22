// button open and closed menu mobile

const navMobile = document.getElementById('nav-mobile');
const btnMobileOpen = document.querySelector(".btnOpen");
btnMobileOpen.addEventListener("click", () => {
    navMobile.classList.add('active'); 
});

const btnMobileClosed = document.querySelector(".btnClosed");
btnMobileClosed.addEventListener("click", () => {
    navMobile.classList.remove('active');
});

// close header onclick in every link

const linkClosed1 = document.querySelector(".home-mobile");
linkClosed1.addEventListener("click", () => {
    navMobile.classList.remove('active');
});
const linkClosed2 = document.querySelector(".about-mobile");
linkClosed2.addEventListener("click", () => {
    navMobile.classList.remove('active');
});
const linkClosed3 = document.querySelector(".skills-mobile");
linkClosed3.addEventListener("click", () => {
    navMobile.classList.remove('active');
});
const linkClosed4 = document.querySelector(".contact-mobile");
linkClosed4.addEventListener("click", () => {
    navMobile.classList.remove('active');
});

// button open and closed menu mobile

// form alert witch click in button

const submitButton = document.querySelector(".enter");
submitButton.addEventListener("click", () => {
    alert('email send');
});

// form alert witch click in button

// scroll reveal API start

window.sr = ScrollReveal({reset: false});

// home customization
sr.reveal('.containerProfile',
{duration: 1500, delay: 800,});

sr.reveal('.containerTyping',
{duration: 2000, delay: 1200, origin: 'left', distance: '60px'});

sr.reveal('.box-button--cv',
{duration: 2000, delay: 1200, origin: 'right', distance: '200px'});

sr.reveal('.containerArrowDown',
{duration: 2000, delay: 2000, origin: 'bottom', distance: '30px'});
// home customization

// about customization
sr.reveal('.content-about--title',
{duration: 2000, delay: 1200, origin: 'left', distance: '60px'});

sr.reveal('.box-container--description',
{duration: 2000, delay: 2000, orign: 'right', distance: '60px'});
// about customization

// skills and projects customization

sr.reveal('.content-skills-title',
{duration: 1200, delay: 1200, origin: 'bottom', distance: '20px'});

sr.reveal('.card-01',
{duration: 2000, delay: 2000, origin: 'left', distance: '100px'});

sr.reveal('.card-02',
{duration: 2000, delay: 2000, origin: 'right', distance: '100px'});

sr.reveal('.projects-title',
{duration: 1200, delay: 1200, origin: 'bottom', distance: '20px'});

sr.reveal('.card-project--01',
{duration: 1000, delay: 1000, origin: 'right', distance: '100px'});

sr.reveal('.card-project--02',
{duration: 1000, delay: 1000, origin: 'left', distance: '100px'});

sr.reveal('.card-project--03',
{duration: 1000, delay: 1000, origin: 'right', distance: '100px'});

sr.reveal('.container-github',
{duration: 2000, delay: 2000, origin: 'bottom', distance: '20px'});

// skills and projects customization

// contact form customization

sr.reveal('.container-title--contact',
{duration: 1200, delay: 1200,});


sr.reveal('.inp-name',
{duration: 1300, delay: 1300, origin: 'left', distance: '30px'});


sr.reveal('.inp-email',
{duration: 1400, delay: 1400, origin: 'right', distance: '30px'});


sr.reveal('.label-form',
{duration: 1500, delay: 1500, origin: 'left', distance: '30px'});


sr.reveal('.text-area',
{duration: 1600, delay: 1600, origin: 'left', distance: '30px'});


sr.reveal('.enter',
{duration: 1600, delay: 1600, origin: 'bottom', distance: '50px'});

// contact form customization