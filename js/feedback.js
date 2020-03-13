var button_link = document.querySelector(".button-link-contacts");
var feedback = document.querySelector(".modal-feedback");
var close = feedback.querySelector(".modal-close");
var feedback_name = feedback.querySelector("[name=feedback-name]");
var email = feedback.querySelector("[name=email]");
var text_feedback = feedback.querySelector("[name=text-feedback]");
var form = feedback.querySelector("form");
var isStorageSupport = true;
var storage = "";
var storage_email = "";

try {
  storage = localStorage.getItem("feedback_name");
  storage_email = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
};

button_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  feedback_name.focus();
  if (storage) {
    feedback_name.value = storage;
    email.value = storage_email;
    text_feedback.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show");
  feedback.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!feedback_name.value || !email.value || !text_feedback.value) {
    evt.preventDefault();
    feedback.classList.remove("modal-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("feedback_name", feedback_name.value);
      localStorage.setItem("email",email.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedback.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      feedback.classList.remove("modal-error");
    }
  }
});
