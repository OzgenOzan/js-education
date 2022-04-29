"use strict";

///////////////////////////////////////
// Modal window

/// Selecting elements
const allSections = document.querySelectorAll(".section"); // returns a node list which is static
const allButtons = document.getElementsByTagName("button"); // returns HTML collection which is dynamic
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", function (e) {
  // const s1coord = section1.getBoundingClientRect();
  // console.log(s1coord);

  // console.log(e.target.getBoundingClientRect());

  // console.log(
  //   "X/Y distance of the scrolled page (top point)",
  //   window.scrollX,
  //   window.scrollY
  // );

  // console.log(
  //   "dimensions of the current window",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // using scroll button (conventional way)
  // window.scrollTo(s1coord.left + window.scrollX, s1coord.top + window.scrollY);
  // window.scrollTo({
  //   left: s1coord.left + window.scrollX,
  //   top: s1coord.top + window.scrollY,
  //   behavior: "smooth",
  // });
  // modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav__link")) {
    // console.log("link");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".operations__tab");
  if (!clickedTab) return;

  if (clickedTab.classList.contains("operations__tab")) {
    // console.log(clickedTab);
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) =>
      c.classList.remove("operations__content--active")
    );
    clickedTab.classList.add("operations__tab--active");
    document
      .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
      .classList.add("operations__content--active");
  }
  // clickedEl.classList.contains("operations__tab") ? clickedEl.getAttribute("")
});

///////////////////////////////////////////
/*
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(allSections);
// console.log(allButtons);

/// Creating and inserting elements

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "This site uses cookies for better user experience";
// message.insertAdjacentHTML(
//   "afterbegin",
//   `This site uses cookies to improve user experience. <button class="btn btn--close-cookie">Accept it</button>`
// );
message.innerHTML = `This site uses cookies to improve user experience. <button class="btn btn--close-cookie">Accept it</button>`;

// header.prepend(message);
// header.append(message.cloneNode(true);
// header.before(message);
// header.after(message);
header.append(message);

//// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

////

message.style.backgroundColor = "#37384d";
message.style.width = "120%";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// console.log(getComputedStyle(message).color);

// document.documentElement.style.setProperty("--color-primary", "lightblue");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
logo.alt = "Minimalist logo...";

// for non-default attributes...
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Biocalis");

console.log(logo.src); // absouloute location
console.log(logo.getAttribute("src")); // relative location (to the source folder)

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();


const h1 = document.querySelector("h1");

const clh1 = function (e) {
  console.log("hovered over the h1 element");

  // h1.removeEventListener("mouseenter", clh1);
};

h1.addEventListener("mouseenter", clh1);

// setTimeout(() => {
//   h1.removeEventListener("mouseenter", clh1);
// }, 3000);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("link", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop the parent effecting
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  // console.log("links", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("nav", e.target, e.currentTarget);
  }
  // true
);

const h1 = document.querySelector("h1");

// Going downwards: child elements
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going uppwards: parent elements
// console.log(h1.querySelectorAll(".header__title"));
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

// Going parallel: sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  el !== h1 ? (el.style.transform = "scale(0.5)") : el;
});
*/
