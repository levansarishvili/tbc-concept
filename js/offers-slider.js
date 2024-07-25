"use strict";

// /////////////// Offers Slider Functionality ///////////////

const sliderWrapperOffer = document.querySelector(".slider-wrapper-offer");
const sliderLeftButtonOffer = document.querySelector(
  ".slider-left-arrow-offer"
);
const sliderRightButtonOffer = document.querySelector(
  ".slider-right-arrow-offer"
);
const offerSlides = document.querySelectorAll(".slide-offer");
const sliderScrollbarOffer = document.querySelector(
  ".slider-scrollbar-drag-offer"
);

let curSlideOffer = 0;
const maxSlideOffer = offerSlides.length;

// Identify active slider
const makeOfferSliderActive = function () {
  sliderWrapperOffer.classList.add("active");
};
const makeOfferSliderInactive = function () {
  sliderWrapperOffer.classList.remove("active");
};

sliderWrapperOffer.addEventListener("mouseenter", makeOfferSliderActive);
sliderWrapperOffer.addEventListener("mouseleave", makeOfferSliderInactive);

// Function to go to next slide
const nextSlideOffer = function () {
  if (curSlideOffer >= maxSlideOffer - 3) {
    curSlideOffer = 0;
  } else {
    curSlideOffer++;
  }
  sliderWrapperOffer.style.transform = `translateX(-${curSlideOffer * 38}rem)`;
  sliderScrollbarOffer.style.transform = `translateX(${curSlideOffer * 25}rem)`;
};

// Function to go to previous slide
const prevSlideOffer = function () {
  if (curSlideOffer === 0) {
    curSlideOffer = maxSlideOffer - 3;
  } else {
    curSlideOffer--;
  }
  sliderWrapperOffer.style.transform = `translateX(-${curSlideOffer * 38}rem)`;
  sliderScrollbarOffer.style.transform = `translateX(${curSlideOffer * 25}rem)`;
};

sliderRightButtonOffer.addEventListener("click", nextSlideOffer);
sliderLeftButtonOffer.addEventListener("click", prevSlideOffer);

// Add event listen for left and right arrow keys
document.addEventListener("keydown", function (e) {
  if (sliderWrapperOffer.classList.contains("active")) {
    if (e.key === "ArrowRight") {
      nextSlideOffer();
    } else if (e.key === "ArrowLeft") {
      prevSlideOffer();
    }
  }
});

// Touch events for swipe functionality
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = function (e) {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchMove = function (e) {
  touchEndX = e.changedTouches[0].screenX;
};

const handleTouchEnd = function () {
  if (touchEndX < touchStartX - 50) {
    nextSlideOffer();
  }
  if (touchEndX > touchStartX + 50) {
    prevSlideOffer();
  }
};

sliderWrapperOffer.addEventListener("touchstart", handleTouchStart);
sliderWrapperOffer.addEventListener("touchmove", handleTouchMove);
sliderWrapperOffer.addEventListener("touchend", handleTouchEnd);
