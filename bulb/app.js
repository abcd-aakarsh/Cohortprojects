/**
 * Write your challenge solution here
 */
const switchStatus = document.getElementById("status");

const toggleButton = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
toggleButton.addEventListener("click", () => {
  if (toggleButton.innerHTML === "Turn On") {
    document.body.style.backgroundColor = "black";
    bulb.classList.remove("off");
    document.body.style.color = "white";
    toggleButton.innerHTML = "Turn Off";
    switchStatus.innerHTML = "Status: On";
  } else {
    bulb.classList.add("off");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggleButton.innerHTML = "Turn On";
    switchStatus.innerHTML = "Status: Off";
  }
});
