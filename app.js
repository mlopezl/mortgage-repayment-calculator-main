const formInputs = document.querySelectorAll(".form__input");
const customRadios = document.querySelectorAll(".radio-custom");
const calculator = document.querySelector(".calculator");
const errorAmount = document.getElementById("error-amount");
const errorTerm = document.getElementById("error-term");
const errorInterest = document.getElementById("error-interest");
const errorType = document.getElementById("error-type");
const results = document.querySelector('.results');
const calculatedResults = document.querySelector('.calculated-results');
const monthlyResult = document.getElementById('monthly-result');
const totalResult = document.getElementById('total-result');

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
    calcultateMortgage();
  }
});

function calcultateMortgage(){
  results.classList.add('hidden');
  calculatedResults.classList.remove('hidden');
  let principal;
  let annualRate;
  let years;

  inputsArray = Array.from(formInputs);

  inputsArray.forEach(input =>{
    if(input.id === 'amount'){
      principal = input.value;
    } else if(input.id === 'term'){
      years = input.value;
    } else if(input.id === 'interest-rate'){
      annualRate = input.value
    }
  });

  radiosArray = Array.from(customRadios);
  radioChecked = [...radiosArray].find((radio) => radio.checked);

  if(radioChecked.id === 'repayment'){
   const result = calcularMortgage(principal, annualRate, years);
   monthlyResult.innerText = result.monthlyPayment;
   totalResult.innerText = result.totalPaid;
  } else{
   const result = calcularInteresMortgage(principal, annualRate, years);
    monthlyResult.innerText = result.monthlyInterest;
   totalResult.innerText = result.totalInterest;
  }

   if (window.innerWidth <= 669) {
    calculatedResults.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function calcularMortgage(principal, annualRate, years) {
  const monthlyRate = (annualRate / 100) / 12;

  const totalPayments = years * 12;

  const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalPaid = monthlyPayment * totalPayments;

  return {
     monthlyPayment: monthlyPayment.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),

    totalPaid: totalPaid.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };
}

function calcularInteresMortgage(principal, annualRate, years) {
  const monthlyRate = (annualRate / 100) / 12;

  const totalPayments = years * 12;

  const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  const totalPaid = monthlyPayment * totalPayments;

  const totalInterest = totalPaid - principal;

  const firstMonthInterest = principal * monthlyRate;

  return {
    monthlyInterest: firstMonthInterest.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }),
    totalInterest: totalInterest.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  };
}