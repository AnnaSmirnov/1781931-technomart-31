const cartLink = document.querySelectorAll(".button-buy");
const cartPopup = document.querySelector(".cart-popup");
const cartClose = cartPopup.querySelector(".button-close");

for(let button of cartLink) {
  button.addEventListener("click",function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
};

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
  cartPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
      cartPopup.classList.remove("modal-error");
    }
  }
});
