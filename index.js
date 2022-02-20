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
