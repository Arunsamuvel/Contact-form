"use strict";
const form = document.getElementById("backg");
const successMessage = document.getElementById("sucess-message");
// // selecting inputs
form.addEventListener("submit", (e) => {
  e.preventDefault;
  const fname = document.getElementById("fname").Value.trim();
  const lastname = document.getElementById("lastname").Value.trim();
  const email = document.getElementById("email").Value.trim();
  const mesaage = document.getElementById("mesaage-box").Value.trim();
  const consent = document.getElementById("consent").checked;
  const querytype = document.querySelector('input[name="query-type"]:checked');

  const formAlert = document.querySelectorAll(".form-alert");

  let isvalid = true;

  // first name validation

  if (fname === "") {
    isvalid = false;

    document.querySelector("#fname +.form-alert").style.display = " block";
    document.getElementById("#fname").style.border = "1 px solid var(--red)";
  } else {
    document.querySelector("#fname +.form-alert").style.display = " none";
    document.getElementById("#fname").style.border =
      "1 px solid var(--medium-grey)";
  }
  // last Name validation
  if (lastname === "") {
    isvalid = false;

    document.querySelector("#lastname +.form-alert").style.display = " block";
    document.getElementById("#lastname").style.border = "1 px solid var(--red)";
  } else {
    document.querySelector("#lastname +.form-alert").style.display = " none";
    document.getElementById("#lastname").style.border =
      "1 px solid var(--medium-grey)";
  }

  // email validation
  if (email === "") {
    isvalid = false;

    document.querySelector("#email +.form-alert").style.display = " block";
    document.getElementById("#email").style.border = "1 px solid var(--red)";
  } else {
    document.querySelector("#email +.form-alert").style.display = " none";
    document.getElementById("#email").style.border =
      "1 px solid var(--medium-grey)";
  }

  // meassgae validation
  if (mesaage === "") {
    isvalid = false;

    document.querySelector("#mesaage-box +.form-alert").style.display =
      " block";
    document.getElementById("#mesaage-box").style.border =
      "1 px solid var(--red)";
  } else {
    document.querySelector("#mesaage-box +.form-alert").style.display = " none";
    document.getElementById("#mesaage-box").style.border =
      "1 px solid var(--medium-grey)";
  }

  if (isvalid) {
    successMessage.classList.add("active");
    formAlert.reset();
  }
});
