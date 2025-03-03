const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const emptyList = document.getElementById("emptyList");

addButton.addEventListener("click", () => {
  let task = taskInput.value;
  let num_of_tasks = taskList.getElementsByTagName("li").length;
  console.log(num_of_tasks);
  if (emptyList && num_of_tasks == 1) {
    emptyList.remove();
  }
  totalTasks.innerText = `Total tasks: ${num_of_tasks}`;
  let li = document.createElement("li");
  let div = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  checkBox.classList.add("complete-checkbox");
  deleteBtn.classList.add("delete-button");

  div.innerText = task;
  div.classList.add("task-text");
  li.className = "task-item";
  deleteBtn.innerText = "X";

  li.appendChild(checkBox);
  li.appendChild(div);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  checkBox.addEventListener("click", () => {
    if (checkBox.value == "on") {
      checkBox.value = "off";
      li.classList.add("completed");
    } else {
      checkBox.value = "on";
      li.classList.remove("completed");
    }
  });

  if (num_of_tasks == 1) {
    taskList.appendChild(emptyList);
  }
  taskInput.value = "";
});
