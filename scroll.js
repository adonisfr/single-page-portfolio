const imgSize = document.querySelector("#img-slide-1").clientWidth;
function toRight() {
  document.querySelector(".img-slide").scrollLeft += imgSize;
}

function toLeft() {
  document.querySelector(".img-slide").scrollLeft -= imgSize;
}
