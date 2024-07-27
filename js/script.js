"use strict";

// /////////////// Header Dropdown Component ///////////////

document.addEventListener("DOMContentLoaded", () => {
  const headerNav = document.querySelector(".header__nav");
  const headerDropdownContainer = document.querySelector(
    ".header__dropdown-wrapper"
  );
  const headerDropdownLists = document.querySelectorAll(
    ".header__dropdown__list"
  );
  const headerDropdownLinks = document.querySelectorAll(
    ".header__dropdown__link"
  );
  const headerDropdownLines = document.querySelectorAll(
    ".header__dropdown__line"
  );
  const headerDropdownLinkBlock = document.querySelector(
    ".header__dropdown__link-block"
  );

  let index;

  // Function to close header dropdown
  const closeHeaderDropdown = function () {
    headerDropdownLists[index].classList.remove("open");
    headerDropdownContainer.classList.remove("open");
    headerDropdownLines[index].classList.remove("open");
    headerDropdownLinkBlock.classList.remove("open");
  };

  // I use Event Delegation
  headerNav.addEventListener("click", (e) => {
    const target = e.target;
    index = target.getAttribute("data-index");

    // Check if i clicked on correct element
    if (target.classList.contains("header__dropdown-toggle")) {
      let isOpen = headerDropdownLists[index].classList.contains("open");

      //   Reset to default
      headerDropdownLists.forEach((item) => item.classList.remove("open"));
      headerDropdownLines.forEach((item) => item.classList.remove("open"));

      // Open dropdown wrapper
      headerDropdownContainer.classList.add("open");
      headerDropdownLinkBlock.classList.add("open");

      // Open correct dropdown list
      headerDropdownLines[index].classList.toggle("open");
      headerDropdownLists[index].classList.toggle("open");

      // If dropdown list is already open, close everything
      if (isOpen) {
        closeHeaderDropdown();
      }
    }
  });

  // Close the dropdown if clicking outside the header nav

  document.addEventListener("click", (e) => {
    if (headerDropdownContainer.classList.contains("open")) {
      if (!headerNav.contains(e.target)) {
        // Close everything
        closeHeaderDropdown();
      }
    }
  });

  // Close the dropdown if clicking on the header dropdown link
  headerDropdownLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Close everything
      closeHeaderDropdown();
    });
  });
});

// /////////////// Header Hamburger Menu ///////////////

const burgerMenuButton = document.querySelector(".header__burger-menu");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuButton.classList.toggle("active");
});

// /////////////// Footer Dropdown Menu ///////////////

const footerMainContent = document.querySelector(".footer__content__inner");
const footerDropdownToggles = document.querySelectorAll(
  ".footer__dropdown-toggle"
);
const footerDropdownListWrappers = document.querySelectorAll(
  ".footer__dropdown__list-wrapper"
);
const footerDropdownArrows = document.querySelectorAll(
  ".footer__dropdown__arrow"
);

// Close all footer dropdown function
const closeAllFooterDropdown = () => {
  footerDropdownListWrappers.forEach((el) => {
    el.classList.remove("open");
  });
  footerDropdownArrows.forEach((el) => {
    el.classList.remove("open");
  });
};

// I use Event Delegation to avoid multiple event listeners on each toggler
footerMainContent.addEventListener("click", (e) => {
  const target = e.target;
  const index = target.getAttribute("data-index");

  if (target.classList.contains("footer__dropdown-toggle")) {
    const isOpen = footerDropdownListWrappers[index].classList.contains("open");

    // Close all dropdowns at first
    closeAllFooterDropdown();

    // If the clicked toggle was not open before, open it
    if (!isOpen) {
      footerDropdownListWrappers[index].classList.add("open");
      footerDropdownArrows[index].classList.add("open");
    }
  }
});

// /////////////// Cookies Component ///////////////

const cookiesContainer = document.querySelector(".cookies-wrapper");
const cookiesAcceptButton = document.querySelector(".cookies-button");

cookiesAcceptButton.addEventListener("click", (e) => {
  e.preventDefault();

  cookiesContainer.classList.add("hidden");
});

// /////////////// Button Menu Component ///////////////
const buttonMenuTrigger = document.querySelector(".button-menu__trigger");
const innerButtons = document.querySelector(".buttons");

buttonMenuTrigger.addEventListener("click", () => {
  innerButtons.classList.toggle("open");
  buttonMenuTrigger.classList.toggle("open");
});
