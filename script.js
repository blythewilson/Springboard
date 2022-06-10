"use strict";
const form = document.querySelector("#todolist");
const input = document.querySelector("#todoitem");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  const removeBtn = document.createElement("button");
  newItem.innerText = input.value;
  removeBtn.innerText = "Remove";
  input.value = "";
  ul.appendChild(newItem);
  newItem.appendChild(removeBtn);
  newItem.setAttribute("class", "todo");
  newItem.addEventListener("click", function () {
    newItem.classList.toggle("completed");
  });
  removeBtn.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});
