
  // Initialize the app
  const toDoList = [];
  const todoForm = document.querySelector('.todo__form--js');
  const todoInput = document.querySelector('.todo__input--js');
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
  });


function addTodo(todoObject) {
  // 1. push todo
  toDoList.push(todoObject);
  // 2. render todos
  renderTodos(toDoList);
}
function removeTodo(todo) {
  // 1. pop todo
  // 2. render todos
}

function renderTodos(toDoList) {
   // 1. render the todos to the screen
   const canvas = document.querySelector('.todo__canvas--js');
   canvas.innerHTML = '';
   toDoList.forEach(item => {
     canvas.innerHTML += `<div class="todo__item--js">${item}</div>`;
   });
   // 2. Give the todos event listeners
}

function newTodo(todo) {
  // 1. Create ToDo Object and add its properties.
}
