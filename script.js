"use strict";

// ---- ELEMENTS ---- //
const date = document.getElementById("date");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");

let linksHeight = links.getBoundingClientRect().height;
let containerHeight = linksContainer.getBoundingClientRect().height;
let navHeight = navbar.getBoundingClientRect().height;
// ---- END OF ELEMENTS ---- //

// ---- FUNCTIONS ---- //

// Get current year
const getYear = () => {
  date.innerHTML = new Date().getFullYear();
};

// Toggle button functionality
const navToggleBtn = () => {
  linksHeight = links.getBoundingClientRect().height;
  containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) linksContainer.style.height = `${linksHeight}px`;
  else linksContainer.style.height = 0;
};

// Scolling functionality
const scrolling = () => {
  const scrollHeight = window.pageYOffset;
  navbar.classList.toggle("fixed-nav", scrollHeight > navHeight);
  topLink.classList.toggle("show-link", scrollHeight > 500);
};

// Scroll to a specific section
const scrollTo = (e) => {
  containerHeight = linksContainer.getBoundingClientRect().height;
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  navHeight = navbar.getBoundingClientRect().height;
  containerHeight = linksContainer.getBoundingClientRect().height;
  let position = element.offsetTop - navHeight;
  if (!navbar.classList.contains("fixed-nav")) position -= navHeight;
  if (navHeight > 82) position += containerHeight;
  window.scrollTo({
    left: 0,
    top: position,
  });
  linksContainer.style.height = 0;
};

// ---- END OF FUNCTIONS ---- //

// ---- EVENT HANDLERS ---- //

// Get date when DOM finishes loading
window.addEventListener("DOMContentLoaded", getYear);

// Toggle button
navToggle.addEventListener("click", navToggleBtn);

// User scroll
window.addEventListener("scroll", scrolling);

// User clicks links
scrollLinks.forEach((link) => {
  link.addEventListener("click", scrollTo);
});

// ---- END OF EVENT HANDLERS ---- //
