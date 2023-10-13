"use strict";

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");
const topLink = document.querySelector(".top-link");

const navbarHeight = navbar.getBoundingClientRect().height;
const containerHeight = linksContainer.getBoundingClientRect().height;
const linksHeight = links.getBoundingClientRect().height;

// Functions:

// Scroll to specific section/element
const scrollTo = (element) => {
  let position = element.offsetTop - navbarHeight;
  if (!navbar.classList.contains("fixed-nav")) {
    position -= navbarHeight;
  }
  if (navbarHeight > 82) {
    position += containerHeight;
  }
  window.scrollTo({
    left: 0,
    top: position,
  });
  linksContainer.style.height = 0;
};

// Toggle button
const toggleLinksBtn = () => {
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
};

// Handles user scroll
const handleScroll = () => {
  const scrollHeight = window.pageYOffset;
  navbar.classList.toggle("fixed-nav", scrollHeight > navbarHeight);
  topLink.classList.toggle("show-link", scrollHeight > 500);
};

// When user click/s link/s handler
const handleScrollToClick = (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  scrollTo(element);
};

// Event handlers:

// Event handler for the navigation toggle button
navToggle.addEventListener("click", toggleLinksBtn);

// Event handler for scroll event
window.addEventListener("scroll", handleScroll);

// Event handler for scroll links (links) when clicked
scrollLinks.forEach((link) => {
  link.addEventListener("click", handleScrollToClick);
});
