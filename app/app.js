
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
  const editBar = document.querySelector(`.${barClass}`);
  toDoList[todo] = editBar.value;
  renderTodos(toDoList);
}

function showHideElement(elementClass){
    const elem = document.querySelector(`.${elementClass}`);
    elem.style.display = elem.style.display == 'block' ? 'none' : 'block';
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
     <i class="todo__edit--js fa fa-pencil" onClick="showHideElement('todo__edit-${index}')"></i>
     <form onsubmit="editTodo(${index},'todo__edit-${index}')">
       <input class="todo__edit-${index}" style="display:block;">
     </form>
   </div>`;
   });
}

function newTodo(todo) {
  // 1. Create ToDo Object and add its properties.
}
