// Step 1: Select/target DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
document.addEventListener("DOMContentLoaded", renderTodos);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterOption.addEventListener("change", filterTodos);

function addTodo() {
  // This function will be used to add a task.
}

function addTodo(event) {
  // This function will be used to add a task.
  // console.log(event.type);
  // console.log(event.target);

  event.preventDefault();
  const cleanTodoInput = todoInput.value.trim();
  if (cleanTodoInput !== "") {
    saveLocalTodos(cleanTodoInput);

    // Create the new todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the list item for the task
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = cleanTodoInput;
    todoDiv.appendChild(newTodo);

    // Create the complete button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    // Append the todo div to the todo list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function getTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
function saveLocalTodos(todo) {
  const todos = getTodosFromLocalStorage();
  const todoWithStatus = {
    task: todo,
    status: "Uncompleted",
  };
  todos.push(todoWithStatus);
  const serializedTodosArray = JSON.stringify(todos);
  localStorage.setItem("todos", serializedTodosArray);
}

function renderTodos() {
  const todos = getTodosFromLocalStorage();
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the list item for the task
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.textContent = todo.task;
    todoDiv.appendChild(newTodo);

    // Create the complete button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    todoDiv.appendChild(completedButton);

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    if (todo.status != "Uncompleted") {
      todoDiv.classList.add("completed");
    }
  });
}

function deleteOrCompleteTodo(event) {
  // Function to delete or complete a task
  const target = event.target;
  console.log(target);
  if (target.classList.contains("complete-btn")) {
    const todoDiv = target.parentElement;
    if (todoDiv.classList.contains("completed")) {
      const task = todoDiv.innerText;
      todoDiv.classList.remove("completed");
      updateLocalTodoStatus(task, "Uncompleted");
    } else {
      const task = todoDiv.innerText;
      todoDiv.classList.add("completed");
      updateLocalTodoStatus(task, "Completed");
    }
  }

  if (target.classList.contains("trash-btn")) {
    const todoDiv = target.parentElement;
    todoDiv.classList.add("fall");
    const task = todoDiv.innerText;
    removeLocalTodos(task);

    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
}

function removeLocalTodos(task) {
  const todos = getTodosFromLocalStorage();
  const todoIndex = todos.findIndex((todo) => {
    return todo.task === task;
  });
  todos.splice(todoIndex, 1);
  const serializedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", serializedTodos);
}

function updateLocalTodoStatus(task, status) {
  const todos = getTodosFromLocalStorage();
  const todo = todos.find((todo) => {
    return todo.task === task;
  });
  todo.status = status;
  const serializedTodos = JSON.stringify(todos);
  localStorage.setItem("todos", serializedTodos);
}

function filterTodos(event) {
  // Function to filter task based on completion status
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const selectedValue = event.target.value;
    console.log(todo);
    switch (selectedValue) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
