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
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const imgTargets = document.querySelectorAll("img[data-src]");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

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

//// Bind method allows to add parameters to a function WITHOUT having to change the function to accept additional parameters
// function handleHover(e) {
//   const link = e.target;
//   console.log(
//     `Event object will always be passed in by addEventListener: ${link}`
//   );
//   console.log(
//     `Params: ${this.opacity}, ${this.color}, and ${this.backgroundColor}`
//   );
// }
// nav.addEventListener(
//   "mouseover",
//   handleHover.bind({ opacity: 0.5, color: "red", backgroundColor: "#808080" })
// );

// const handleHover = function (e) {
//   if (e.target.classList.contains("nav__link")) {
//     const link = e.target;
//     const siblings = link.closest(".nav").querySelectorAll(".nav__link");
//     const logo = link.closest(".nav").querySelector("img");

//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// nav.addEventListener("mouseover", handleHover.bind(0.5));

// nav.addEventListener("mouseout", handleHover.bind(1));

const handleHover = function (o) {
  return function (e) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav__link");
      const logo = link.closest(".nav").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = o;
      });
      logo.style.opacity = o;
    }
  };
};
nav.addEventListener("mouseover", handleHover(0.5));

nav.addEventListener("mouseout", handleHover(1));

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   // console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else {
//     nav.classList.remove("sticky");
//   }
// });

// Sticky navigation: Intersection observer api
// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Revealing sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target); // performance related
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// Lazy loading images
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "100px",
});
imgTargets.forEach((img) => imgObserver.observe(img));

let currSlide = 0;
const maxSlide = slides.length;

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = function () {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${currSlide}"]`)
    .classList.add("dots__dot--active");
};
activateDot();

const goToSlide = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
  });
};
goToSlide();

const sliderBothSides = function (o) {
  return function () {
    if (o) {
      currSlide = (currSlide + 1) % maxSlide;
    } else {
      currSlide = (currSlide + maxSlide - 1) % maxSlide;
    }
    goToSlide();
    activateDot(currSlide);
  };
};

btnRight.addEventListener("click", sliderBothSides(true));
btnLeft.addEventListener("click", sliderBothSides(false));

document.addEventListener("keydown", function (e) {
  // console.log(e);
  e.key === "ArrowLeft" && sliderBothSides(false)();
  e.key === "ArrowRight" && sliderBothSides(true)();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    currSlide = +e.target.dataset.slide;
    goToSlide(currSlide);
    activateDot(currSlide);
  }
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

document.addEventListener("DOMContentLoaded", function (e) {
  console.log(e);
});

window.addEventListener("laod", function () {})

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});
*/
