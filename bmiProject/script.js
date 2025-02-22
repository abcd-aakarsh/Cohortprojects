const weight = document.getElementById("weight");
const height = document.getElementById("height");
const submit = document.getElementById("submit");
const bmiContainer = document.getElementById("bmi-container");
const bmiStatus = document.getElementById("bmi-status");
function calculateBmi(weight, height) {
  return Math.round(((weight * 10000) / (height * height)) * 10) / 10;
}

submit.addEventListener("click", () => {
  let wValue = Number(weight.value);
  let hValue = Number(height.value);

  if (wValue === 0) {
    bmiContainer.innerText = `Weight can't be 0 kg`;
    return;
  }
  if (hValue === 0) {
    bmiContainer.innerText = `Height can't be 0 cm`;
    return;
  }
  let bmi = calculateBmi(wValue, hValue);
  if (bmi > 100) {
    bmiContainer.innerText = "Please write correct values";
    return;
  }

  if (bmi < 18.5) {
    bmiStatus.innerHTML = `Your Status is : Underweight`;
    bmiStatus.style.color = "#ff0000";
  } else if (18.5 <= bmi && bmi < 25) {
    bmiStatus.innerHTML = `Your Status is : Normal`;
    bmiStatus.style.color = "#50d890";
  } else {
    bmiStatus.innerHTML = `Your Status is : Overweight`;
    bmiStatus.style.color = "#ff0000";
  }

  bmiContainer.innerText = `Your BMI is : ${bmi} Kg/m^2.`;

  weight.value = "";
  height.value = "";
});
