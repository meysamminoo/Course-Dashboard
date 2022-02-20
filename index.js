// todo: full width search box with click
const search = document.getElementById("search");
search.addEventListener("focusin", focusin);
search.addEventListener("focusout", focusout);

function focusin() {
  search.style.width = "97%";
}

function focusout() {
  search.style.width = "47rem";
}

// todo: move element bottom to top
window.addEventListener("DOMContentLoaded", function () {
  const taskBox = document.querySelectorAll(".task-box");
  taskBox.forEach((task) => {
    task.classList.add("visible");
  });
});

// todo:
const left = document.querySelector(".left");
const leftSmall = document.querySelector(".left-small");
const logoBox = document.querySelector(".logo-box");
const logoBoxSmall = document.querySelector(".logo-box-small");
// const leftNavSmall = document.querySelector(".left-small");

logoBox.addEventListener("click", toggleMenu);
logoBoxSmall.addEventListener("click", toggleMenuSmall);

function toggleMenu() {
  left.classList.add("hide-left");
  leftSmall.classList.add("show-left-small");
  document.body.classList.add("small");
}

function toggleMenuSmall() {
  left.classList.remove("hide-left");
  leftSmall.classList.remove("show-left-small");
  document.body.classList.remove("small");
}
