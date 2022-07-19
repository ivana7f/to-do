"use strict";
// selecting elements
const addBtn = document.querySelector(".addbtn");
const toDoList = document.querySelector(".todos");
const input = document.querySelector(".input");

// session storage check
let htmlSession = sessionStorage.getItem("inputs");
let html = htmlSession ? JSON.parse(htmlSession) : "";
toDoList.innerHTML = html;

function addToDo() {
  if (input.value.trim() !== "") {
    addInput(input.value);
    input.value = "";
  }
}

function addInput(input) {
  html += ` <div class="addedInput"> <p>${input}</p>
                 <button class="remove" onclick="removeItem(this)">X</button>
            </div> `;

  toDoList.innerHTML = html;
  sessionStorage.setItem("inputs", JSON.stringify(html));
}

function removeItem(button) {
  button.parentElement.remove();
  html = toDoList.innerHTML;
  sessionStorage.setItem("inputs", JSON.stringify(html));
}

addBtn.addEventListener("click", addToDo);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addToDo();
  }
});
