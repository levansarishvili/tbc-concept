"use strict";

// /////////////// Language toggler ///////////////
const langButtons = document.querySelectorAll(".lang__dropdown");
const langListWrappers = document.querySelectorAll(".lang__list-wrapper");
const langDropdownText = document.querySelector(".lang__dropdown__text");
const langListItem = document.querySelector(".lang__list__item");

langButtons.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    langListWrappers[i].classList.toggle("active");
  })
);

/////////////// Slider Component ///////////////
document.addEventListener("DOMContentLoaded", () => {
  // Slider for Offer Section
  const swiper1 = new Swiper(".s1", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    // Breakpoints
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      660: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Slider for Awards Section
  const swiper2 = new Swiper(".s2", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    // Breakpoints
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      660: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Slider for Products Section
  const swiper3 = new Swiper(".s3", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },

    // Breakpoints
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      660: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
});
