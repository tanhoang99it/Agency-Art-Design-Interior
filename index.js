//setting slide our work when click indicator button
const track = document.querySelector('.slide-track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.indicator-button')
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect().width;

const moveToSlide = (track, currentSlide, targetSlide, targetIndex) => {
    track.style.transform = `translateX(-${(targetIndex * slideSize) + (80 * targetIndex)}px)`
    currentSlide.classList.remove('current-slide-work');
    targetSlide.classList.add('current-slide-work');
}

const moveToDot = (dotsNav, currentDot, targetDot) => {
    currentDot.classList.remove('slide-indicator-current');
    targetDot.classList.add('slide-indicator-current');
}

// when click the indicator move to the n slide

dotsNav.addEventListener('click', e => {
    console.log(e)
    const targetDot = e.target.closest('button');
    console.log(targetDot)
    if(!targetDot) return;

    const currentSlideWork = document.querySelector('.current-slide-work')
    const currentDotWork = document.querySelector('.slide-indicator-current')
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex)
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlideWork, targetSlide, targetIndex);
    moveToDot(dotsNav, currentDotWork, targetDot)

    document.querySelector('.indicator-num').innerHTML = `<h4 class="current-num">${targetIndex + 1}/5</h4>`
})


//setting move slide our service when click
const trackService = document.querySelector('.service-slide-track');
const slidesService = Array.from(trackService.children);
const dotsNavService = document.querySelector('.indicator-button-slide2')
const dotsService = Array.from(dotsNavService.children);
const slideSizeService = slidesService[0].getBoundingClientRect().width;




const moveToSlideService = (trackService, currentSlideService, targetSlideService, targetIndexService) => {
    trackService.style.transform = `translateX(-${(targetIndexService * (slideSizeService -1)) + (39 * targetIndexService)}px)`;
    currentSlideService.classList.remove('current-slide-service');
    targetSlideService.classList.add('current-slide-service');
}

const moveToDotService = (dotsNavService, currentDot, targetDot) => {
    currentDot.classList.remove('carousel-indicator-current');
    targetDot.classList.add('carousel-indicator-current');
}

// when click the indicator move to the n slide

dotsNavService.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlideWork = document.querySelector('.current-slide-service')
    const currentDotWork = document.querySelector('.carousel-indicator-current')
    const targetIndex = dotsService.findIndex(dotService => dotService === targetDot);
    const targetSlide = slidesService[targetIndex];
    const pictureTarget = Array.from(targetSlide.children)[0];
    const pictureCurrent = Array.from(currentSlideWork.children)[0];

    pictureCurrent.classList.remove('current-img');
    pictureTarget.classList.add('current-img');

    console.log(pictureCurrent)

    moveToSlideService(trackService, currentSlideWork, targetSlide, targetIndex);
    moveToDotService(dotsNavService, currentDotWork, targetDot)

    document.querySelector('.indicator-num-slide2').innerHTML = `<h4 class="current-num">${targetIndex + 1}/5</h4>`
})



//change setting for navBar when scroll mouse
var myNav = document.querySelector(".opening-contain");
var opening = document.getElementById('opening');
const myNavHeight = myNav.getBoundingClientRect().height;
const openingHeight = (opening.getBoundingClientRect().height * 0.95);
console.log(openingHeight);
console.log(opening.getBoundingClientRect());

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= myNavHeight && document.body.scrollTop < openingHeight || document.documentElement.scrollTop >= myNavHeight && document.documentElement.scrollTop < openingHeight) {
    myNav.classList.add("active-first");
  } else if (document.body.scrollTop >= openingHeight || document.documentElement.scrollTop >= openingHeight) {
    myNav.classList.add("active-second");
  } else {
    myNav.classList.remove("active-second");
    myNav.classList.remove("active-first");
  } 
};

