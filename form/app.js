const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

const jobInput = document.getElementById("jobInput");
const jobDisplay = document.getElementById("jobDisplay");

const ageInput = document.getElementById("ageInput");
const ageDisplay = document.getElementById("ageDisplay");

const bioInput = document.getElementById("bioInput");
const bioDisplay = document.getElementById("bioDisplay");

nameInput.addEventListener("input", (e) => {
  if (!e.target.value) {
    nameDisplay.innerText = "Not Provided";
  } else {
    nameDisplay.innerText = e.target.value;
  }
});
jobInput.addEventListener("input", (e) => {
  jobDisplay.innerText = e.target.value;
});
ageInput.addEventListener("input", (e) => {
  ageDisplay.innerText = e.target.value;
});

bioInput.addEventListener("input", (e) => {
  bioDisplay.innerText = e.target.value;
});
