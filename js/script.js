"use strict";

// /////////////// Header Dropdown Component ///////////////
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

// I use Event Delegation
headerNav.addEventListener("click", (e) => {
  const index = e.target.getAttribute("data-index");
  const target = e.target;

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
      headerDropdownLists[index].classList.remove("open");
      headerDropdownContainer.classList.remove("open");
      headerDropdownLines[index].classList.remove("open");
      headerDropdownLinkBlock.classList.remove("open");
    }
  }
});

// Close the dropdown if clicking outside the header__nav
document.addEventListener("click", (e) => {
  if (!headerNav.contains(e.target)) {
    // Close everything
    headerDropdownLists.forEach((item) => item.classList.remove("open"));
    headerDropdownLines.forEach((item) => item.classList.remove("open"));
    headerDropdownContainer.classList.remove("open");
    headerDropdownLinkBlock.classList.remove("open");
  }
});

// Close the dropdown if clicking on the header dropdown link
headerDropdownLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Close everything
    headerDropdownLists.forEach((item) => item.classList.remove("open"));
    headerDropdownLines.forEach((item) => item.classList.remove("open"));
    headerDropdownContainer.classList.remove("open");
    headerDropdownLinkBlock.classList.remove("open");
  });
});
