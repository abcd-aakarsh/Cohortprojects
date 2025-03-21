const create = document.getElementById("create");
const color = document.getElementById("color");
const btnContainer = document.getElementById("btn-container");
const bgBox = document.getElementById("bg-box");
const btns = document.querySelectorAll(".btn");

create.addEventListener("click", function () {
  const value = color.value;
  console.log(value);
  const btn = document.createElement("button");
  btn.style.backgroundColor = value;
  btn.classList.add("btn");
  btn.innerText = value;

  btn.addEventListener("click", function () {
    bgBox.style.backgroundColor = btn.innerText;
  });

  btnContainer.appendChild(btn);
});

// function in which create button then function with inner text value

function createButton() {
  const btn = document.createElement("button");
  value = color.value;
  btn.classList.add("btn");
  return function () {
    btn.innerText = value;
    btn.addEventListener("click", function () {
      bgBox.style.backgroundColor = btn.innerText;
    });
  };
}
