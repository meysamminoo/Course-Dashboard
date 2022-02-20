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

// todo: progressbar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelectorAll("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
