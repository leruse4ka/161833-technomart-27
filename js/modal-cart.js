var cart_link = document.querySelectorAll(".buy");
var cart_popup = document.querySelector(".modal-cart");
var close = cart_popup.querySelector(".modal-close");
for(i=0;i<cart_link.length;i++){
cart_link[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_popup.classList.add("modal-show");
})
}
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  cart_popup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (cart_popup.classList.contains("modal-show")) {
      cart_popup.classList.remove("modal-show");
    }
  }
})
