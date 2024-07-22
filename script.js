"use strict";

const addBtn = document.querySelector("#adicionarTarefa");
const taskInput = document.querySelector("#novaTarefa");
const listContainer = document.querySelector("#listaTarefas");

addBtn.addEventListener("click", () => {
  const newTask = taskInput.value;

  if (newTask) {
    const newContainer = document.createElement("div");
    newContainer.textContent = newTask;
    newContainer.classList.add("listaTarefas");

    listContainer.appendChild(newContainer);
  }
});
