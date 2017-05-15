
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
  // 1. slice todo
  toDoList.splice(todo,1);
  renderTodos(toDoList);
  // 2. render todos
}
function editTodo(todo, barClass){
  const editBar = document.querySelector(`#${barClass}`);
  toDoList[todo] = editBar.value;
  renderTodos(toDoList);
}
function renderTodos(toDoList) {
   // 1. render the todos to the screen
   const canvas = document.querySelector('.todo__canvas--js');
   canvas.innerHTML = '';
   toDoList.forEach((item, index) => {
     canvas.innerHTML += `<div class="todo__item--js">
     <h3 class="todo__name">${item}</h3>
     <i class="todo__remove--js fa fa-times" onclick="removeTodo(${index})"></i>
     <i class="todo__complete--js fa fa-check"></i>
     <i class="todo__edit--js fa fa-pencil"></i>
     <form onsubmit="editTodo(${index},'todo__edit-${index}')">
       <input id="todo__edit-${index}">
     </form>
   </div>`;
   });
   // 2. Give the todos event listeners
}

function newTodo(todo) {
  // 1. Create ToDo Object and add its properties.
}
