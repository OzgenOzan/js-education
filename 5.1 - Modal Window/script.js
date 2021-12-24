"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModalAndOverlay = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModelAndOverlay = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModelAndOverlay);
}

btnCloseModal.addEventListener("click", closeModalAndOverlay);
overlay.addEventListener("click", closeModalAndOverlay);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalAndOverlay();
  }
});
