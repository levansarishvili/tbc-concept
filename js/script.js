"use strict";

// /////////////// Header Dropdown Component ///////////////
const body = document.querySelector("body");
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
const header = document.querySelector(".header");

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

// /////////////// Hamburger Menu for mobile ///////////////
const burgerMenuButton = document.querySelector(".header__burger-menu");
const headerNavMobile = document.querySelector(".header__nav-mobile");

burgerMenuButton.addEventListener("click", () => {
  burgerMenuButton.classList.toggle("active");
  headerNavMobile.classList.toggle("active");
  header.style.backgroundColor = "#f9fafa";
  body.classList.toggle("overflow-hidden");
});

// Header dropdown accordions
const headerDropdownTogglesMobile = document.querySelectorAll(
  ".header__dropdown-toggle-mobile"
);
const headerDropdownListWrappers = document.querySelectorAll(
  ".header__dropdown__list-wrapper"
);
const headerDropdownToggleIcons = document.querySelectorAll(
  ".header__dropdown-toggle-mobile-icon"
);
const headerDropdownLinksMobile = document.querySelectorAll(
  ".header__dropdown__link-mobile"
);

// Close all header dropdown function
const closeAllHeaderDropdown = () => {
  headerDropdownListWrappers.forEach((el) => {
    el.classList.remove("open");
  });
  headerDropdownToggleIcons.forEach((el) => {
    el.classList.remove("open");
  });
};

headerDropdownTogglesMobile.forEach((el, index) => {
  el.addEventListener("click", () => {
    const isOpen = headerDropdownListWrappers[index].classList.contains("open");

    // Close all dropdowns at first
    closeAllHeaderDropdown();

    // If the clicked toggle was not open before, open it
    if (!isOpen) {
      headerDropdownListWrappers[index].classList.add("open");
      headerDropdownToggleIcons[index].classList.add("open");
    }

    // Close header navigation menu when any dropdown link is clicked
    headerDropdownLinksMobile.forEach((link) => {
      link.addEventListener("click", () => {
        // Hide burger menu
        burgerMenuButton.classList.remove("active");
        headerNavMobile.classList.remove("active");

        // Close header dropdown
        headerDropdownListWrappers[index].classList.remove("open");
        headerDropdownToggleIcons[index].classList.remove("open");

        body.classList.remove("overflow-hidden");
      });
    });
  });
});
