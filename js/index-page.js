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


var map_button = document.querySelector(".button-modal-map");
var map_popup = document.querySelector(".modal-map");
var close = map_popup.querySelector(".modal-close");

map_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }
});

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
