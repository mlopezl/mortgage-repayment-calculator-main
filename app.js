const formInputs = document.querySelectorAll(".form__input");
const customRadios = document.querySelectorAll(".radio-custom");
const calculator = document.querySelector(".calculator");
const errorAmount = document.getElementById("error-amount");
const errorTerm = document.getElementById("error-term");
const errorInterest = document.getElementById("error-interest");
const errorType = document.getElementById("error-type");

calculator.addEventListener("submit", (e) => {
  e.preventDefault();
  let submit = true;

  inputsArray = Array.from(formInputs);

  inputsArray.forEach((input) => {
    if (input.id === "amount") {
      if (input.value.trim() === "") {
        errorAmount.classList.remove("hidden");
        input.previousElementSibling.classList.add("input__error");
        submit = false;
      } else {
        errorAmount.classList.add("hidden");
        input.previousElementSibling.classList.remove("input__error");
      }
    } else if (input.id === "term") {
      if (input.value.trim() === "") {
        errorTerm.classList.remove("hidden");
        input.nextElementSibling.classList.add("input__error");
        submit = false;
      } else {
        errorTerm.classList.add("hidden");
        input.nextElementSibling.classList.remove("input__error");
      }
    } else if (input.id === "interest-rate") {
      if (input.value.trim() === "") {
        errorInterest.classList.remove("hidden");
        input.nextElementSibling.classList.add("input__error");
        submit = false;
      } else {
        errorInterest.classList.add("hidden");
        input.nextElementSibling.classList.remove("input__error");
      }
    }
  });

  radiosArray = Array.from(customRadios);
  radioChecked = [...radiosArray].some((radio) => radio.checked);

  if (!radioChecked) {
    errorType.classList.remove("hidden");
    submit = false;
  } else {
    errorType.classList.add("hidden");
  }

  if (submit) {
    console.log("submit");
  }
});

function isInputChecked() {}
