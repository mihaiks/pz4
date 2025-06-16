"use strict";
console.log("Підключено JavaScript для Практичної роботи No4");

// 1. Вибір елементів
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");
console.log(taskInput, addTaskButton, taskList);

// 2. Додати приклад завдання
const newTask = document.createElement("li");
newTask.textContent = "Приклад завдання";
taskList.appendChild(newTask);

// 3. Додавання нового завдання
addTaskButton.addEventListener("click", function () {
    console.log("Кнопку натиснуто!");
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
        console.log("Додано завдання:", taskText);
    } else {
        console.log("Порожній ввід, завдання не додано");
    }
});

// 4. Видалення з підтвердженням
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        const taskContent = event.target.textContent;
        const confirmDelete = confirm(`Ви дійсно хочете видалити завдання: "${taskContent}"?`);
        if (confirmDelete) {
            event.target.remove();
            console.log("Видалено завдання:", taskContent);
        } else {
            console.log("Видалення скасовано:", taskContent);
        }
    }
});

// 5. Фаза захоплення (не обов'язково)
taskList.addEventListener("click", function(event) {
    console.log("Слухач у фазі захоплення:", event.target);
}, true);
