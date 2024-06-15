"use strict";
const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");

// selecting inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message-box").value.trim();
  const consent = document.getElementById("consent").checked;
  const querytype = document.querySelector('input[name="query"]:checked');

  const formAlert = document.querySelectorAll(".form-alert");

  let isValid = true;

  // First name validation
  if (fname === "") {
    isValid = false;
    document.querySelector("#fname + .form-alert").style.display = "block";
    document.getElementById("fname").style.border = "1px solid red";
  } else {
    document.querySelector("#fname + .form-alert").style.display = "none";
    document.getElementById("fname").style.border = "1px solid green";
  }

  // Last name validation
  if (lastname === "") {
    isValid = false;
    document.querySelector("#lastname + .form-alert").style.display = "block";
    document.getElementById("lastname").style.border = "1px solid red";
  } else {
    document.querySelector("#lastname + .form-alert").style.display = "none";
    document.getElementById("lastname").style.border = "1px solid green";
  }

  // Email validation
  if (email === "") {
    isValid = false;
    document.querySelector("#email + .form-alert").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.getElementById("email").style.border = "1px solid green";
  }

  // Message validation
  if (message === "") {
    isValid = false;
    document.querySelector("#message-box + .form-alert").style.display =
      "block";
    document.getElementById("message-box").style.border = "1px solid red";
  } else {
    document.querySelector("#message-box + .form-alert").style.display = "none";
    document.getElementById("message-box").style.border = "1px solid green";
  }

  // Query type validation
  if (!querytype) {
    isValid = false;
    document.querySelector(".radio + .form-alert").style.display = "block";
  } else {
    document.querySelector(".radio + .form-alert").style.display = "none";
  }

  // Consent validation
  if (!consent) {
    isValid = false;
    document.querySelector("#consent + .form-alert").style.display = "block";
  } else {
    document.querySelector("#consent + .form-alert").style.display = "none";
  }

  if (isValid) {
    successMessage.style.opacity = "0";
    form.reset();
  }
});
