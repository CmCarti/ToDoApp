  // Initialize the app
  let toDoList;
  let completedTodos;
  const todoForm = document.querySelector('.todo__form--js');
  const todoInput = document.querySelector('.todo__input--js');
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
  });

  if (localStorage.getItem("toDoList") === null) {
    toDoList = [];
    completedTodos = [];
  } else {
    /*toDoList = [];
    completedTodos = [];*/
    toDoList = JSON.parse(localStorage.getItem("toDoList"));
    completedTodos = JSON.parse(localStorage.getItem("completedTodos"));
    renderTodos(toDoList);
    renderCompletedTodos(completedTodos);
  }



function addTodo(todoObject) {
  // 1. push todo
  toDoList.push(todoObject);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  // 2. render todos
  renderTodos(toDoList);
}

function removeTodo(todo) {
  // 1. slice todo
  toDoList.splice(todo,1);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  renderTodos(toDoList);
  // 2. render todos
}

function editTodo(todo, barClass){
  const editBar = document.querySelector(`.${barClass}`);
  toDoList[todo] = editBar.value;
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  renderTodos(toDoList);
}

function showHideElement(elementClass){
    const elem = document.querySelector(`.${elementClass}`);
    elem.style.opacity = elem.style.opacity == '1' ? '0' : '1';
    elem.style.width = elem.style.width == '60%' ? '0' : '60%';

}

function renderTodos(toDoList) {
   // 1. render the todos to the screen
   const canvas = document.querySelector('.todo__canvas--js');
   canvas.innerHTML = '';
   toDoList.forEach((item, index) => {
     canvas.innerHTML += `<div class="todo__item--js" data-index="${index}">
     <h3 class="todo__name">${item}</h3>
     <i class="todo__remove--js fa fa-times" onclick="removeTodo(${index})"></i>
     <i class="todo__complete--js fa fa-check" onclick="completeTodo(${index})"></i>
     <form onsubmit="editTodo(${index},'todo__edit-${index}')" style="display:inline;width:60%">
       <input class="todo__edit-${index} todo__edit-generic" style="opacity:0;">
     </form>
     <i class="todo__edit--js fa fa-pencil" onClick="showHideElement('todo__edit-${index}')"></i>

   </div>`;

   });
}
function completeTodo(todo) {
  completedTodos.push(toDoList.slice(todo,todo + 1)[0]);
  removeTodo(todo);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  renderCompletedTodos(completedTodos);
  //renderCompletedTodos(completedTodos);
}
function renderCompletedTodos(toDoList) {
  const canvas = document.querySelector('.todo__canvas-completed--js');
  canvas.style.padding = '15px';
  canvas.innerHTML = '<h2 class="completed">Completed ToDos</h2>';
  toDoList.forEach((item, index) => {
    canvas.innerHTML += `<div class="completed-todo__item--js" data-index="${index}">
    <h3 class="todo__name">${index+1}. <span class="completed__item">${item}</span></h3>
  </div>`;

  });
}
function newTodo(todo) {
  // 1. Create ToDo Object and add its properties.
}
