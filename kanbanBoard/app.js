//Create task and delete task

//NO. of tasks in board
//Draggable
//Time

//Storage

const openModal = document.getElementById("open-modal");
const container = document.querySelector(".container");
const modal = document.getElementById("modal");
const createBoard = document.getElementById("create-board");
const boardTitle = document.getElementById("title-input");
const beforeEle = document.querySelector(".before");
const deleteBoard = document.querySelectorAll(".delete-board");
const addItem = document.getElementById("add-item");
const itemContainer = document.querySelector(".item-container");
const allItems = document.querySelectorAll(".items");
const allBoards = document.querySelectorAll(".board");

//add item

addItem.addEventListener("click", function () {
  const itemName = prompt("Enter Item Name");

  const item = document.createElement("p");
  item.classList.add("items");
  item.setAttribute("draggable", true);
  item.innerText = itemName;

  item.addEventListener("dragstart", function () {
    item.classList.add("flying");
  });
  item.addEventListener("dragend", function () {
    item.classList.remove("flying");
  });

  itemContainer.appendChild(item);
});

//Delete board

deleteBoard.forEach((e) => {
  e.addEventListener("click", function () {
    const board = e.closest(".board");
    console.log(deleteBoard, board);
    board.remove();
  });
});

//Open Modal

openModal.addEventListener("click", function () {
  modal.classList.remove("closed-modal");
});
if (document.getElementById("close-modal")) {
  document.getElementById("close-modal").addEventListener("click", function () {
    modal.classList.add("closed-modal");
  });
}

//Create Board

createBoard.addEventListener("click", function () {
  const title = boardTitle.value;
  const board = document.createElement("div");
  board.classList.add("board");
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  const boardHeader = document.createElement("div");
  boardHeader.classList.add("board-header");
  const deleteBoardButton = document.createElement("button");
  deleteBoardButton.classList.add("delete-board");
  deleteBoardButton.innerText = "❌";
  const h2 = document.createElement("h2");
  h2.classList.add("board-title");
  h2.innerText = title;
  board.addEventListener("dragover", function () {
    const itemDragging = document.querySelector(".flying");
    board.appendChild(itemDragging);
    const count = document.querySelectorAll(".item-container");
    const numItems = document.querySelectorAll(".numItems");
    console.log(count.length);
    numItems.innerText = `(${count.length})`;
  });
  boardHeader.appendChild(h2);
  boardHeader.appendChild(deleteBoardButton);

  board.appendChild(boardHeader);
  board.appendChild(itemContainer);
  container.insertBefore(board, beforeEle);
  boardTitle.value = "";
  const deleteBoard = document.querySelectorAll(".delete-board");

  deleteBoard.forEach((e) => {
    e.addEventListener("click", function () {
      const board = e.closest(".board");
      console.log(deleteBoard, board);
      board.remove();
    });
  });

  if (modal.classList.add("closed-modal")) {
    modal.classList.add("closed-modal");
  }
});

//dragging

allItems.forEach((item) => {
  item.addEventListener("dragstart", function () {
    item.classList.add("flying");
  });
});
allItems.forEach((item) => {
  item.addEventListener("dragend", function () {
    item.classList.remove("flying");
  });
});
allBoards.forEach((board) =>
  board.addEventListener("dragover", function () {
    const itemDragging = document.querySelector(".flying");
    board.appendChild(itemDragging);
    const count = document.querySelectorAll(".item-container");
    const numItems = document.querySelector(".numItems");

    numItems.innerText = `(${count.length})`;
  })
);
