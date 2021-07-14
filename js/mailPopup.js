const mailLink = document.querySelector(".contacts-button");
const mailPopup = document.querySelector(".form-mail");
const mailClose = mailPopup.querySelector(".button-close");
const mailForm = mailPopup.querySelector(".mail-form");
const mailLogin = mailPopup.querySelector(".form-mail-name");
const mailPassword = mailPopup.querySelector(".form-mail-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

mailLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mailPopup.classList.add("modal-show");

  if (storage) {
    mailLogin.value = storage;
    mailPassword.focus();
  } else {
    mailLogin.focus();
  }
});

mailClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mailPopup.classList.remove("modal-show");
  mailPopup.classList.remove("modal-error");
});

mailForm.addEventListener("submit", function (evt) {
  if (!mailLogin.value || !mailPassword.value) {
    evt.preventDefault();
    mailPopup.classList.remove("modal-error");
    mailPopup.offsetWidth = mailPopup.offsetWidth;
    mailPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", mailLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mailPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mailPopup.classList.remove("modal-show");
      mailPopup.classList.remove("modal-error");
    }
  }
});
