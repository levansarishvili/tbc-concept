"use strict";

// /////////////// Awards Slider Functionality ///////////////

const sliderWrapperAward = document.querySelector(".slider-wrapper-award");
const sliderLeftButtonAward = document.querySelector(
  ".slider-left-arrow-award"
);
const sliderRightButtonAward = document.querySelector(
  ".slider-right-arrow-award"
);
const awardSlides = document.querySelectorAll(".slide-award");
const sliderScrollbarAward = document.querySelector(
  ".slider-scrollbar-drag-award"
);

let curSlideAward = 0;
const maxSlideAward = awardSlides.length;

// Identify active slider
const makeAwardSliderActive = function () {
  sliderWrapperAward.classList.add("active");
};
const makeAwardSliderInactive = function () {
  sliderWrapperAward.classList.remove("active");
};

sliderWrapperAward.addEventListener("mouseenter", makeAwardSliderActive);
sliderWrapperAward.addEventListener("mouseleave", makeAwardSliderInactive);

// Function to go to next slide
const nextSlideAward = function () {
  if (curSlideAward >= maxSlideAward - 3) {
    curSlideAward = 0;
  } else {
    curSlideAward++;
  }
  sliderWrapperAward.style.transform = `translateX(-${curSlideAward * 38}rem)`;
  sliderScrollbarAward.style.transform = `translateX(${curSlideAward * 100}%)`;
};

// Function to go to previous slide
const prevSlideAward = function () {
  if (curSlideAward === 0) {
    curSlideAward = maxSlideAward - 3;
  } else {
    curSlideAward--;
  }
  sliderWrapperAward.style.transform = `translateX(-${curSlideAward * 38}rem)`;
  sliderScrollbarAward.style.transform = `translateX(${curSlideAward * 100}%)`;
};

sliderRightButtonAward.addEventListener("click", nextSlideAward);
sliderLeftButtonAward.addEventListener("click", prevSlideAward);

// Add event listen for left and right arrow keys
document.addEventListener("keydown", function (e) {
  if (sliderWrapperAward.classList.contains("active")) {
    if (e.key === "ArrowRight") {
      nextSlideAward();
    } else if (e.key === "ArrowLeft") {
      prevSlideAward();
    }
  }
});

// Touch event variables
let startX = 0;
let endX = 0;

// Touch start event
sliderWrapperAward.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

// Touch end event
sliderWrapperAward.addEventListener("touchend", function (e) {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Function to handle swipe
const handleSwipe = function () {
  const swipeThreshold = 50; // Minimum distance in pixels to be considered a swipe
  if (startX - endX > swipeThreshold) {
    // Swipe left
    nextSlideAward();
  } else if (endX - startX > swipeThreshold) {
    // Swipe right
    prevSlideAward();
  }
};
